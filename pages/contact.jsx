import Head from 'next/head';
import React from 'react';
import Header from '../components/Header/Contact';
import withTransition from '../components/HOC/withTransition';
import ContactForm from '../components/Pages/Contact/Form';

const contact = () => {
  return (
    <>
      <Head>
        <title>Apex Recruiters - Contact</title>
      </Head>
      <Header />
      <ContactForm />
    </>
  );
};

export default withTransition(contact);
