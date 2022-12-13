import classes from '../Header.module.scss';

import Link from 'next/link';

const Header = () => {
  return (
    <header className={`${classes.header} ${classes.green}`}>
      <div className={classes.contentBox}>
        <h1 className='heading-primary'>We are Apex Recruiter</h1>
        <p className='paragraph paragraph-bg'>
          Apex Recruiter is a recruitment firm that specializes in matching the
          right talent to the right job opportunities across Nigeria and the
          world.
        </p>
        <p className='paragraph paragraph-bg'>
          We are a preferred Recruitment Partner as we have the knack of finding
          the talent piece that fits your missing puzzle in your organization.
          We work on exclusive assignments as we are a Preferred Recruitment
          Business Partner for our clients.
        </p>

        <div className={classes.cta}>
          <Link href='/find-role' legacyBehavior>
            <a className='btn btn-primary white'>Find Role</a>
          </Link>
          <Link href='/' legacyBehavior>
            <a className='btn btn-outline white'>Find Talent</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
