import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Footer from '../components/Footer';

export default function Layout(props) {
  return (
    <Box>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <script
          src="https://unpkg.com/@mui/material@latest/umd/material-ui.development.js"
          crossorigin="anonymous"
        ></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <Box sx={{ minHeight: '100vh' }}>
          <Header />
          {props.children}
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
