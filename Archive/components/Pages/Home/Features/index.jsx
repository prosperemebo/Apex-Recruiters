import Image from 'next/image';
import classes from './features.module.scss';

import barChart from '../../../../assets/images/bar-chart.gif';
import confetti from '../../../../assets/images/confetti.gif';
import arrow from '../../../../assets/images/arrow-rounded.gif';
import consultation from '../../../../assets/images/consultation.gif';

const Feature = ({ image, label, body }) => {
  return (
    <div className={classes.feature}>
      <Image src={image} alt={label} />
      <h3 className='heading-tertiary'>{label}</h3>
      <p className='paragraph'>{body}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className={classes.features}>
      <div className={classes.head}>
        <h3 className='heading-tertiary'>
          Where the best companies hire the best people
        </h3>
        <p className='paragraph'>
          Through our services, we have helped clients build software teams,
          manage projects, and design websites. Talented digital professionals,
          domain experts, and flexible thinkers are at the core of our team -
          and we know that&apos;s what you need. We&apos;ve worked with
          organizations around the world to improve ROI by bringing together the
          most qualified team possible.
        </p>
      </div>
      <div className={classes.body}>
        <Feature
          image={consultation}
          label='Developers'
          body='We provide a diverse array of highly skilled individuals, including
            Front-end Developers, Big Data Developers, CRM Developers, Back-end
            Developers, Game Developers and more.'
        />
        <Feature
          image={arrow}
          label='Designers'
          body='We fill design positions including UI Designers, UX Researchers, Animators, Illustrators, Graphic Designers, Interactive Designers, Graphic designers and more.'
        />
        <Feature
          image={confetti}
          label='Project Managers'
          body='We provide a diverse array of highly skilled individuals Scrum Masters, Project Managers, Kaban Masters, Agile Managers, Product Managers, and more '
        />
        <Feature
          image={barChart}
          label='Writers'
          body='Up your brand storytelling and authority with a pool of Copywriters, Content Writers, Grant Writers, Thought Leadership Writers, Case Study Writers, and more.'
        />
      </div>
    </section>
  );
};

export default Features;
