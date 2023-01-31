import Head from 'next/head';
import React from 'react';
import Header from '../components/Header/Services';
import withTransition from '../components/HOC/withTransition';
import ImgComp from '../components/ImgComp';

import comp1 from '../assets/images/comp-3.jpg';
import comp2 from '../assets/images/comp-4.jpg';
import comp3 from '../assets/images/comp-5.jpg';
import comp4 from '../assets/images/comp-6.jpg';

const services = () => {
  return (
    <>
      <Head>
        <title>Apex Recruiters - Our Services</title>
      </Head>
      <Header />
      <ImgComp
        image={comp1}
        label='Recruitment (Executive Search)'
        body='We work together with your people team to find best candidates, build  successful teams, and generate value for shareholders through excellence. We  find exceptional leaders who are in tune with your markets and the culture of  your organization.'
        link='/'
        actionLabel='Work with talent'
        rtl
      />
      <ImgComp
        image={comp2}
        label='Staff Outsourcing'
        body='We act as a “Third Party Service Provider” that recruits, trains, and places employment ready personnel in line with client specifications to meet their workforce needs.'
        link='/'
        actionLabel='Grow your team'
      />
      <ImgComp
        image={comp3}
        label='Learning and Development'
        body='Through our customized learning and development approach, we equip individuals and teams with the skills and knowledge to undertake current and future tasks in the industry.'
        link='/'
        actionLabel='Contact us today'
        rtl
      />
      <ImgComp
        image={comp4}
        label='Business Process Automation'
        body='Our Business Process Management approach is designed to enable you to build capacity and capability for your organization, grounded in research and evidence-based methodology and business insight.'
        link='/'
        actionLabel='Grow your business'
      />
    </>
  );
};

export default withTransition(services);
