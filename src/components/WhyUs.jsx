import React from "react";
import Button from "./Button";

const WhyUs = () => {
  return (
    <section className='h-screen bg-[--primary-black] relative text-[--font-white] flex flex-row-reverse items-center justify-around'>
      <div className='flex flex-col items-start gap-10'>
        <h2 className='text-7xl font-bold'>
          Why 
          <span className='text-[--secondary-purple] text-6xl font-thin ml-3'>
            Us ?
          </span>
        </h2>
        <p className='text-sm font-extralight max-w-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          porro harum quibusdam. Corporis asperiores debitis suscipit. Est
          repellat ad impedit?
        </p>
        <div>
          <Button text={`Read More`} bg={`--secondary-purple`} />
        </div>
      </div>
      <div className='mr-20'>
        <div className='h-[40vh] w-[360px] left-72 bottom-96 rounded-full bg-[--secondary-purple] absolute'></div>
        <img
          className='absolute z-10 left-80 bottom-44 bottom '
          src='/assets/whyBoy3.png'
          alt='about section'
        />
      </div>
    </section>
  );
};

export default WhyUs;
