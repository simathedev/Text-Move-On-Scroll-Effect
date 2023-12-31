'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from '../page.module.css';
import { FaGithub, FaLinkedin, FaGlobeAfrica } from 'react-icons/fa';

const Credits = () => {
  const controls = useAnimation();
  const creditsRef = useRef(null);
  const [inView, setInView] = useState(false);

  const handleScroll = () => {
    if (creditsRef.current) {
      const rect = creditsRef.current.getBoundingClientRect();
      const inView = rect.top <= window.innerHeight / 2;
      setInView(inView);
    }
  };

  useEffect(() => {
    const scrollListener = () => {
      handleScroll();
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 2 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={creditsRef}
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      className={`${styles.credits} px-[10px]`}
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className='xs:text-[2rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[4rem]
        md:m-[1rem] lg:m-[1rem] xl:m-[1rem]
         hover:xs:text-[3rem] hover:sm:text-[3rem] hover:md:text-[4rem] hover:lg:text-[5rem] hover:xl:text-[5rem] '
      >
        -About-
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className='xs:text-[10px] sm:text-[16px] md:text-[22px] lg:[24px] xl:[24px] w-[70%] m-4'
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sapiente commodi enim
        consectetur numquam saepe eaque repudiandae quos fuga corrupti perferendis sint ullam alias
        ratione, expedita cum blanditiis error beatae sed! Magnam debitis et atque doloremque dolore
        non rerum hic excepturi repudiandae placeat fugiat dicta consectetur, tenetur incidunt? Autem
        ea exercitationem, impedit repellendus officiis mollitia, repudiandae rem animi deserunt,
        aliquam sit sed aperiam deleniti corporis! Eum distinctio blanditiis nihil quia.
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className='xs:text-[16px] sm:text-[16px] md:text-[22px] lg:[24px] xl:[24px] w-[70%] m-4'
      >
        Created by Simanye M
      </motion.h2>
      <div className={styles.links}>
        <a href="https://github.com/simathedev" target="_blank">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <FaGithub />
          </motion.div>
        </a>
        <a href="https://www.linkedin.com/in/Simanye-magwa-b2118a221" target="_blank">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <FaLinkedin />
          </motion.div>
        </a>
        <a href="https://simathedev.vercel.app/" target="_blank">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <FaGlobeAfrica />
          </motion.div>
        </a>
      </div>
    </motion.div>
  );
};

export default Credits;
