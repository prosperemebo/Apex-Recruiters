import Head from 'next/head';
import Header from '../components/Header/Home';
import withTransition from '../components/HOC/withTransition';

const index = function Home() {
  return (
    <div>
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
    </div>
  );
};

export default withTransition(index);
