import Image from 'next/image';
import classes from './footer.module.scss';

import logo from '../../assets/images/logo.png';
import Link from 'next/link';

import FacebookIC from '../../assets/icons/facebook.svg';
import TwitterIC from '../../assets/icons/twitter.svg';
import InstagramIC from '../../assets/icons/instagram.svg';
import LinkedinIC from '../../assets/icons/linkedin.svg';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.main}>
        <div className={classes.logo}>
          <Image src={logo} alt='Apex Recruiters' />
        </div>
        <div className={classes.menus}>
          <ul className={classes.menu}>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/'>Home</Link>
            </li>
          </ul>
          <ul className={classes.menu}>
            <li>
              <Link href='/'>Contact Us</Link>
            </li>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/'>Home</Link>
            </li>
          </ul>
          <ul className={classes.menu}>
            <li>
              <Link href='/'>Our Services</Link>
            </li>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/'>Home</Link>
            </li>
          </ul>
          <ul className={classes.menu}>
            <li>
              <Link href='/'>Media Hub</Link>
            </li>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/'>Home</Link>
            </li>
          </ul>
          <ul className={`${classes.menu} ${classes.socials}`}>
            <li>
              <Link href='/'>Get in Touch</Link>
            </li>
            <ul className={classes.socials}>
              <li>
                <Link href='/'>
                  <FacebookIC />
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <TwitterIC />
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <InstagramIC />
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <LinkedinIC />
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <div className={classes.foot}>
        <p className='paragraph'>
          Apex Recruiters. &copy; Copyright 2023. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
