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
    <section className={classes.main}>
      <div className={classes.head}>
        <h1 className='heading-tertiary'>The best talent in tech on demand</h1>
        <p className='paragraph'>
          Scale your team with the most qualified talents possible
        </p>
      </div>
      <ul className={classes.talents}>
        <li className={classes.talent}>
          <figure>
            <Image src={talent1} alt='Talent 1' />
          </figure>
          <h3>Lorem ipsum</h3>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque egestas pellentesque praesent vestibulum.
          </p>
        </li>
        <li className={classes.talent}>
          <figure>
            <Image src={talent2} alt='Talent 2' />
          </figure>
          <h3>Lorem ipsum</h3>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque egestas pellentesque praesent vestibulum.
          </p>
        </li>
        <li className={classes.talent}>
          <figure>
            <Image src={talent3} alt='Talent 3' />
          </figure>
          <h3>Lorem ipsum</h3>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque egestas pellentesque praesent vestibulum.
          </p>
        </li>
        <li className={classes.talent}>
          <figure>
            <Image src={talent4} alt='Talent 4' />
          </figure>
          <h3>Lorem ipsum</h3>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque egestas pellentesque praesent vestibulum.
          </p>
        </li>
        <li className={classes.talent}>
          <figure>
            <Image src={talent5} alt='Talent 5' />
          </figure>
          <h3>Lorem ipsum</h3>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque egestas pellentesque praesent vestibulum.
          </p>
        </li>
        <li className={classes.talent}>
          <figure>
            <Image src={talent6} alt='Talent 6' />
          </figure>
          <h3>Lorem ipsum</h3>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque egestas pellentesque praesent vestibulum.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Talents;
