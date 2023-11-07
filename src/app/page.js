'use client';
import styles from './page.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Credits from './components/Credits';
import Navbar from './components/Navbar';

export default function Home() {

  const firstText=useRef(null);
  const secondText=useRef(null);
  const slider=useRef(null);
  let xPercent=0;
  let direction=-1;

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animation);
  },[]);

  const animation = ()=>{
    if (xPercent <= -100)
    {
      xPercent = 0;
    }
    if (xPercent > 0)
    {
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent});
    gsap.set(secondText.current, {xPercent: xPercent});
    xPercent+=0.1*direction;
    requestAnimationFrame(animation);
  };

  return (
    <>
    <Navbar/>
    <main className={styles.main}>
     <Image
     fill={true}
     src="/images/background.jpg"
     alt="backgroundImage"
     />
     <div className={styles.sliderContainer}>
     <div ref={slider} className={styles.slider}>
      <p ref={firstText}>Artistry In Motion</p>
      <p ref={secondText}>Artistry In Motion</p>
     </div>
     </div>
     <div>
    </div>
    </main>
    <Credits/>
    </>
  )
}
