import HeroImg1 from '../assets/Heroimg1.svg'
import HeroImg2 from '../assets/Heroimg2.svg'
import HeroImg3 from '../assets/Heroimg3.svg'
import { Navbar } from './Navbar'
export const Hero = () => {
    return (
        <section className='bg-[#1B1818] relative z-10'>
            <div className='wavyBg absolute w-full h-full '></div>
            <section className=' pt-6 fixed w-full'>
                <Navbar />
            </section>
            <div className="max-w-screen-xl items-center mx-auto min-h-screen justify-between px-4 py-32 gap-32 text-gray-600 overflow-hidden md:px-8 md:flex  ">
                <div className='flex-none space-y-5 max-w-xl'>
                    
                    <h1 className="text-4xl text-white font-extrabold sm:text-5xl">
                        An AI Model that detects <span className='text-[#389E5A]'>Alzheimer</span> disease
                    </h1>
                    <p className='text-white'>
                        An AI powered model that utilizes advanced machine learning techniques to analyze MRI scans and identify early signs of Alzheimer's with high accuracy.
                    </p>
                    <button
                        className="w-1/2 px-6 py-3.5 text-white bg-[#389E5A] font-semibold rounded-lg duration-150 hover:bg-[#389E5A] active:shadow-lg"
                    >
                        Try demo
                    </button>
                </div>
                <div className='flex-1 hidden md:block' >
                    <div className='flex gap-3'>
                    <div className='flex flex-col gap-2'>
                        <img src={HeroImg1} className='' alt="" />
                        <img src={HeroImg2} alt="" />
                    </div>
                    <div className='flex flex-col gap-12'>
                        <img className='invisible' src={HeroImg2} alt="" />
                        <img src={HeroImg3} alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}