import ArrowIcon from "../assets/whiteArrow.png"
import { Link } from "react-router-dom"
export const Footer = () => {

    const navigation = [
        {
            title: 'About Us',
            path: '#about'
        },   
        {
            title:'Services',
            path: '/services'
        }
    ]

    return(
        <footer className='bg-[#389E5A] py-8 px-20'>
            <section className='flex items-center justify-between mb-1'>
                <div className="footerLeft">
                    <h3 className='text-4xl font-bold text-white'>Zheimed</h3>
                </div>
                <div className="footerRight">
                    <nav>
                        <ul className='flex items-center justify-between gap-4 font-bold text-white'>
                            <section className='flex items-center justify-between gap-4 font-bold text-white'>
                                {
                                    navigation.map((item, idx) => (
                                        <Link key={idx} to={item.path} >
                                            <div className='flex items-center gap2'>
                                                <span className='font-bold'>{item.title}</span>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </section>
                            <section>
                                <Link to={`/demo`} >
                                    <div className='flex items-center gap-2'>
                                        <span className='font-bold'>Demo Zhemied</span>
                                        <img src={ArrowIcon} alt="" />
                                    </div>
                                </Link> 
                            </section>  
                        </ul>
                    </nav>
                </div>
            </section>
            <div className="my-2 ">
                <hr />
            </div>
            <section className='flex items-center justify-between font-light text-white'>
                <div className="loWFooterRight">
                    <h3>All Rights Reserved. Developed 2024, CAVISTA HACKATHON</h3>
                </div>
                <div className="lowFooterLeft">
                    <nav>
                        <ul className='flex items-center justify-between gap-3 text-sm'>
                            <li>Terms</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </nav>
                </div>
            </section>
        </footer>
    )
}
