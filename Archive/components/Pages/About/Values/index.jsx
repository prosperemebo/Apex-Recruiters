import classes from './values.module.scss';

const Values = () => {
  return (
    <div className={classes.values}>
      <div className={classes.head}>
        <h3 className='heading-tertiary'>Our Core Values</h3>
        <p className='paragraph'>
          To accomplish this, we rely on four core principles that guide our
          business strategy, behavior and relationships:
        </p>
      </div>

      <div className={classes.body}>
        <div className={classes.value}>
          <h3 className='heading-tertiary'>Integrity</h3>
          <p className='paragraph'>
            We operate with transparency and trust. We adopt the highest ethical
            standard of our industry
          </p>
        </div>
        <div className={classes.value}>
          <h3 className='heading-tertiary'>Respect</h3>
          <p className='paragraph'>
            We accord each other, our clients and candidates with mutual respect
            and sensitivity
          </p>
        </div>
        <div className={classes.value}>
          <h3 className='heading-tertiary'>Passion</h3>
          <p className='paragraph'>
            We are passionate about what we do. Our job is to bring satisfaction
            to our clients and that&apos;s why we give our all.
          </p>
        </div>
        <div className={classes.value}>
          <h3 className='heading-tertiary'>Collaboration</h3>
          <p className='paragraph'>
            We relate with everyone involved in a recruitment cycle as a team.
            We leverage on each other’s knowledge and experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
