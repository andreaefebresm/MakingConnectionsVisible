import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'gatsby';
import { ReactComponent as Intro } from '../svg/intro.svg';
import { ReactComponent as Intro2 } from '../svg/intro2.svg';
import '../scss/style.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const panelsContainer = useRef();
  const text = useRef();

  const heys = [
    'Alexa',
    'Ok Google',
    'Hey Siri',
  ];

  const [heyIndex, setHeyIndex] = useState(0);

  useEffect(() => {
    gsap.to('#fuck', {
      scrollTrigger: {
        trigger: '#panels-container',
        start: 'top top',
        pin: true,
        scrub: 0,

        end: () => `+=${panelsContainer.current.offsetWidth - innerWidth}`,
      },
      xPercent: -66, // Questo definisce a che punto si ferma il SVG
      ease: 'none',
    });

    const interval = setInterval(() => {
      setHeyIndex((prevState) => {
        let nextIndex = prevState + 1;

        if (nextIndex > (heys.length - 1)) nextIndex = 0;

        return nextIndex;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <main id="content" className="site-content" role="main">

        <section id="intro" className="full-screen bg-secondary">
          <p className="bigText text-center display-3">
            {heys[heyIndex]}
            {' '}
            I am home
          </p>
          <a href="#panels" className="scroll" style={{ fontSize: '350%', textDecoration: 'none' }}>⤓</a>

        </section>

        <section id="panels" className="bg-primary bigText">

          <div id="panels-container" style={{ width: '300%' }} ref={panelsContainer}>

            <div className="panel">
              <Intro className="position-relative" id="fuck" />

            </div>

          </div>

        </section>

        <section id="intro" className="full-screen bg-primary">
          <Intro2 />
        </section>

        <section id="intro" className="full-screen bg-primary">
          <div className="container-fluid">
            <div className="row">
              <p className="messapiaSerif finalQuote display-4">Do you know what smart objects can tell about you?</p>
              <p className="finalQuote"><Link to="/menu" style={{ fontSize: '350%' }}>⤓</Link></p>
            </div>

          </div>
        </section>

      </main>
    </div>

  );
}
