import HeroImg1 from '../assets/Heroimg1.svg'
import HeroImg2 from '../assets/Heroimg2.svg'
import HeroImg3 from '../assets/Heroimg3.svg'
import { Navbar } from './Navbar'
export const Hero = () => {
    return (
        <section className='bg-black'>
            <section className=' pt-6 fixed w-full'>
                <Navbar />
            </section>
            <div className="max-w-screen-xl items-center  mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex mt ">
                <div className='flex-none space-y-5 max-w-xl'>
                    
                    <h1 className="text-4xl text-white font-extrabold sm:text-5xl">
                        Lorem ispum. Okay lorem ispum
                    </h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam ex explicabo veritatis doloribus est aliquid dolores eveniet animi quisquam expedita cumque mollitia nisi, nam debitis exercitationem illum ipsam? Rerum, numquam.
                    </p>
                    <button
                        className="w-1/2 px-6 py-3.5 text-white bg-[#389E5A] rounded-lg duration-150 hover:bg-[#389E5A] active:shadow-lg"
                    >
                        Start here
                    </button>
                </div>
                <div className='flex-1 hidden md:block mt-6'>
                    <div className='flex gap-3'>
                    <div className='flex flex-col gap-2'>
                        <img src={HeroImg1} className='' alt="" />
                        <img src={HeroImg2} alt="" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <img src={HeroImg2} alt="" />
                        <img src={HeroImg3} alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}