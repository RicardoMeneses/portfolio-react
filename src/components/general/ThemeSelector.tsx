import { useContext } from 'react';
import { BsMoonStarsFill, BsMoonStars, BsSun, BsSunFill } from 'react-icons/bs';
import { ThemeContext, ThemeContextType } from '../../providers/ThemeProvider';

const ThemeSelector = () => {
  const { theme, handleThemeSwitch } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className='fixed flex flex-col shadow-2xl top-1/4 md:top-2/4 right-2 md:right-10 bg-darkblue dark:bg-white p-3 rounded-md z-20 gap-5'>
      {theme === 'dark' ? (
        <BsMoonStarsFill
          className='cursor-pointer text-darkblue'
          onClick={() => handleThemeSwitch('dark')}
        />
      ) : (
        <BsMoonStars
          className='cursor-pointer text-ghostwhite'
          onClick={() => handleThemeSwitch('dark')}
        />
      )}
      {theme === 'light' ? (
        <BsSunFill
          className='cursor-pointer text-ghostwhite'
          onClick={() => handleThemeSwitch('light')}
        />
      ) : (
        <BsSun
          className='cursor-pointer text-darkblue'
          onClick={() => handleThemeSwitch('light')}
        />
      )}
    </div>
  );
};

export default ThemeSelector;
