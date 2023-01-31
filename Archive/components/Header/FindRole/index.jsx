import classes from '../Header.module.scss';
import { useRouter } from 'next/router';

import Image from 'next/image';

import composition from '../../../assets/images/file.png';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const Header = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.query.message) toast(router.query.message);
  }, [router]);

  return (
    <header
      className={`${classes.header} ${classes.green} ${classes.center} ${classes.medium}`}
    >
      <div className={classes.contentBox}>
        <div className={classes.figComp}>
          <Image src={composition} alt='Mail Figure' />
        </div>
        <h1 className='heading-tertiary'>
          Get access to our global network of top clients
        </h1>
        <p className='paragraph paragraph-bg'>
          Kindly fill the following input fields
        </p>
      </div>
    </header>
  );
};

export default Header;
