import React from "react";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion';

import { FaInstagram,FaFacebook,FaLinkedinIn,FaGithub,FaYoutube } from "react-icons/fa";
import { footerVariants, staggerChildren } from "../../utils/motion";

const Footer = () => {
  return (
    <motion.section 
    variants={staggerChildren}
    initial="hidden"
      whileInView="show"
      viewport={{once:false,amount:0.25}}

    className={`paddings ${css.wrapper}`}>

      <motion.div
      variants={footerVariants}
       className={`innerWidth yPadding flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br /> amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:yogeshzade999@gmail.com">Saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>Nagpur, Maharashtra, Nagpur</p>
          </div>
          <div className={`flexCenter ${css.social}`}>
          <a href=""><FaInstagram /></a>
          <a href=""><FaFacebook /></a>
          <a href=""><FaLinkedinIn /></a>
          <a href=""><FaGithub /></a>
          <a href=""><FaYoutube /></a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
