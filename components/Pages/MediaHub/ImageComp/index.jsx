import classes from './comp.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import compositionImg from '../../../../assets/images/comp-9.jpg';

const ImageComp = () => {
  return (
    <article className={classes.composition}>
      <div className={classes.contentBox}>
        <h1 className='heading-tertiary'>The best talent in tech on demand</h1>
        <p className='paragraph paragraph-bg'>
          Scale your team with the most qualified talents possibe
        </p>

        <div className={classes.cta}>
          <Link href='/' legacyBehavior>
            <a className='btn btn-primary'>Find Role</a>
          </Link>
          <Link href='/' legacyBehavior>
            <a className='btn btn-outline'>Find Talent</a>
          </Link>
        </div>
      </div>
      <figure>
        <Image src={compositionImg} alt='Man Smiling' />
      </figure>
    </article>
  );
};

export default ImageComp;
