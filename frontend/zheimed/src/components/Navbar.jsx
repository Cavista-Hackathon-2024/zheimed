import logo from '../assets/logo.png'
import ArrowIcon from '../assets/Arrow Left.svg'
import { useState } from 'react'

export const Navbar = () => {
    const [state, setState] = useState(false);

    const navigation = [
        {
            title: 'About Us',
            path: '/about'
        },
        {
            title: 'Services',
            path: '/services'
        },
        
    ]
    return(
        <nav className="bg-white border-b md:border-0 mx-10 rounded-lg ">
          <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8 justify-between">
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="javascript:void(0)">
                        <img
                            src={logo}
                            width={120} 
                            height={50}
                            alt=""
                        />
                    </a>
                  <div className="md:hidden font-bold">
                      <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                          onClick={() => setState(!state)}
                      >
                          {
                              state ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                              ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                  </svg>
                              )
                          }
                      </button>
                  </div>
              </div>
              <div className={`pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'}`}>
                  <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                      {
                          navigation.map((item, idx) => {
                              return (
                                <li key={idx} className="text-[#8E98A8] hover:text-indigo-600 font-bold">
                                    <a href={item.path}>
                                        { item.title }
                                    </a>
                                </li>
                              )
                          })
                      }
                      <a href="/demo" className='flex gap-1.5'>
                        <span className='font-bold text-[#389E5A]'>Demo Zheimed</span>
                        <img src={ArrowIcon} alt="" />
                    </a>
                  </ul>
                  
              </div>
            
          </div>
      </nav>
    )
}