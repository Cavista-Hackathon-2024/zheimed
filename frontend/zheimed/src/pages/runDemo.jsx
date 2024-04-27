import { useState } from 'react';
import getPhotoUrl from 'get-photo-url'
import {Navbar} from '../components/Navbar';
import arrowImg from '../assets/Vector.png'
import uploadImg from '../assets/upload.png';
import axios from 'axios';

const RunDemo = () => {

    const [MRIPhoto, setMRIPhoto] = useState(null)

    const saveMRIPhoto = async () => {
        const newMRIPhoto = await getPhotoUrl('#mriUpload')
        setMRIPhoto(newMRIPhoto)
        // 
        document.querySelector('.FirstStage').style.display = 'none'
        document.querySelector('.SecondStage').style.display = 'block'
        // 
        document.querySelector('.stageTitle').innerHTML = 'Upload Documents'
    }

    const handleSubmit = async (event) => {
        // event.preventDefault();
    
        try {
          const formData = new FormData();
          formData.append('image', MRIPhoto);
    
          const response = await axios.post('/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
    
          console.log('Image upload successful:', response.data);
          // Handle successful upload (e.g., display success message)
        } catch (error) {
          console.error('Image upload failed:', error);
          // Handle upload errors (e.g., display error message)
        }
      };
    
    
    return (
        <>
            <section  className='bg-black py-14'>
                <div className='flex flex-col '>
                    <div>
                        <Navbar />
                    </div>
                    <section className='flex mx-auto bg-white mt-14 w-[94%] rounded-lg h-screen'>
                        <div className="w-[40%] flex flex-col items-center pt-12">
                            <div className='flex items-center gap-4 '>
                                <img src={arrowImg} alt="" />
                                <p>Back</p>
                            </div>

                            <div className='mt-28 '>
                                <div className='flex items-center gap-4'>
                                    <div className=' bg-[#04802E] h-4 w-4 rounded-full'></div>
                                    <h4 className='text-[#04802E]'>Upload MRI Scan</h4>
                                </div>
                                <div className='w-[2px] h-10 bg-[#98A2B3] ml-[5px]'></div>
                                <div className='flex items-center gap-4'>
                                    <div className=' bg-[#98A2B3] h-4 w-4 rounded-full'></div>
                                    <h4>Analyse MRI Scan</h4>
                                </div>
                                <div className='w-[2px] h-10 bg-[#98A2B3] ml-[5px]'></div>
                                <div></div>
                                <div className='flex items-center gap-4'>
                                    <div className=' bg-[#98A2B3] h-4 w-4 rounded-full'></div>
                                    <h4>Download Report</h4>
                                </div>
                            </div>
                        </div>
                        <div className="secRight w-[60%]  pt-12 px-4">
                            <div>
                                <h2 className='text-4xl font-bold'>Demo</h2>
                                <p className='font-medium '>Check your symptoms & find possible causes</p>
                            </div>

                            {/* DIFFERENT SEGMENTS */}
                            <div>
                                <section className=' mt-14'>
                                    <h3  className='text-4xl font-bold stageTitle'>Upload MRI Scan</h3>
                                    {/* STAGES */}
                                    <div className='FirstStage'>
                                        <div className='bg-[#4753] mt-4 py-16'>
                                            <form action="">
                                                <input className='hidden' type="file" accept='image/*' name="" id="mriUpload" />
                                                <label htmlFor="mriUpload" onClick = {saveMRIPhoto}  className='flex flex-col items-center justify-center cursor-pointer'>
                                                <div>
                                                    <img src={uploadImg} alt="" />
                                                </div>
                                                <div>
                                                    <p className='text-center '><span className=' text-rose-700'>Click to upload</span> or drag and drop</p>
                                                    <p className='text-center text-gray-500'>JPG File (max, 800x400px)</p>
                                                </div>
                                                </label>
                                            </form>
                                        </div>
                                    </div>
                                    {/*  */}
                                    <div className='SecondStage hiddenSecond' >
                                        <section>
                                           <div className='pt-4 '>
                                            <img src={MRIPhoto} alt="" className='h-[250px] w-[250px]' />
                                           </div>
                                           <button></button>
                                        </section>
                                        <button onClick={handleSubmit}  className='bg-[#389E5A] text-white px-8 py-3'>Continue</button>
                                    </div>
                                    
                                </section>
                            </div>


                 
                            
                        </div>
                        
                    </section>
                </div>
            </section>
        </>

    )
}

export default RunDemo;