import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const NavBar = () => {
  return (
    <nav>
        <div className='flex items-center justify-around bg-[--primary-black] py-5'>
            <img src="/assets/logo.png" alt="logo" />
            <ul className='flex text-white text-xl font-medium gap-20'>
                <li className='hover:text-[--secondary-purple] transition-all cursor-pointer hover:border-b'>HOME</li>
                <li className='hover:text-[--secondary-purple] transition-all cursor-pointer hover:border-b'>ABOUT</li>
                <li className='hover:text-[--secondary-purple] transition-all cursor-pointer hover:border-b'>COURSES</li>
                <li className='hover:text-[--secondary-purple] transition-all cursor-pointer hover:border-b'>BLOG</li>
            </ul>
            <div className='flex text-white items-center gap-24 font-medium'>
                <button className='px-5 py-1 bg-[--font-white] text-black hover:text-[--secondary-purple] transition-all'>SIGN IN</button>
                <GiHamburgerMenu className='text-3xl' />
            </div>
        </div>
    </nav>
  )
}

export default NavBar