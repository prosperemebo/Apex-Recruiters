import Head from 'next/head';
import SubmitCVForm from '../components/Forms/SubmitCVForm';
import Header from '../components/Header/FindRole';
import withTransition from '../components/HOC/withTransition';

const contact = () => {
  return (
    <>
      <Head>
        <title>Apex Recruiters - Submit CV</title>
      </Head>
      <Header />
      <SubmitCVForm />
    </>
  );
};

export default withTransition(contact);
