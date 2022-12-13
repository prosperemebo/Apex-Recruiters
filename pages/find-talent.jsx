import Head from 'next/head';
import FindTalentForm from '../components/Forms/FindTalentForm';
import Header from '../components/Header/FindTalent';
import withTransition from '../components/HOC/withTransition';

const findTalent = () => {
  return (
    <>
      <Head>
        <title>Apex Recruiters - Find Talent</title>
      </Head>
      <Header />
      <FindTalentForm />
    </>
  );
};

export default withTransition(findTalent);
