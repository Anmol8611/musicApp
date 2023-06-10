import React from 'react'
import { BsArrowUp, BsArrowDown, BsPlayCircleFill } from 'react-icons/bs'

const BottomHero = () => {
  return (
    <section className='h-screen bg-[--primary-black] text-[--font-white] flex justify-between items-center'>
        <div className='flex flex-col items-center gap-20'>
        <BsArrowDown className='text-5xl' />
        <div className='text-2xl rotate-[270deg]'>READY TO<br />GET STARTED</div>
        </div>
        <div className='bg-[url(/assets/boy4.png)] h-[606px] w-[1043px]'>
        <BsPlayCircleFill className='text-9xl mt-60 ml-[450px] hover:text-[--secondary-purple] transition-all'/>
        </div>
        <div className='flex flex-col-reverse items-center gap-20'>
        <BsArrowUp className='text-5xl' />
        <div className='text-2xl rotate-[270deg]'>READY TO<br />GET STARTED</div>
        </div>
    </section>
  )
}

export default BottomHero