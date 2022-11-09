import Image from 'next/image';
import classes from '../Header.module.scss';

import hero from '../../../assets/images/hero.jpg';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={classes.header}>
      <figure>
        <Image src={hero} alt='Mentor' />
      </figure>
      <div className={classes.contentBox}>
        <h1 className='heading-primary'>
          We connect great organizations with great talents
        </h1>
        <p className='paragraph paragraph-bg'>
          We help talented people find jobs they love, and help employers find
          the best talent to grow their businesses.
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
    </header>
  );
};

export default Header;
