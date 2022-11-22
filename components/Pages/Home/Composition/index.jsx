import Image from 'next/image';
import Link from 'next/link';
import classes from './composition.module.scss';

import ladyComposition from '../../../../assets/images/comp-1.png';
import manComposition from '../../../../assets/images/comp-2.png';

const CompositionComp = ({ image, accent, children }) => {
  return (
    <div className={`${classes.composition} ${accent && classes.accent}`}>
      <div className={classes.body}>
        <Image src={image} alt='Composition Depiction' />
        {children}
      </div>
    </div>
  );
};

const Composition = () => {
  return (
    <>
      <CompositionComp image={ladyComposition}>
        <div className={classes.content}>
          <h3 className='heading-tertiary'>
            We help candidates like you land deserving roles.
          </h3>
          <p className='paragraph'>
            Our goal is to find the right fit for you, whether that&apos;s a
            role in your field or a new industry altogether. We&apos;re here to
            make sure you get the most out of your career—and we&apos;ll do
            whatever it takes to help you achieve that.
          </p>
          <Link href='/' legacyBehavior>
            <a className='btn btn-primary yellow'>Find Role</a>
          </Link>
        </div>
      </CompositionComp>
      <CompositionComp image={manComposition} accent>
        <div className={classes.content}>
          <h3 className='heading-tertiary'>
            Do you want to drive growth by hiring the right talent?
          </h3>
          <p className='paragraph'>
            We help fast-growing companies in all industries scale their
            businesses by providing them with the best talent. In order for our
            clients to succeed, we provide them with top-notch talent, so they
            can focus on what matters most: growing their business.
          </p>
          <Link href='/' legacyBehavior>
            <a className='btn btn-primary yellow'>Find Talent</a>
          </Link>
        </div>
      </CompositionComp>
    </>
  );
};

export default Composition;
