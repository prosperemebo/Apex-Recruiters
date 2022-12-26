import classes from '../Header.module.scss';
import Image from 'next/image';

import hero from '../../../assets/images/hero-comp.png';

const Header = () => {
  return (
    <header className={`${classes.header} ${classes.short}`}>
      <figure>
        <Image src={hero} alt='composition' />
      </figure>
    </header>
  );
};

export default Header;
