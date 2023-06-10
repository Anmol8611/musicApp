import React from "react";
import Button from "./Button";

const About = () => {
  return (
    <section className='h-screen bg-[--primary-black] relative text-[--font-white] flex items-center justify-around'>
      <div className='flex flex-col items-start gap-10'>
        <h2 className='text-7xl font-bold'>
          About
          <span className='text-[--secondary-purple] text-6xl font-thin ml-3'>
            Us
          </span>
        </h2>
        <p className='text-sm font-extralight max-w-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          porro harum quibusdam. Corporis asperiores debitis suscipit. Est
          repellat ad impedit?
        </p>
        <div className="flex items-center gap-36">
          <div className="flex flex-col gap-5">
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </div>
          <div className="flex flex-col gap-5">
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </div>
        </div>
        <div>
          <Button text={`Ream More`} bg={`--secondary-purple`} />
        </div>
      </div>
      <div className="mr-20">
        <div className='h-[40vh] w-[360px] right-80 bottom-[350px] rounded-full bg-[--secondary-purple] absolute'></div>
        <img className="absolute z-10 right-64 bottom-44 bottom " src='/assets/Boy2.png' alt='about section' />
      </div>
    </section>
  );
};

export default About;
