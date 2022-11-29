import Image from 'next/image';
import classes from './talent.module.scss';

import talent1 from '../../../../assets/talents/talent-1.jpg';
import talent2 from '../../../../assets/talents/talent-2.jpg';
import talent3 from '../../../../assets/talents/talent-3.jpg';
import talent4 from '../../../../assets/talents/talent-4.jpg';
import talent5 from '../../../../assets/talents/talent-5.jpg';
import talent6 from '../../../../assets/talents/talent-6.jpg';

const Talents = () => {
  return (
    <section className={classes.talents}>
      <h1 className='heading-tertiary'>The best talent in tech on demand</h1>
      <p className='paragraph'>
        Scale your team with the most qualified talents possible
      </p>
      <ul className={classes.talents}>
        <li className={classes.talent}>
          <figure>
            <Image src={talent1} alt='Talent 1' />
          </figure>
        </li>
      </ul>
    </section>
  );
};

export default Talents;
