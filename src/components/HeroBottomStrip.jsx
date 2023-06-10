import React from 'react'

const HeroBottomStrip = () => {
  return (
    <section className='flex justify-around items-center py-20 bg-[--primary-black] text-white shadow-zinc-700'>
        <div className='flex gap-4 items-center'>
            <span className='text-7xl font-bold'>+150</span>
            <span className='flex flex-col'><span className='text-3xl font-semibold'>Happy</span><span className='text-2xl font-medium'>Students</span></span>
        </div>
        <div className='flex gap-4 items-center'>
            <span className='text-7xl font-bold'>+50</span>
            <span className='flex flex-col'><span className='text-3xl font-semibold'>Cerified</span><span className='text-2xl font-medium'>Courses</span></span>
        </div>
        <div className='flex gap-4 items-center'>
            <span className='text-7xl font-bold'>+1000</span>
            <span className='flex flex-col'><span className='text-3xl font-semibold'>Awards</span><span className='text-2xl font-medium'>Recieved</span></span>
        </div>
    </section>
  )
}

export default HeroBottomStrip