import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import imagesLoaded from 'imagesloaded';
import sunnies1 from './assets/sunglasses-1.jpg';
import sunnies1x2 from './assets/sunglasses-1-2x.jpg';
import sunnies2 from './assets/sunglasses-2.jpg';
import sunnies2x2 from './assets/sunglasses-2-2x.jpg';
import sunnies3 from './assets/sunglasses-3.jpg';
import sunnies3x2 from './assets/sunglasses-3-2x.jpg';
import sunnies4 from './assets/sunglasses-4.jpg';
import sunnies4x2 from './assets/sunglasses-4-2x.jpg';
import sweaters1 from './assets/sweaters-1.jpg';
import sweaters1x2 from './assets/sweaters-1-2x.jpg';
import sweaters2 from './assets/sweaters-2.jpg';
import sweaters2x2 from './assets/sweaters-2-2x.jpg';
import sweaters3 from './assets/sweaters-3.jpg';
import sweaters3x2 from './assets/sweaters-3-2x.jpg';
import sweaters4 from './assets/sweaters-4.jpg';
import sweaters4x2 from './assets/sweaters-4-2x.jpg';
import arrow from './assets/arrow.svg';
import { GlobalStyle } from './style.js';

function App() {

  //header animations
  const carouselsRef = useRef(null);


  useEffect(() => {
    const carousels = carouselsRef.current.querySelectorAll("header h1, header h2");
    

    const fadeInTimeline = gsap.timeline();

    fadeInTimeline
      .set(carousels, { opacity: 0 })
      .to(carousels, { opacity: 1, delay: 1, stagger: 1, duration: 3 });

    carousels.forEach(carousel => {
      const spanTag = carousel.querySelector("span");
      const spanWidth = spanTag.clientWidth;

      for (let i = 0; i < 20; i = i + 1) {
        carousel.appendChild(spanTag.cloneNode(true));
      }

      const movementTimeline = gsap.timeline({
        repeat: -1
      });

      movementTimeline
        .set(carousel, { x: 0 })
        .to(carousel, { x: spanWidth * -1, duration: 6, ease: "linear" });
    });


    //slides animations
    const slides = document.querySelectorAll('section div.slides');

    slides.forEach(slide => {
      let current = 0;
      let z = 1000000000;

      const images = slide.querySelectorAll('img');

      images.forEach(image => {
        z = z - 1;
        image.style.zIndex = z;
      });

      gsap.set(images, { opacity: 0 });

      imagesLoaded(images, function () {
        const timeline = gsap.timeline();

        timeline
          .set(images, {
            x: () => {
              return 500 * Math.random() - 250;
            },
            y: "500%",
            rotation: () => {
              return 90 * Math.random() - 45;
            },
            opacity: 1
          })
          .to(images, { x: 0, y: 0, stagger: -0.25 })
          .to(images, {
            rotation: () => {
              return 16 * Math.random() - 8;
            }
          });
      });

      slide.addEventListener('click', function() {
        z = z - 1;

        let direction = "150%";
        let midAngle = 15;

        if (Math.random() > 0.5) {
          direction = "-150%";
          midAngle = -15;
        }

        const currentImage = images[current];
        const flipTimeline = gsap.timeline();

        flipTimeline
          .set(currentImage, { x: 0 })
          .to(currentImage, {
            x: direction,
            rotation: midAngle,
            rotationY: 90,
            scale: 1.1
          })
          .set(currentImage, { zIndex: z })
          .to(currentImage, {
            x: 0,
            rotation: () => {
              return 16 * Math.random() - 8;
            },
            rotationY: 0,
            scale: 1
          });

        current = current + 1;
        current = current % images.length;
      });
    });


  }, []);





  return (
    <>
      <GlobalStyle />
      <header ref={carouselsRef}>
        <h1>
          <span>Seamstress</span>
        </h1>
        <h2>
          <span>Lookbook Spring + Summer</span>
        </h2>
      </header>

      <section>
        <div className="split">
          <div className="slides">
            <img src={sunnies1} srcSet={`${sunnies1}, ${sunnies1x2} 2x`} alt="Sunglasses 1" />
            <img src={sunnies2} srcSet={`${sunnies2}, ${sunnies2x2} 2x`} alt="Sunglasses 2" />
            <img src={sunnies3} srcSet={`${sunnies3}, ${sunnies3x2} 2x`} alt="Sunglasses 3" />
            <img src={sunnies4} srcSet={`${sunnies4}, ${sunnies4x2} 2x`} alt="Sunglasses 4" />
          </div>
        </div>

        <div className="split">
          <div className="info">
            <h2>
              Summer sunnies
            </h2>
            <p>
              We jumped on a call with top eyewear designer, Poppy Lu, from her home in New York City to discuss what's in and what's not in, for this summer's sunglasses look.
            </p>
            <p>
              <a href="#">
                Read more
                <img src={arrow} alt="Read more" />
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="alternative">
        <div className="split">
          <div className="slides">
            <img src={sweaters1} srcSet={`${sweaters1}, ${sweaters1x2} 2x`} alt="Sweaters 1" />
            <img src={sweaters2} srcSet={`${sweaters2}, ${sweaters2x2} 2x`} alt="Sweaters 2" />
            <img src={sweaters3} srcSet={`${sweaters3}, ${sweaters3x2} 2x`} alt="Sweaters 3" />
            <img src={sweaters4} srcSet={`${sweaters4}, ${sweaters4x2} 2x`} alt="Sweaters 4" />
          </div>
        </div>

        <div className="split">
          <div className="info">
            <h2>
              Menswear to swear by
            </h2>
            <p>
              Is it too much to hope that we finally could have a tipping point in sustainable thinking and climate change? We asked fashion designer, Ronen Hill, if this summer's collection will be the most eco-friendly ever.
            </p>
            <p>
              <a href="#">
                Read more
                <img src={arrow} alt="Read more" />
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
