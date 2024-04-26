import HeroImg1 from '../assets/Heroimg1.svg'
import HeroImg2 from '../assets/Heroimg2.svg'
import HeroImg3 from '../assets/Heroimg3.svg'
import { Navbar } from './Navbar'
export const Hero = () => {
    return (
        <section className='relative z-10 bg-black'>
            <div className='absolute w-full h-full wavyBg '></div>
            <section className='fixed w-full pt-6 '>
                <Navbar />
            </section>
            <div className="items-center justify-between max-w-screen-xl min-h-screen gap-12 px-4 py-32 mx-auto overflow-hidden text-gray-600 md:px-8 md:flex ">
                <div className='flex-none max-w-xl space-y-5'>
                    
                    <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
                        AI Model that diagnoses Alzheimer disease
                    </h1>
                    <p className='text-white'>
                        An AI powered model that utilizes advanced machine learning techniques to analyze MRI scans and identify early signs of Alzheimer's with high accuracy.
                    </p>
                    <button
                        className="w-1/2 px-6 py-3.5 text-white bg-[#389E5A] rounded-lg duration-150 hover:bg-[#389E5A] active:shadow-lg"
                    >
                       Try Demo
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