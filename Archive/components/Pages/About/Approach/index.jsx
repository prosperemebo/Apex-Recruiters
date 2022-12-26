import classes from './approach.module.scss';

import comp from '../../../../assets/images/bag.png';
import Image from 'next/image';

const Approach = () => {
  return (
    <div className={classes.approach}>
      <div className={classes.content}>
        <h3 className='heading-tertiary'>Approach</h3>
        <p className='paragraph'>
          Apex Recruiter can take up the responsibility of your company&apos;s
          internal recruitment function for a portion, or all your recruitment
          requirements.
        </p>
        <p className='paragraph'>
          Our approach manages the entire recruiting/hiring process from job
          profiling through to the on-boarding of new employees. Our highly
          effective Recruitment Process will improve the company&apos;s
          probability of successfully hiring the right candidate, speed to
          market, time to hire, reduce cost, and improve compliance with your
          specifications.
        </p>
        <p className='paragraph'>
          If you are a startup or looking to expand your team, Apex Recruiter is
          the best recruitment firm to work with.
        </p>
      </div>
      <figure>
        <Image src={comp} alt='bag' />
      </figure>
    </div>
  );
};

export default Approach;
