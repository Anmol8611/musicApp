import React from 'react'
import Button from './Button'

const Form = () => {
  return (
    <section className='h-screen bg-[--primary-black] text-[--font-white] flex flex-col items-end bg-[url(/assets/subscribeBoy.png)] bg-contain bg-left bg-no-repeat pr-64 pt-28'>
        <div className='text-center max-w-sm'>
            <h2 className='text-5xl font-bold mb-4'>Subscribe</h2>
            <h5 className='text-3xl font-thin tracking-widest text-[--secondary-purple] mb-3'>to our newsletter</h5>
            <p className='text-sm font-semibold mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit enim </p>
        </div>
        <form action="#" className='flex flex-col items-center gap-16'>
            <input className='py-4 pl-8 pr-36 bg-[--primary-black] border-2 border-[--secondary-purple]' type="text" placeholder='NAME' />
            <input className='py-4 pl-8 pr-36 bg-[--primary-black] border-2 border-[--secondary-purple]' type="email" placeholder='MAIL' />
            <textarea className='py-4 pl-8 pr-36 bg-[--primary-black] border-2 border-[--secondary-purple]' rows="5" type="textarea" placeholder='MESSAGE' />
        </form>
        <div className='mt-16 mr-28'>
        <Button text={`Send Message`} bg={`--secondary-purple`}/>
        </div>
    </section>
  )
}

export default Form