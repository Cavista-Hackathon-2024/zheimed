import macBookDisplay from "../assets/MacbookProDisplay.png"
import playArrow from "../assets/playArrow.png"
import { Link } from "react-router-dom"
export const TryDemo = () => {
    return (
        <div className=" bg-black grid grid-cols-2 gap-10 py-16 px-10">
           <section className=" bg-[#EBF5EF] flex flex-col justify-center gap-6 h-full col-span-1 w-full rounded-2xl px-5">
                <h3 className=" font-bold text-4xl w-[80%]">Try out the Demo today for free</h3>
                <p className=" w-[70%]">Our cut-edging solution is tailored towards helping you with  advanced machine learning techniques to analyse MRI scans today!</p>
                <Link to={`/demo`} className=" w-2/5 text-center px-6 py-3.5 text-white bg-[#389E5A] font-semibold rounded-2xl">Try Demo</Link>
           </section>
           <section className=" bg-[#389e5a] col-span-1 w-full relative h-full  rounded-2xl">
                <div className=" absolute top-0 right-0 w-full h-full  illustration "></div>
                <section className="flex justify-end">
                    <div className="flex ">
                        <img src={playArrow} alt="" />
                        <img src={playArrow} alt="" />
                    </div>
                </section>
                <section className=" flex justify-center items-center px-12">
                    <img src={macBookDisplay} alt="" />
                </section>
           </section>
        </div>
    )
}


