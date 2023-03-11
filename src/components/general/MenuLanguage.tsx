import { Menu, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import { FaChevronDown } from 'react-icons/fa';
import { MenuLanguageProps } from '../../interfaces';

const MenuLanguage: React.FC<MenuLanguageProps> = ({ children, language, navbar }) => {
  return (
    <Menu
      menuButton={
        <MenuButton
          className={`flex items-center gap-1 ${
            navbar ? 'text-white dark:text-darkblue' : 'text-white'
          }`}
        >
          <span className={`${navbar ? 'text-white dark:text-darkblue' : 'text-white'}`}>
            {language}
          </span>
          <FaChevronDown className='text-xs' />
        </MenuButton>
      }
      transition
      direction='bottom'
      align='end'
      position='anchor'
      viewScroll='close'
      arrow={true}
    >
      {children}
    </Menu>
  );
};

export default MenuLanguage;
