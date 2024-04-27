import { useState } from "react"
import { Navbar } from "../components/Navbar";
import ArrowLeft from '../assets/Arrow Left 2.svg';
import Steps from '../assets/Steps.svg'

export const DemoConsole = () => {
    const [images, setImages] = useState([]);

    const handleFileInputChange = (e) => {
        const newImages = [...e.target.files];
        Promise.all(newImages.map((image) => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(image);
          });
        })).then((imagePreviews) => {
          const updatedImages = [
            ...images,
            ...newImages.map((image,index) => ({
              file: image,
              preview: imagePreviews[index],
            }))
          ];
          setImages(updatedImages)
        });
      };
      const handleClearImages = () => {
        setImages([]);
      };
    return (
        <div>
            <section className="bg-black ">
                <div className="">
                    <div className="" ></div>
                    <div>
                        <Navbar />
                    </div>
                    <div className="mx-10 bg-white border-b rounded-lg shadow-md md:border-0 mt-10 p-32">
                        <div className="flex ">
                            <div className="flex flex-col gap-10">
                            <a href="/demo" className="flex w-40 justify-center gap-1.5 px-4 py-1.5 border-2 rounded-full">
                                <img src={ArrowLeft} alt="" />
                                <span>Back</span>
                            </a>
                            <img src={Steps} alt="" />
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="text-center flex flex-col gap-5">
                                    <h1 className="text-4xl font-bold">Demo</h1>
                                    <h6>Check your symptoms & find possible causes</h6>
                                </div>
                                <div className="p-10 flex flex-col gap-6 ">
                                    <h1 className="text-2xl font-bold">Upload MRI Scan</h1>
                                    <fieldset className="w-full space-y-1 dark:text-gray-800">
                                        <div className="flex">
                                            <input type="file" name="files" id="files" className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-300 dark:text-gray-600 dark:bg-gray-100" />
                                        </div>
                                    </fieldset>
                                    <button className="bg-[#389E5A] px-8 py-3 w-1/2 mx-auto text-white font-bold text-lg rounded-lg">Continue</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}