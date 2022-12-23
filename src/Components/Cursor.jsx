import React, { useState, useEffect } from 'react'
import Inner from '../Images/Inner.png'
import Outer from '../Images/Outer.png'
import '../Styles/cursor.css'
import {motion} from 'framer-motion'

const Cursor = ({cursorActive}) => {

    const [mousePos, setMousePos] = useState({x:0,y:0});

    useEffect(() => {
      const handleMouseMove = (event) => {
        setMousePos({ x: event.clientX, y: event.clientY });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);

    const cursorVariants = {
        default:{
            x: mousePos.x - 10,
            y: mousePos.y - 10
        },
        active:{
            x: mousePos.x - 10,
            y: mousePos.y - 10,
            scale: 1.5
        }
    }

    const outerVariants = {
        default:{
            rotate: 45
        },
        active:{
            rotate: -45
        }
    }

    const innerVariants = {
        default:{
            rotate: 45,
            scale: 1
        },
        active:{
            rotate: 135,
            scale: 0.5
        }
    }

    return (
        <motion.div variants={cursorVariants} animate={cursorActive?"active":"default"} transition={{x:{duration:0.01}, y:{duration:0.01}}} className='cursor'>
            <motion.img variants={outerVariants} animate={cursorActive?"active":"default"} src={Outer} className='outerCursor' alt='Outer Cursor'/>
            <motion.img variants={innerVariants} animate={cursorActive?"active":"default"} src={Inner} className='innerCursor' alt='Inner Cursor'/>
        </motion.div>
  )
}

export default Cursor