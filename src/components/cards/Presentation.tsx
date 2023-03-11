import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import IconLinkButton from '../buttons/IconLinkButton';
import DownloadCv from '../buttons/DownloadCv';

const Presentation = () => {
  const { t } = useTranslation();

  return (
    <div className=' bg-white dark:bg-darkblue dark:text-ghostwhite h-[410px] md:h-[380px] w-96 p-10 rounded-2xl text-darkblue text-center relative shadow-[-2px_2px_3px_0px_rgba(210,214,230,0.97)]'>
      <div className=' w-52 h-52 absolute border-deepskyblue border-4 rounded-full overflow-hidden -top-24 left-0 right-0 mx-auto'>
        <img
          src='/img/me.png'
          alt='Ricardo Meneses Morales'
          className='w-full h-full object-cover'
        />
      </div>
      <p className='mt-20'>{t('home.hello')} 👋🏻</p>
      <h1 className='text-2xl'>{t('home.iam')} Ricardo Meneses</h1>
      <h1 className='text-sm mt-1'>{t('home.developer')}</h1>
      <TypeAnimation
        sequence={['Front-end', 1500, 'Back-end', 1500]}
        style={{
          fontSize: '18px',
        }}
        wrapper='p'
        repeat={Infinity}
      />
      <DownloadCv />
      <div className='flex gap-10 justify-center mt-4'>
        <IconLinkButton
          link='https://www.linkedin.com/in/ricardo-meneses-morales/'
          icon={FaLinkedin}
        />
        <IconLinkButton link='https://github.com/RicardoMeneses' icon={FaGithub} />
      </div>
    </div>
  );
};

export default Presentation;
