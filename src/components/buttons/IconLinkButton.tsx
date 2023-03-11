import { LinkButtonProps } from '../../interfaces';
import { Link } from 'react-router-dom';
import React from 'react';

const IconLinkButton: React.FC<LinkButtonProps> = ({ link, icon }) => {
  return (
    <Link
      to={link}
      target='_blank'
      className='w-10 h-10 outline outline-deepskyblue rounded-full transition-colors hover:outline-ghostwhite hover:text-white hover:bg-deepskyblue flex items-center justify-center'
    >
      {React.createElement(icon, { className: 'text-2xl' })}
    </Link>
  );
};

export default IconLinkButton;
