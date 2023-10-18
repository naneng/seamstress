import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* @font-face {
    font-family: 'PT Root';
    src: url("./assets/ptroot.woff2") format('woff2');
  } */

  body {
    font-family: 'Roboto Mono', monospace;
    font-size: 24px;
    line-height: 1.5;
    background-color: #000000;
    color: #ffffff;
  }

  header {
    position: fixed;
    top: 8px;
    left: 0;
    width: 100%;
    overflow: hidden;
    font-size: 16px;
    font-variation-settings: "wght" 800;
    z-index: 1000000000001;
  }

  header h1,
  header h2 {
    display: flex;
  }

  h1 span,
  h2 span {
    width: 150px;
    flex: 0 0 auto;
    display: inline-block;
    padding: 0 0 0 10px;
    font-size: 14px;
  }

  h2 span {
    width: 250px;
  }

  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 100vh;
    grid-auto-flow: dense;
  }

  section div.split {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    /* font-family: PT Root; */
  }

  section div.split:first-child {
    background-color: #111111;
  }

  section div.slides {
    width: 500px;
    height: 750px;
    position: relative;
    perspective: 800px;
  }

  section div.slides img {
    position: absolute;
    top: 0;
    left: 0;
    width: 500px;
    height: 750px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.25);
  }

  section div.info {
    padding: 32px;
    max-width: 480px;
  }

  section h2 {
    font-size: 32px;
  }

  section p {
    margin: 32px 0 0 0;
  }

  section a {
    background-color: #ffffff;
    color: #111111;
    text-decoration: none;
    font-size: 16px;
    padding: 8px 24px 8px 24px;
    border-radius: 50px;
    display: inline-flex;
    align-items: center;
  }

  section a img {
    margin: 0 0 0 8px;
    width: 10px;
    height: 16px;
    object-fit: cover;
    object-position: center right;
    transition: width 0.25s;
  }

  section a:hover img {
    width: 25px;
  }

  section.alternative div.split:first-child {
    grid-column: 2;
  }

  section.alternative div.split:last-child {
    grid-column: 1;
  }

  @media (max-width: 1080px) {
    section {
      display: block;
    }

    section div.split {
      padding: 64px 0 64px 0;
    }
  }

  @media (max-width: 700px) {
    section div.slides,
    section div.slides img {
      width: 80vw;
      height: 120vw;
    }
  }
`;

// export default GlobalStyle;