import React from "react";
import CourseCard from "./CourseCard";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'


const Courses = () => {
  return (
    <section className="bg-[--primary-black] text-white flex flex-col items-center gap-20">
      <div className="flex items-center gap-[1100px]">
        <div className="text-3xl font-light"><span className="text-8xl font-bold">Find</span> Your Course .</div>
        <div className="px-20 py-8 max-w-fit text-xl font-semibold tracking-wide">Edition<br /><span className="text-3xl font-bold tracking-widest">2022</span></div>
      </div>
      <div className="flex gap-36 items-center py-10">
        <CourseCard name={`Course 1`}/>
        <CourseCard name={`Course 2`}/>
        <CourseCard name={`Course 3`}/>
        <CourseCard name={`Course 3`}/>
      </div>
      <div className="flex justify-center items-center gap-10">
        <h3 className="text-2xl font-light">More Courses</h3>
        <HiOutlineArrowNarrowRight className="text-5xl font-thin"/>
      </div>
    </section>
  );
};

export default Courses;
