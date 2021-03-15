import * as React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'gatsby';

import '../scss/style.scss';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const panelsContainer = useRef();
  const intro = useRef();

  useEffect(() => {
    /* Panels */
    const panels = gsap.utils.toArray('#panels-container .panel');
    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '#panels-container',
        pin: true,
        start: 'top top',
        scrub: 1,
        invalidateOnRefresh: true,
        snap: {
          snapTo: 1 / (panels.length - 1),
          duration: { min: 0.1, max: 0.1 },
        },
        end: () => `+=${panelsContainer.current.offsetWidth - innerWidth}`,
      },
    });
  }, []);

  const panels = [
    'Smart objects are devices that have network connectivity and they work by collecting user data, '
    + 'process and analyse that data and then return it back to the user.',
    'The data they collect comes from our interaction with the objects: your voice, your face, the map of your house and even your habits.',
    'Data is stored in big server farms where Artificial Intelligences analyse this data and understand stuff from it. ',
    'This data is not only stored by the company that produces the object (FIRST PARTY), but also from other companies that are called second and third parties. ',
    'The path of the data from first parties to second and third parties is still not clear, but we do know that data has economical value.',
  ];

  return (
    <div>
      <main id="content" className="site-content" role="main">

        <section id="intro" className="full-screen bg-secondary">
          <p>Alexa I am home</p>

        </section>

        <section id="panels" className="bg-primary bigText">

          <div id="panels-container" style={{ width: '500%' }} ref={panelsContainer}>

            {
          panels.map((text, index) => (

            <article key={index} className="panel full-screen red">
              <div className="container-fluid">
                <div className={`row h-100 ${(index % 2) ? 'align-items-end' : ''}`}>
                  <div className="col-10 ">
                    <p className="display-5">{text}</p>
                  </div>

                </div>
              </div>
            </article>
          ))
        }
          </div>

        </section>
        <section id="intro" className="full-screen bg-primary">
          <div className="container-fluid">
            <div className="row">
              <p className="messapiaSerif finalQuote display-4">Do you know what smart objects can tell about you?</p>
              <p className="finalQuote"><Link to="/menu">Home</Link></p>
            </div>

          </div>
        </section>
      </main>
    </div>

  );
}