import React from 'react';
import sunnies1 from './assets/sweaters-1.jpg';
import sunnies1x2 from './assets/sweaters-1-2x.jpg';
import sunnies2 from './assets/sweaters-2.jpg';
import sunnies2x2 from './assets/sweaters-2-2x.jpg';
import sunnies3 from './assets/sweaters-3.jpg';
import sunnies3x2 from './assets/sweaters-3-2x.jpg';
import sunnies4 from './assets/sweaters-4.jpg';
import sunnies4x2 from './assets/sweaters-4-2x.jpg';
import sweaters1 from './assets/sweaters-1.jpg';
import sweaters1x2 from './assets/sweaters-1-2x.jpg';
import sweaters2 from './assets/sweaters-2.jpg';
import sweaters2x2 from './assets/sweaters-2-2x.jpg';
import sweaters3 from './assets/sweaters-3.jpg';
import sweaters3x2 from './assets/sweaters-3-2x.jpg';
import sweaters4 from './assets/sweaters-4.jpg';
import sweaters4x2 from './assets/sweaters-4-2x.jpg';
import { GlobalStyle } from './style.js';

function App() {
  return (
    <>
      <GlobalStyle />
      <header>
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
                <img src="arrow.svg" alt="Read more" />
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
                <img src="arrow.svg" alt="Read more" />
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
