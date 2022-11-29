import Head from 'next/head';
import React from 'react';
import Header from '../components/Header/MediaHub';
import withTransition from '../components/HOC/withTransition';
import ImageComp from '../components/Pages/MediaHub/ImageComp';
import Talents from '../components/Pages/MediaHub/Talents';

const mediaHub = () => {
  return (
    <>
      <Head>
        <title>Apex Recruiters - Media Hub</title>
        <meta
          name='description'
          content='We help talented people find jobs they love, and help employers find the best talent to grow their businesses. '
        />
        <link rel='icon' href='/favicon.jpg' />
      </Head>
      <Header />
      <Talents />
      <ImageComp />
    </>
  );
};

export default withTransition(mediaHub);
