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
            {/* <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/'>Home</Link>
            </li> */}
          </ul>
          <ul className={classes.menu}>
            <li>
              <Link href='/contact'>Contact Us</Link>
            </li>
            {/* <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/'>Home</Link>
            </li> */}
          </ul>
          <ul className={classes.menu}>
            <li>
              <Link href='/services'>Our Services</Link>
            </li>
            {/* <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/'>Home</Link>
            </li> */}
          </ul>
          <ul className={classes.menu}>
            <li>
              <Link href='/media-hub'>Media Hub</Link>
            </li>
            {/* <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/'>Home</Link>
            </li> */}
          </ul>
          <ul className={`${classes.menu} ${classes.socials}`}>
            <li>
              <span>Get in Touch</span>
            </li>
            <ul className={classes.socials}>
              <li>
                <a
                  href='https://web.facebook.com/apexrecruiterng'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FacebookIC />
                </a>
              </li>
              <li>
                <a
                  href='https://twitter.com/apexrecruiterng'
                  target='_blank'
                  rel='noreferrer'
                >
                  <TwitterIC />
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/apexrecruiterng/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <InstagramIC />
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/company/apex-recruiter-ltd'
                  target='_blank'
                  rel='noreferrer'
                >
                  <LinkedinIC />
                </a>
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
