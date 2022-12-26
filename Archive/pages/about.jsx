import Head from 'next/head';
import Header from '../components/Header/About';
import withTransition from '../components/HOC/withTransition';
import ImgComp from '../components/ImgComp';

import comp1 from '../assets/images/comp-7.png';
import comp2 from '../assets/images/comp-8.png';
import Values from '../components/Pages/About/Values';
import Approach from '../components/Pages/About/Approach';

const about = function Home() {
  return (
    <>
      <Head>
        <title>Apex Recruiters - About Us</title>
        <meta
          name='description'
          content='We help talented people find jobs they love, and help employers find the best talent to grow their businesses. '
        />
        <link rel='icon' href='/favicon.jpg' />
      </Head>
      <Header />
      <ImgComp
        image={comp1}
        label='Vision'
        body='To be the go-to recruitment firm for organizations looking to bridge the gap  between them and Talents.'
        link='/'
        actionLabel='learn More'
      />
      <ImgComp
        image={comp2}
        label='Mission and Values'
        body='To connect great organizations with great talents, we strive to deliver on what  we promise, first time and every time.'
        link='/'
        actionLabel='learn More'
        rtl
      />
      <Values />
      <Approach />
    </>
  );
};

export default withTransition(about);
