import React from 'react';
import { InterestsProps } from '../../interfaces';

const Interests: React.FC<InterestsProps> = ({ icon, title }) => {
  return (
    <div className='flex hover:scale-110 flex-col gap-3 justify-center items-center'>
      <div className=' w-16 h-16 ring-2 rounded-full ring-deepskyblue flex items-center justify-center'>
        {React.createElement(icon, { className: ' text-darkblue dark:text-ghostwhite text-3xl' })}
      </div>
      <p className='text-center text-darkblue dark:text-ghostwhite text-base md:text-xs lg:text-base'>
        {title}
      </p>
    </div>
  );
};

export default Interests;
