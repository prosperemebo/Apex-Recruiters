import classes from '../Header.module.scss';

import Image from 'next/image';

import composition from '../../../assets/images/file.png';

const Header = () => {
  return (
    <header
      className={`${classes.header} ${classes.green} ${classes.center} ${classes.medium}`}
    >
      <div className={classes.contentBox}>
        <div className={classes.figComp}>
          <Image src={composition} alt='Mail Figure' />
        </div>
        <h1 className='heading-tertiary'>
          Get access to our global network of great Talents
        </h1>
        <p className='paragraph paragraph-bg'>
          Kindly fill the following input fields
        </p>
      </div>
    </header>
  );
};

export default Header;
