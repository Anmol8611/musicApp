import React from 'react'
import { BsArrowDown } from 'react-icons/bs'

const AboutChallenges = () => {
  return (
    <section className='h-screen bg-[--primary-black] text-white flex flex-col justify-center items-center gap-32'>
        <div className='flex flex-col items-center gap-7 bg-[url(/assets/ovalVector.png)] bg-center bg-contain bg-no-repeat w-[100%] h-[40vh]'>
        <h1 className='text-8xl font-bold tracking-widest'>Accept</h1>
        <h3 className='text-7xl font-medium'>New</h3>
        <h1 className='text-8xl font-bold tracking-widest'>Challenges</h1>
        </div>
        <div className='text-8xl font-thin'>
        <BsArrowDown />
        </div>
    </section>
  )
}

export default AboutChallenges