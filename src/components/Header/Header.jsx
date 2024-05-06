import React, { useState,useRef } from 'react'
import css from './Header.module.scss';
import { Component } from 'react'
import {BiMenuAltRight, BiPhoneCall} from 'react-icons/bi';
import {motion} from 'framer-motion';
import {getMenuStyles, headerVariants} from '../../utils/motion'
import useHeaderShadow from '../../hooks/useHeaderShadow';
import useOutsiderAlerter from '../../hooks/useOutsideAlerter';

const Header = () => {

  const [menuOpened, setMenuOpened]=useState(false);
  const headerShadow=useHeaderShadow();
  const menuRef=useRef();
  useOutsiderAlerter({
    menuRef,
    setMenuOpened,
  });

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
        ref={menuRef}
        style={getMenuStyles(menuOpened)}
        className={`flexCenter ${css.menu}`}>
          <li>
            <a href="#service">Services</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonial">Testimonials</a>
          </li>
          <li>
            <a href="https://github.com/yogeshzade" target='_blank'>GitHub</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
          <a href='tel:8055980041'>
          <BiPhoneCall size={"40px"} />
          </a>
       
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