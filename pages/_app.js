import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';



const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #0A4B78;
    --second: #0664A6;
    --dark: #3C3C3C;
    --light: #7C7C7C;

    // media query device size.
    --x-small: 576px;
    --small: 576px;
    --medium: 768px;
    --large: 992px;
    --x-large: 1200px;
    --xx-large: 1400px;
  }
  * {
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

`;

const theme = {
  size: {
    small: '576px',
    medium: '768px'
  }
}


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin
         />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200;300;400;500;600;700&family=Raleway:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle/>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </ThemeProvider>
  )
}

export default MyApp
