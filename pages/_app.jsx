import Layout from '../components/Layout';
import { AnimatePresence } from 'framer-motion';
import '../sass/main.scss';
import { usePageTransitionFix } from '../hooks/use-page-transition-fix';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

function MyApp({ Component, pageProps, router }) {
  usePageTransitionFix();

  return (
    <Layout>
      <AnimatePresence initial={false} mode='wait'>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
