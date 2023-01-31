import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import classes from './Nav.module.scss';

import logo from '../../assets/images/logo.png';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Nav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);

  const router = useRouter();

  const scrollHandler = useCallback(() => {
    if (window.scrollY > 0) {
      setIsNavExpanded(classes.navScrolled);
    } else {
      setIsNavExpanded('');
    }
  }, []);

  const openNavHandler = useCallback((event) => {
    if (
      event.target.closest(`.${classes.navBtn}`) ||
      event.target.closest(`.${classes.backdrop}`) ||
      event.target.matches(`.${classes.navList}`)
    ) {
      setIsNavOpen((value) => !value);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, [scrollHandler]);

  useEffect(() => {
    setIsNavOpen(false);
  }, [router.pathname]);

  return (
    <nav
      className={`${classes.navigation} ${isNavExpanded} ${
        isNavOpen ? classes.navOpen : ''
      }`}
    >
      <div className={classes.logo}>
        <Link href='/'>
          <Image src={logo} alt='Apex Recruiters' />
        </Link>
      </div>

      <button className={`${classes.navBtn}`} onClick={openNavHandler}>
        <span></span>
      </button>

      <div className={classes.backdrop} onClick={openNavHandler}></div>

      <ul className={classes.navList}>
        <li className={`${classes.navItem} ${classes.navLink}`}>
          <Link href='/'>Home</Link>
        </li>
        <li className={`${classes.navItem} ${classes.navLink}`}>
          <Link href='/about'>About Us</Link>
        </li>
        <li className={`${classes.navItem} ${classes.navLink}`}>
          <Link href='/services'>Our Services</Link>
        </li>
        <li className={`${classes.navItem} ${classes.navLink}`}>
          <Link href='/media-hub'>Media Hub</Link>
        </li>
        <li className={`${classes.navItem} ${classes.navLink}`}>
          <Link href='/contact'>Contact</Link>
        </li>
        <ul className={classes.cta}>
          <li>
            <Link href='/find-role' legacyBehavior>
              <a className='btn btn-sm btn-primary'>Find Role</a>
            </Link>
          </li>
          <li>
            <Link href='/find-talent' legacyBehavior>
              <a className='btn btn-sm btn-primary'>Find Talent</a>
            </Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default Nav;
