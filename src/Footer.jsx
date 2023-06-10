import React from 'react'
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='h-screen bg-[--secondary-purple] flex justify-around items-center text-[--font-white]'>
        <div>
            <h2 className='text-5xl font-medium tracking-wide border-b-2 max-w-fit pb-2'>About</h2>
            <ul className='flex flex-col gap-3 mt-5'>
                <li className='hover:text-[--primary-black] hover:scale-105 transition-all cursor-pointer text-2xl font-light'>History</li>
                <li className='hover:text-[--primary-black] hover:scale-105 transition-all cursor-pointer text-2xl font-light'>Our Team</li>
                <li className='hover:text-[--primary-black] hover:scale-105 transition-all cursor-pointer text-2xl font-light'>Mission Statement</li>
                <li className='hover:text-[--primary-black] hover:scale-105 transition-all cursor-pointer text-2xl font-light'>Terms & Conditions</li>
                <li className='hover:text-[--primary-black] hover:scale-105 transition-all cursor-pointer text-2xl font-light'>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <h2 className='text-5xl font-medium tracking-wide border-b-2 max-w-fit pb-2'>What we do</h2>
            <ul className='flex flex-col gap-3 mt-5'>
                <li className='hover:text-[--primary-black] hover:scale-105 transition-all cursor-pointer text-2xl font-light'>News & Stories</li>
                <li className='hover:text-[--primary-black] hover:scale-105 transition-all cursor-pointer text-2xl font-light'>Publications</li>
                <li className='hover:text-[--primary-black] hover:scale-105 transition-all cursor-pointer text-2xl font-light'>Take an action</li>
                <li className='hover:text-[--primary-black] hover:scale-105 transition-all cursor-pointer text-2xl font-light'>Recomendation</li>
                <li className='hover:text-[--primary-black] hover:scale-105 transition-all cursor-pointer text-2xl font-light'>help</li>
            </ul>
        </div>
        <div className='flex flex-col gap-10 items-end'>
            <h2 className='text-5xl font-medium tracking-wider max-w-fit border-b-2 pb-3 text-right'>Signup to<br />Our NewsLetter</h2>
            <input className='px-28 bg-[--secondary-purple] border-2 py-3' type="text" />
            <div className='flex gap-5 items-center'>
                <p>Follow Us</p>
                <div className='flex items-center gap-10'>
                <BsFacebook className='text-3xl hover:text-[--primary-black] hover:scale-105 transition-all' />
                <BsInstagram className='text-3xl hover:text-[--primary-black] hover:scale-105 transition-all'/>
                <BsYoutube className='text-3xl hover:text-[--primary-black] hover:scale-105 transition-all'/>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer