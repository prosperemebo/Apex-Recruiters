import classes from './Info.module.scss';

import MailIC from '../../../../assets/icons/mail.svg';
import CallIC from '../../../../assets/icons/call.svg';
import LocationIC from '../../../../assets/icons/location.svg';

const Info = () => {
  return (
    <div className={classes.main}>
      <div className={classes.info}>
        <LocationIC />
        <p>1 Iya Omolere Close, Off Celestial Way Ogudu, Lagos, Nigeria.</p>
      </div>
      <div className={classes.info}>
        <MailIC />
        <p>contact@apexrecruiterltd.com</p>
      </div>
      <div className={classes.info}>
        <CallIC />
        <p>+234 806 420 0955</p>
      </div>
    </div>
  );
};

export default Info;
