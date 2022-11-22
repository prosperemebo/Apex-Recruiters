import Head from 'next/head';
import Header from '../components/Header/Home';
import withTransition from '../components/HOC/withTransition';
import Clients from '../components/Pages/Home/Clients';
import Composition from '../components/Pages/Home/Composition';
import Features from '../components/Pages/Home/Features';
import Testimonials from '../components/Pages/Home/Testimonial';

const index = function Home() {
  return (
    <>
      <Head>
        <title>
          Apex Recruiters - Connecting Organisations with Great Talents
        </title>
        <meta
          name='description'
          content='We help talented people find jobs they love, and help employers find the best talent to grow their businesses. '
        />
        <link rel='icon' href='/favicon.jpg' />
      </Head>
      <Header />
      <Features />
      <Composition />
      <Testimonials />
      <Clients />
    </>
  );
};

export default withTransition(index);
