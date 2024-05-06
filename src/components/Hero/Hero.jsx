import React from "react";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer,slideIn } from "../../utils/motion";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:false,amount:0.25}}
      className={`innerWidth ${css.container}`}>
        {/* upper elments */}
        
        <div className={css.upperElements}>

          <motion.span 
          variants={fadeIn("right","tween", 0.2, 1)}
          className="primaryText">
            Hey there, <br /> I'm Yogesh
          </motion.span>

          <motion.span className="secondaryText"
          variants={fadeIn("left","tween", 0.4, 1)}
          >
            I design beautiful simple
            <br />
            things, And I love what i do.
          </motion.span>
        </div>
        {/* email */}
        <a href="mailto:yogeshzade999@gmail.com" className={css.email}>
          yogeshzade999@gmail.com
        </a>
        {/* person image */}
        <motion.div className={css.person}
         variants={fadeIn("up","tween", 0.3, 1)}
        >
          <motion.img 
          variants={slideIn("up","tween", 0.5, 1.3)}
          src="./yogesh-2.png" alt="" />
        </motion.div>
        {/* lower elments */}
        <div className={css.lowerElements}>
          <motion.div 
           variants={fadeIn("right","tween", 0.2, 1)}
          className={css.experience}>
            <div className="primaryText">3+</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>
          <motion.div 
           variants={fadeIn("left","tween", 0.4, 1)}
          className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span>Certified Professional</span>
            <span>Website Developer</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
