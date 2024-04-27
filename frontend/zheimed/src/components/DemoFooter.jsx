import ArrowIcon from '../assets/Arrow Left.svg'
const DemoFooter = () => {
    return(
        <div className='bg-[#389E5A] py-4 px-3'>
            <section className='flex items-center justify-between mb-1'>
                <div className="footerLeft">
                    <h3 className='text-4xl font-bold text-white'>Zheimed</h3>
                </div>
                <div className="footerRight">
                    <nav>
                        <ul className='flex items-center justify-between gap-4 font-bold text-white'>
                            <li>
                               <a href="">About Us</a> 
                            </li>
                            <li>
                               <a href="">Services</a> 
                            </li>
                            <li>
                               <a href="">Demo Zheimed</a> 
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <hr />
            <section className='flex items-center justify-between font-light text-white'>
                <div className="loWFooterRight">
                    <h3>All Rights Reserved. Developed 2024, CAVISTA HACKATHON</h3>
                </div>
                <div className="lowFooterLeft">
                    <nav>
                        <ul className='flex items-center justify-between gap-3'>
                            <li>Terms</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </nav>
                </div>
            </section>
        </div>
    )
}

export default DemoFooter