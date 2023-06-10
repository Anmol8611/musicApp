import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className='flex justify-between h-[calc(100vh-70px)] items-center bg-[--primary-black]'>
      <div className='flex flex-col justify-between items-end text-white ml-10'>
        <div className='mb-20'>
          <img src='/assets/UIlogo.png' alt='UI logo' />
        </div>
        <h3 className='text-5xl mt-20 tracking-widest rotate-[270deg]'>
          Beginner's
        </h3>
      </div>
      <div className='mb-[605px] mr-72'>
        <div className='h-[40vh] w-[360px] mt-64 absolute rounded-full bg-[--secondary-purple]'></div>
        <img
          className='absolute z-10'
          src='/assets/HeroBoy.png'
          alt='hero boy'
        />
      </div>
      <div className='flex flex-col mr-20 text-white'>
        <div className='px-20 py-8 border-4 border-r-0 max-w-fit text-xl font-semibold tracking-wide absolute right-0 top-40'>
          Edition
          <br />
          <span className='text-3xl font-bold tracking-widest'>2022</span>
        </div>
        <div className='flex flex-col gap-5'>
          <h4 className='text-3xl font-semibold max-w-sm'>
            Start Guide for Beginner Designer
          </h4>
          <p className='text-xl font-medium max-w-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            consectetur
          </p>
          <div className='text-white mt-10'>
            <Button text={`Let's Start`} bg={`--secondary-purple`} />
            <Button text={`Read More`} bg={`--primary-black`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
