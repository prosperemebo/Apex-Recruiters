import Head from 'next/head';
import React from 'react';
import ContactForm from '../components/Forms/ContactForm';
import Header from '../components/Header/Contact';
import withTransition from '../components/HOC/withTransition';
import Info from '../components/Pages/Contact/Info';

const contact = () => {
  return (
    <>
      <Head>
        <title>Apex Recruiters - Contact</title>
      </Head>
      <Header />
      <Info />
      <ContactForm />
    </>
  );
};

export default withTransition(contact);
