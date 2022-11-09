import Head from 'next/head';
import withTransition from '../components/HOC/withTransition';

const about = function Home() {
  return (
    <div>
      <Head>
        <title>Apex Recruiters - About Us</title>
        <meta
          name='description'
          content='We help talented people find jobs they love, and help employers find the best talent to grow their businesses. '
        />
        <link rel='icon' href='/favicon.jpg' />
      </Head>
    </div>
  );
};

export default withTransition(about);
