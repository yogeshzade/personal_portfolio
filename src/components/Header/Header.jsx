import React, { useState } from 'react'
import css from './Header.module.scss';
import { Component } from 'react'
import {BiMenuAltRight, BiPhoneCall} from 'react-icons/bi';
import {motion} from 'framer-motion';
import {getMenuStyles, headerVariants} from '../../utils/motion'
import useHeaderShadow from '../../hooks/useHeaderShadow';
const Header = () => {

  const [menuOpened, setMenuOpened]=useState(false);
  const headerShadow=useHeaderShadow();
  return (
    <motion.div 
        variants={headerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{once:false, amount:0.25}}
    className={`bg-primary paddings ${css.wrapper}`}
    style={{boxShadow: headerShadow}}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>
        Yogesh Zade
        </div>
        <ul 
        style={getMenuStyles(menuOpened)}
        className={`flexCenter ${css.menu}`}>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Experience</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Testimonials</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
          <p>+91 8055980041</p>
          <BiPhoneCall size={"40px"} />
          </li>
        </ul>
        <div className={css.menuIcon} 
        onClick={()=>setMenuOpened((prev)=>!prev)}
        >
          <BiMenuAltRight size={"30px"}/>
        </div>
      </div>
    </motion.div>
  )
}

export default Header