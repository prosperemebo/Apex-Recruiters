import Link from 'next/link';
import classes from './Nav.module.scss';

import logo from '../../assets/images/logo.png';
import Image from 'next/image';

const Nav = () => {
  return (
    <nav className={classes.navigation}>
      <div className={classes.logo}>
        <Link href='/'>
          <Image src={logo} alt='Apex Recruiters' />
        </Link>
      </div>
      <ul className={classes.navList}>
        <li className={`${classes.navItem} ${classes.navLink}`}>
          <Link href='/'>Home</Link>
        </li>
        <li className={`${classes.navItem} ${classes.navLink}`}>
          <Link href='/about'>About Us</Link>
        </li>
        <li className={`${classes.navItem} ${classes.navLink}`}>
          <Link href='/'>Our Services</Link>
        </li>
        <li className={`${classes.navItem} ${classes.navLink}`}>
          <Link href='/'>Media Hub</Link>
        </li>
        <li className={`${classes.navItem} ${classes.navLink}`}>
          <Link href='/'>Contact</Link>
        </li>
        <li className={`${classes.navItem}`}>
          <Link href='/' legacyBehavior>
            <a className='btn btn-primary'>Find Role</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
