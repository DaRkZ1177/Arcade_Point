import React from 'react';

// import images
import Image from '../assets/img/hero-img.png';

// import icons
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const Hero = () => {
  return (
    <section>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center lg:flex-row'>
          {/* hero text */}
          <div className='flex-1'>
            {/* badge text */}
            <div
              className='bg-white/10 p-1 mb-6 rounded-full pl-1 pr-3 max-w-[365px]'
              data-aos='fade-down'
              data-aos-delay='400'
            >
              <div className='flex items-center justify-between text-sm lg:text-base'>
                <div className='bg-white text-darkblue rounded-full font-medium py-1 px-4'>
                  25% BONUS
                </div>
                <div>For the GamerEX Weekend</div>
              </div>
            </div>
            {/* title */}
            <h1
              className='text-[32px] lg:text-[64px] font-bold leading-tight mb-6'
              data-aos='fade-down'
              data-aos-delay='500'
            >
              Most efficient and secure platform for converting any virtual currency.
            </h1>
            <p
              className='max-w-[440px] leading-relaxed mb-8'
              data-aos='fade-down'
              data-aos-delay='600'
            >
              Convert any digital currency, trusted by 10 million wallets with $30 billion conversions.
            </p>
            <button
              className='btn gap-x-6 pl-6 text-sm lg:h-16 lg:text-base'
              data-aos='fade-down'
              data-aos-delay='700'
            >
              Try Now
              <IoIosArrowDroprightCircle className='text-2xl lg:text-3xl' />
            </button>
          </div>

          {/* hero image */}
          <div className='flex-1'>
            <img src={Image} alt='' data-aos='fade-up' data-aos-delay='600' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
