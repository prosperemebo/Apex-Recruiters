import Image from 'next/image';
import Link from 'next/link';
import classes from './imgcomp.module.scss';

const ImgComp = ({ image, label, body, link, actionLabel, rtl }) => {
  return (
    <div className={`${classes.composition} ${rtl && classes.rtl}`}>
      <figure>
        <Image src={image} alt={label} />
      </figure>
      <div className={classes.content}>
        <h3 className='heading-tertiary'>{label}</h3>
        <p className='paragraph'>{body}</p>
        <Link href={link} legacyBehavior>
          <a className='btn btn-primary'>{actionLabel}</a>
        </Link>
      </div>
    </div>
  );
};

export default ImgComp;
