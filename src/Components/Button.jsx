import React from 'react'
import '../Styles/button.css'

const Button = ({setCursorActive}) => {
  return (
    <button onMouseEnter={() => setCursorActive(true)} onMouseLeave={() => setCursorActive(false)} className='button'>Button</button>
  )
}

export default Button