import Image from 'next/image';
import classes from './clients.module.scss';

import crowdForce from '../../../../assets/logos/crowdforce.png';
import geria from '../../../../assets/logos/geria.png';
import interswitch from '../../../../assets/logos/interswitch.png';
import intouch from '../../../../assets/logos/intouch.png';
import lendigo from '../../../../assets/logos/lendigo.png';
import mecho from '../../../../assets/logos/mecho.png';
import patricia from '../../../../assets/logos/patricia.png';
import poise from '../../../../assets/logos/poise.jpg';
import quickcheck from '../../../../assets/logos/quickcheck.png';
import renmoney from '../../../../assets/logos/renmoney.png';
import tfc from '../../../../assets/logos/tfc.png';
import vendease from '../../../../assets/logos/vendease.png';
import yoodule from '../../../../assets/logos/yoodule.png';

const Clients = () => {
  return (
    <div className={classes.clients}>
      <h3 className='heading-tertiary'>Companies that trust us </h3>
      <div className={classes.body}>
        <figure>
          <Image src={crowdForce} alt='Crowd Force' />
        </figure>
        <figure>
          <Image src={geria} alt='Geria' />
        </figure>
        <figure>
          <Image src={interswitch} alt='InterSwitch' />
        </figure>
        <figure>
          <Image src={intouch} alt='In Touch' />
        </figure>
        <figure>
          <Image src={lendigo} alt='Lendigo' />
        </figure>
        <figure>
          <Image src={mecho} alt='Mecho' />
        </figure>
        <figure>
          <Image src={patricia} alt='Patricia' />
        </figure>
        <figure>
          <Image src={poise} alt='Poise' />
        </figure>
        <figure>
          <Image src={quickcheck} alt='Quick Check' />
        </figure>
        <figure>
          <Image src={renmoney} alt='Renmoney' />
        </figure>
        <figure>
          <Image src={tfc} alt='TFC' />
        </figure>
        <figure>
          <Image src={vendease} alt='Vendease' />
        </figure>
        <figure>
          <Image src={yoodule} alt='Yoodule' />
        </figure>
      </div>
    </div>
  );
};

export default Clients;
