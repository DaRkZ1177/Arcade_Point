import React from 'react';

const CalcForm = () => {
  return (
    <div
      className='w-full bg-white max-w-[942px] mx-auto rounded-2xl text-darkblue p-12 shadow-primary'
      data-aos='fade-up'
      data-aos-offset='0'
    >
      {/* form */}
      <form className='flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-12 lg:space-y-0'>
        <input
          className='input placeholder:text-darkblue'
          type='text'
          placeholder='Enter your amount'
        />
        <select className='select'>
          <option value=''>Riot Points</option>
          <option value=''>Green Gems</option>
          <option value=''>Primo Gems</option>
          <option value=''>Apex Coins</option>
          <option value=''>UC</option>
        </select>
        {/* btn */}
        <button className='btn text-white px-8 flex self-start'>
          Calculate
        </button>
      </form>
      {/* text */}
      <div className='mt-24'>
        <div className='text-blue font-medium mb-4'>
          ESTIMATED Conversion:
        </div>
        <div className='text-[32px] font-bold mb-3'>
          2000 Arcade Points <span className='text-blue'>($12)</span>
        </div>
        <div className='text-gray-500 tracking-[1%]'>
          Points would change based on Crypto price.
        </div>
      </div>
    </div>
  );
};

export default CalcForm;
