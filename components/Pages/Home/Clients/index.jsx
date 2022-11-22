import Image from 'next/image';
import classes from './clients.module.scss';

import wemaLogo from '../../../../assets/images/wema-bank-logo.png';
import googleLogo from '../../../../assets/images/google-logo.png';
import panasonicLogo from '../../../../assets/images/panasonic-logo.png';
import firstBLogo from '../../../../assets/images/first-bank-logo.png';
import sterlingLogo from '../../../../assets/images/sterling-bank-logo.png';
import ancLogo from '../../../../assets/images/anc-logo.png';

const Clients = () => {
  return (
    <div className={classes.clients}>
      <h3 className='heading-tertiary'>Companies that trust us </h3>
      <div className={classes.body}>
        <figure>
          <Image src={wemaLogo} alt='Wema Bank' />
        </figure>
        <figure>
          <Image src={googleLogo} alt='Google' />
        </figure>
        <figure>
          <Image src={panasonicLogo} alt='Panasonic' />
        </figure>
        <figure>
          <Image src={firstBLogo} alt='First Bank' />
        </figure>
        <figure>
          <Image src={sterlingLogo} alt='Sterling Bank' />
        </figure>
        <figure>
          <Image src={ancLogo} alt='ANC' />
        </figure>
      </div>
    </div>
  );
};

export default Clients;
