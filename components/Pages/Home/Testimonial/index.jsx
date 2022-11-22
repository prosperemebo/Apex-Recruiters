import classes from './testimonials.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import Image from 'next/image';
import { Autoplay, EffectCoverflow } from 'swiper';

import profile from '../../../../assets/images/profile.png';

const Slide = ({ image, body }) => {
  return (
    <div className={classes.slide}>
      <Image src={image} alt='Profile' />
      <p className='paragraph'>{body}</p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className={classes.testimonials}>
      <h3 className='heading-tertiary'>Words on the street</h3>
      <div className={classes.slider}>
        <Swiper
          effect='coverflow'
          grabCursor={true}
          slidesPerView={'2.5'}
          centeredSlides={true}
          spaceBetween={100}
          loop={true}
          loopFillGroupWithBlank={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            //   modifier: 1,
            slideShadows: false,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className='mySwiper'
        >
          <SwiperSlide>
            <Slide
              image={profile}
              body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque turpis placerat lacus potenti cras lobortis cras ultricies et. Volutpat imperdiet nisl egestas dictum. Augue euismod lorem auctor velit porttitor etiam tincidunt lorem morbi. Eget a facilisis eu quam nunc.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              image={profile}
              body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque turpis placerat lacus potenti cras lobortis cras ultricies et. Volutpat imperdiet nisl egestas dictum. Augue euismod lorem auctor velit porttitor etiam tincidunt lorem morbi. Eget a facilisis eu quam nunc.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              image={profile}
              body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque turpis placerat lacus potenti cras lobortis cras ultricies et. Volutpat imperdiet nisl egestas dictum. Augue euismod lorem auctor velit porttitor etiam tincidunt lorem morbi. Eget a facilisis eu quam nunc.'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
