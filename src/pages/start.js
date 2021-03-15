import * as React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { Link } from 'gatsby';

import '../scss/style.scss';
import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import { ReactComponent as Vacuum } from '../svg/vacuum.svg';
import { ReactComponent as Prova } from '../svg/provalogo.svg';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

export default function Index() {
  const panelsContainer = useRef();

  useEffect(() => {
    /* Panels */

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#panels-container',
        start: 'top top',
        pin: true,
        scrub: 1,
        end: () => `+=${panelsContainer.current.offsetWidth - innerWidth}`,

      },
    });

    const panels = gsap.utils.toArray('#panels-container .panel');

    tl.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: 'none',
    });

    tl.to('#provalogo_svg__circle', {
      xPercent: -100 * (3),

      motionPath: {
        path: '#provalogo_svg__path',
        align: '#provalogo_svg__path',
        alignOrigin: [0.5, 0.5],
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
  const option = [
    {
      link: '/firstOption',
      contenuto: 'first option',
    },
    {
      link: '/secondOption',
      contenuto: 'second option',
    },
    {
      link: '/thirdOption',
      contenuto: 'third option',
    },
  ];

  return (
    <div>
      <main id="content" className="site-content" role="main">
        <Header />

        <section id="intro" className="full-screen  ">

          <div className="container-fluid">
            <div className="row justify-content-center align-items-center" style={{ height: '90vh' }}>
              <div className="col-6">
                <Vacuum style={{ height: '400px' }} />
              </div>
              <div className="col-6">
                <p>Choose one option to interact with the device</p>
                {
                  option.map(({
                    link, contenuto,
                  }, index) => (
                    <div className="row pb-3" key={index}>
                      <Link to={link}>
                        <button>{contenuto}</button>
                      </Link>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </section>

        <section id="panels" className="bg-primary bigText">

          <div id="panels-container" style={{ width: '400%' }} ref={panelsContainer}>

            <div className="panel ">
              <Prova className="w-100" />
            </div>

          </div>

        </section>
      </main>
    </div>

  );
}
