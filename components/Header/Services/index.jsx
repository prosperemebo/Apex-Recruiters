import classes from '../Header.module.scss';

import Link from 'next/link';

const Header = () => {
  return (
    <header className={`${classes.header} ${classes.dark}`}>
      <div className={classes.contentBox}>
        <h1 className='heading-primary'>
          Our services are designed to help you grow your business, and we know
          every business differ
        </h1>
        <p className='paragraph paragraph-bg'>
          That&apos;s why we offer a wide range of solutions, from the most
          basic to the most advanced.
        </p>
      </div>
    </header>
  );
};

export default Header;
