import HeroImg1 from '../assets/Heroimg1.svg'
import HeroImg2 from '../assets/heroBrainImg.png'
import HeroImg3 from '../assets/Heroimg3.svg'
import HeroImg4 from '../assets/heroTextImg.png'
import { Navbar } from './Navbar'
import { Link } from 'react-router-dom'
export const Hero = () => {
    return (
        <section className='bg-[#1B1818] relative z-10  '>
            <section className='heroBg absolute top-0 right-0 h-full w-full -z-10'></section>

            <section className='fixed w-full pt-6 '>
                <Navbar />
            </section>
            <div className="flex items-center justify-between min-h-screen pt-32 gap-20 mx-auto overflow-hidden text-gray-600 px-24 ">
                <div className='flex flex-col max-w-xl'>
                    <section className='space-y-6 '>
                        <h1 className="text-4xl font-bold text-white sm:text-5xl">AI Model that detects <span className='text-[#389E5A]'>Alzheimer</span> disease</h1>
                        <p className='text-white w-[89%]'>An AI powered model that utilizes advanced machine learning techniques to analyze MRI scans and identify early signs of Alzheimer's with high accuracy.</p>
                    </section>
                    <Link to={`/demo`} className=" w-2/5 text-center px-6 py-3.5 text-white bg-[#389E5A] font-semibold rounded-2xl mt-11">Try Demo</Link>
                </div>
                <div className='flex-1' >
                    <div className='grid grid-cols-2 grid-rows-2 gap-8'>
                        <img src={HeroImg1} className=' ' alt="" /> 
                        <img src={HeroImg4} className='h-[250px] w-full  ' alt="" />
                        <img src={HeroImg2} className=' ' alt="" />
                        <img className=' -mt-20 ' src={HeroImg3} alt="" />

                    </div>
                </div>
            </div>
        </section>
    )
}