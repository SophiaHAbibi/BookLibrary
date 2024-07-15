import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/philogo.png';


function Navbar() {
    return(
        <nav className='fixed bg-[#fefcec] bg-transparent  transition-all duration-[.3s] top-0 left-0 w-full px-4 lg:px-[40px] z-[80]'>
        <div className='w-full border-b border-white  py-[20px] flex items-center justify-between transition-all duration-[.3s]'>
            <div className='flex items-center gap-2 relative'>
                <Link to="/" className='absolute bottom-[10px] md:bottom-[20px] w-[112px] md:w-[200px] '>
                    <img className="opacity-100 absolute my-auto transition-all duration-[.3s]" src={logo} alt="Logo" width={100} height={100}/>
                </Link>
            </div>
            <div className='lg:flex items-center gap-[12px]'>
              
                    <Link to="/" className='px-[18px] text-[14px] popins hover:bg-[#43AA13] py-[8px] text-[#f0343d] undefined' >Home</Link>
                
                
                    <Link to="/add-book" className='px-[18px] text-[14px] popins hover:bg-[#43AA13] py-[8px] text-[#f0343d] undefined ' >Add Book</Link>
                
            </div>
        </div>
        </nav>
    )
}

export default Navbar;