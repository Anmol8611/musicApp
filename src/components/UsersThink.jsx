import React from 'react'
import UserCard from './UserCard'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const UsersThink = () => {
  return (
    <section className='h-screen text-[--font-white] bg-[--primary-black] flex flex-col items-center'>
        <div className='flex flex-col gap-10 items-center mb-20'>
            <h1 className='text-8xl font-bold tracking-widest'>What</h1>
            <h5 className='text-5xl font-thin tracking-wider text-[--secondary-purple]'>users think</h5>
        </div>
        <div className='flex gap-72 items-center'>
            <UserCard img={`user1.png`} name={`Laura Smith`}/>
            <UserCard img={`user2.png`} name={`John Smith`}/>
            <UserCard img={`user3.png`} name={`Sara Smith`}/>
        </div>
        <div className='text-7xl text-thin flex items-center gap-40'>
        <BsArrowLeft />
        <BsArrowRight />
        </div>
    </section>
  )
}

export default UsersThink