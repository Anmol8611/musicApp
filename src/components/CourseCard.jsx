import React from 'react'
import Button from './Button'

const CourseCard = (props) => {
  return (
    <div className='flex flex-col items-center justify-around border-2 max-w-sm min-h-[400px] px-5 py-8'>
        <h4 className='text-5xl font-semibold'>{props.name}</h4>
        <p className='text-lg font-light text-center max-w-[280px] py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo distinctio fuga iure esse.</p>
        <div>
        <Button text={`Read More`} bg={`--secondary-purple`}/>
        </div>
    </div>
  )
}

export default CourseCard