import React from 'react'

const Button = (props) => {
  return (
    <button className={`py-2 px-8 hover:shadow-slate-600 hover:text-red-200 transition-all bg-[${props.bg}]`}>{props.text}</button>
  )
}

export default Button