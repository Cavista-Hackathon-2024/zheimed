import { Navbar } from "../components/Navbar"
import DemoFooter from "../components/DemoFooter"
import demoHealthIcon from '../assets/demoHealthIcon.svg'
import { Link } from "react-router-dom"
export const DemoPage = () => {
    return (
        <>
            <section className="bg-black ">
                <div className="py-10">
                    <div className=" dottedBg body" ></div>
                    <div>
                        <Navbar />
                    </div>
                    <header className="px-8 mt-4">
                        <div className="demoHero  h-[40vh]"></div>
                    </header>
                </div>

            </section>

            {/*  */}

            <section className="mt-8 ">
                <div className="flex flex-col items-center justify-center gap-2 text-center ">
                    <h3 className="text-4xl font-bold">Let’s get started by understanding Demo Features!</h3>
                    <p className="w-[60%] text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam alias quaerat blanditiis at, odit accusamus iure. Expedita corporis numquam tenetur.</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-10 py-16">
                    <img src={demoHealthIcon} alt="" />
                    <div>
                        <button className="text-white bg-[#389E5A] px-8 py-2 rounded-lg">
                            <Link to={`/rundemo`}>Start Demo</Link>
                        </button>
                    </div>
                </div>
            </section>

            <section>
                <DemoFooter />
            </section>
        </>
    )
}
