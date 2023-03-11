import { FaBars } from 'react-icons/fa';
import { MenuItem } from '@szhsin/react-menu';
import MenuLanguage from './MenuLanguage';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import SideBar from './SideBar';
import { useState } from 'react';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const { t, i18n } = useTranslation();

  const changeLanguage = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage);
  };

  const handleOpen = () => {
    setOpenMenu(!openMenu);
  };

  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  window.addEventListener('scroll', changeBackground);

  let section = document.querySelectorAll('section');
  let menu = document.querySelectorAll('header a');
  let menuMovil = document.querySelectorAll('aside a');

  window.onscroll = () => {
    section.forEach((i) => {
      let top = window.scrollY;
      let offset = i.offsetTop - 150;
      let height = i.offsetHeight;
      let id = i.getAttribute('id');

      if (top >= offset && top < offset + height) {
        menu.forEach((link) => {
          link.classList.remove('activeLink');
          document.querySelector('header a[id*=' + id + ']')?.classList.add('activeLink');
        });

        menuMovil.forEach((link) => {
          link.classList.remove('activeLinkMovil');
          document.querySelector('aside a[id*=' + id + ']')?.classList.add('activeLinkMovil');
        });
      }
    });
  };

  return (
    <header
      className={`fixed transition-colors z-20 h-16 w-full ${
        navbar ? 'bg-darkblue/80 dark:bg-white/95 shadow-2xl' : ''
      }`}
    >
      <div className='flex transition-all duration-700 container mx-auto items-center justify-between p-4 px-10 lg:px-0'>
        <h1
          className='text-3xl text-deepskyblue font-bold'
          onClick={() => handleClickScroll('home')}
        >
          Ricardo
        </h1>
        <ul
          className={`hidden md:flex gap-10 font-bold ${
            navbar ? 'text-white dark:text-darkblue' : 'text-white'
          }`}
        >
          <li>
            <Link to='#' id='homeLink' onClick={() => handleClickScroll('home')}>
              {t('header.home')}
            </Link>
          </li>
          <li>
            <Link to='#' id='aboutmeLink' onClick={() => handleClickScroll('aboutme')}>
              {t('header.about')}
            </Link>
          </li>
          <li>
            <Link to='#' id='projectsLink' onClick={() => handleClickScroll('projects')}>
              {t('header.projects')}
            </Link>
          </li>
          <li>
            <Link to='#' id='resumeLink' onClick={() => handleClickScroll('resume')}>
              {t('header.resume')}
            </Link>
          </li>
          <li>
            <MenuLanguage language={i18n.language} navbar={navbar}>
              {i18n.language !== 'es' && (
                <MenuItem onClick={() => changeLanguage('es')}>Español</MenuItem>
              )}
              {i18n.language !== 'en' && (
                <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
              )}
            </MenuLanguage>
          </li>
        </ul>
        <div className='flex md:hidden text-white gap-5'>
          <div className='flex justify-center items-center cursor-pointer'>
            <MenuLanguage language={i18n.language} navbar={navbar}>
              {i18n.language !== 'es' && (
                <MenuItem onClick={() => changeLanguage('es')}>Español</MenuItem>
              )}
              {i18n.language !== 'en' && (
                <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
              )}
            </MenuLanguage>
          </div>
          <FaBars
            className={`text-2xl ${navbar ? 'text-white dark:text-darkblue' : 'text-white'}`}
            onClick={handleOpen}
          />
        </div>
        <SideBar openMenu={openMenu} handleOpen={handleOpen} />
      </div>
    </header>
  );
};

export default Header;
