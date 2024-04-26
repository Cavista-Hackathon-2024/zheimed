import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
export const Navbar = () => {
    return(
        <div className="flex justify-between items-center px-10 mx-10 my-8 py-2 bg-red-700 rounded-2xl">
            <div>
                <img src={logo} alt="zhemied logo" className='h-10 w-28' />
            </div>
            <div>
                <nav>
                    <ul className='flex items-center gap-8 font-semibold'>
                        <li>
                            <Link>About Us</Link>
                        </li>
                        <li>
                            <Link>Zhemied your health</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}