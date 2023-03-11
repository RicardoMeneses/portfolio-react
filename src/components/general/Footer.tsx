import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className=' relative bg-[#131C30] dark:bg-white h-auto flex flex-col gap-5 md:flex-row text-white px-10 md:px-20 items-center justify-between py-8 mt-10'>
        <p className='text-center text-white dark:text-darkblue md:text-left mb-3 md:mb-0 order-last md:order-1'>
          {t('footer.made')} <span>Ricardo Meneses ©️ 2023</span>
        </p>
        <div className='flex items-center gap-3 md:gap-10 md:order-2'>
          <Link to='https://github.com/RicardoMeneses' target='_blank'>
            <FaGithub className='text-3xl text-white dark:text-darkblue' />
          </Link>
          <Link to='https://www.linkedin.com/in/ricardo-meneses-morales/' target='_blank'>
            <FaLinkedin className='text-3xl text-white dark:text-darkblue' />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
