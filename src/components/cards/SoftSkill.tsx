import React from 'react';
import { InterestsProps } from '../../interfaces';

const Interests: React.FC<InterestsProps> = ({ icon, title }) => {
  return (
    <div className='flex hover:scale-110 flex-col gap-3 justify-center items-center'>
      <div className=' w-32 h-32 outline rounded-full outline-deepskyblue flex items-center justify-center'>
        {React.createElement(icon, { className: ' text-darkblue dark:text-ghostwhite text-5xl' })}
      </div>
      <p className='text-center text-darkblue dark:text-ghostwhite text-base md:text-xs lg:text-base'>
        {title}
      </p>
    </div>
  );
};

export default Interests;
