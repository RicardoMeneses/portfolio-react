import { Link } from 'react-router-dom';
import { FaBriefcase, FaHome, FaIdCard, FaUser, FaWindowClose } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { SideBarProps } from '../../interfaces';

const SideBar: React.FC<SideBarProps> = ({ openMenu, handleOpen }) => {
  const normalClass = 'flex flex-col text-darkblue dark:text-white items-center py-3 text-2xl';
  const { t } = useTranslation();

  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    handleOpen();
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      className={`${
        openMenu ? 'translate-x-0' : ' -translate-x-full'
      } fixed w-3/4 bg-white/95 dark:bg-darkblue/95 h-screen top-0 left-0 duration-700 ease-in-out`}
    >
      <FaWindowClose
        className=' text-darkblue dark:text-white absolute top-4 right-3 text-3xl cursor-pointer'
        onClick={handleOpen}
      />
      <div className='mt-20 text-center text-3xl flex flex-col gap-3'>
        <Link
          to='#'
          id='homeLink'
          className={normalClass}
          onClick={() => handleClickScroll('home')}
        >
          <FaHome className='text-2xl' />
          {t('header.home')}
        </Link>
        <Link
          to='#'
          id='aboutmeLink'
          className={normalClass}
          onClick={() => handleClickScroll('aboutme')}
        >
          <FaUser className='text-2xl' />
          {t('header.about')}
        </Link>
        <Link
          to='#'
          id='projectsLink'
          className={normalClass}
          onClick={() => handleClickScroll('projects')}
        >
          <FaBriefcase className='text-2xl' />
          {t('header.projects')}
        </Link>
        <Link
          to='#'
          id='resumeLink'
          className={normalClass}
          onClick={() => handleClickScroll('resume')}
        >
          <FaIdCard className='text-2xl' />
          {t('header.resume')}
        </Link>
      </div>
    </aside>
  );
};

export default SideBar;
