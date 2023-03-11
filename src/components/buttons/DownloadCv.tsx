import { useTranslation } from 'react-i18next';
import { HiDownload } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';

const DownloadCv = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const spanishResume =
    'https://drive.google.com/file/d/1bRU5FqLhiBJ6ftKpX14cFPttXLtd0nuq/view?usp=share_link';
  const englishResume =
    'https://drive.google.com/file/d/1XgMZAm1TPJCxvHMhOORjtB9-WFdpBcmJ/view?usp=share_link';

  return (
    <Link
      to={i18n.language === 'en' ? englishResume : spanishResume}
      className='flex mx-auto text-darkblue dark:text-ghostwhite outline-deepskyblue outline transition-colors hover:outline-ghostwhite hover:text-white hover:bg-deepskyblue rounded-full mt-3 items-center justify-center gap-2 py-2 px-3 w-fit'
      target='_blank'
    >
      {t('home.download')} <HiDownload />
    </Link>
  );
};

export default DownloadCv;
