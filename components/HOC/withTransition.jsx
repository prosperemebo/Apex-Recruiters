import { AnimatePresence, motion } from 'framer-motion';
import classes from './withTransition.module.scss';

const withTransition = (OriginalComponent) => {
  return function WithTransition() {
    return (
      <>
        <AnimatePresence initial={true} mode='wait'>
          <OriginalComponent />
        </AnimatePresence>
        <motion.div
          className={classes.slideIn}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        />
        <motion.div
          className={classes.slideOut}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        />
      </>
    );
  };
};

export default withTransition;

// clip-path: polygon(0% 10%, 100% 0%, 100% 100%, 0% 90%);
// clip-path: polygon(0% 0%, 100% 0%, 0% 100%, 100% 0%);
