import { useTranslation } from 'react-i18next';
import { IoIosSchool } from 'react-icons/io';
import { MdWork } from 'react-icons/md';
import { ExperienceProps } from '../../interfaces';

const Experience: React.FC<ExperienceProps> = ({ type, items }) => {
  const { t } = useTranslation();
  return (
    <div className='w-full p-5 lg:p-10 bg-darkblue dark:bg-white rounded-xl drop-shadow-2xl'>
      <h1 className='text-center mb-3 text-2xl font-bold text-ghostwhite dark:text-darkblue'>
        {type === 'work' ? t('resume.work') : t('resume.education')}
      </h1>
      {items?.map((item, index) => (
        <div
          className='border-l-4 border-l-deepskyblue pl-5 lg:px-8 relative text-ghostwhite dark:text-darkblue'
          key={index}
        >
          <div className='absolute w-7 h-7 bg-white flex items-center justify-center top-0 -left-4 rounded-full ring-2 ring-deepskyblue'>
            {type === 'work' ? (
              <MdWork className=' text-darkblue' />
            ) : (
              <IoIosSchool className=' text-darkblue' />
            )}
          </div>
          <p className='mb-5'>{item.years}</p>
          <p className='font-bold'>{item.title}</p>
          {item.name && <p className='text-xs mb-2'>{item.name}</p>}
          <p className='pb-5'>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
