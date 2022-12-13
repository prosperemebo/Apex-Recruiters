import classes from '../Header.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import composition from '../../../assets/images/mail.png';

const Header = () => {
  return (
    <header
      className={`${classes.header} ${classes.green} ${classes.center} ${classes.medium}`}
    >
      <div className={classes.contentBox}>
        <div className={classes.figComp}>
          <Image src={composition} alt='Mail Figure' />
        </div>
        <h1 className='heading-tertiary'>We’re so glad you’re here!</h1>
        <p className='paragraph paragraph-bg'>
          We&apos;d love to hear from you and learn more about what we can do
          for your business. Please fill out the form below, and we&apos;ll be
          in touch soon.
        </p>
      </div>
    </header>
  );
};

export default Header;
