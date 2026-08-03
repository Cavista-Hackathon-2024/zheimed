import logo from '../assets/logo.png'
import ArrowIcon from '../assets/Arrow Left.svg'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    const navigation = [
        {
            title: 'About Us',
            path: '#about'
        },   
    ]

    return(
        <nav className=" w-[92%] rounded-2xl mx-auto bg-white  shadow-md md:border-0 z-50">
          <div className=" flex items-center justify-between px-4 py-4 mx-auto md:px-8">
              <div className="flex items-center justify-between">
                    <a href="/">
                        <img src={logo} width={120} height={50} alt=""/>
                    </a>
              </div>
              <div>
                  <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        <section>
                            {
                                navigation.map((item, idx) => (
                                    
                                    <Link key={idx} to={item.path} >
                                        <div className='flex items-center gap-2'>
                                            <span className='font-bold text-[#8E98A8]'>{item.title}</span>
                                        </div>
                                    </Link>
                                ))
                            }
                        </section>
                        <section>
                            <Link to={`/demo`} >
                                <div className='flex items-center gap2'>
                                    <span className='font-bold text-[#389E5A]'>Demo Zhemied</span>
                                    <img src={ArrowIcon} alt="" />
                                </div>
                            </Link> 
                        </section>  
                  </ul>
              </div>
            
          </div>
      </nav>
    )
}