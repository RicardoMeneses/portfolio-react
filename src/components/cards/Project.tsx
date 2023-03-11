import { Link } from 'react-router-dom';
import { RiArrowRightLine } from 'react-icons/ri';
import { ProyectProps } from '../../interfaces';
import { useTranslation } from 'react-i18next';

const Project: React.FC<ProyectProps> = ({ project, index }) => {
  const { title, img, description, tech, link } = project;
  const { t } = useTranslation();
  return (
    <div className=' bg-darkblue mt-10 dark:bg-white w-full flex flex-col md:flex-row gap-10 md:gap-5 lg:gap-10 shadow-[-2px_2px_3px_0px_rgba(210,214,230,0.97)] rounded-lg p-10 items-center justify-center'>
      <div
        className={`h-40 md:h-[200px] lg:h-[300px] w-full md:w-1/2 relative ${
          index % 2 === 0 ? 'order-1' : 'order-2'
        }`}
      >
        <img
          src={img}
          alt={title}
          className='h-full w-full object-cover rounded-md block relative z-10 outline outline-darkblue outline-1'
        />
        <div
          className={`z-0 h-40 md:h-[200px] lg:h-[300px] w-full outline outline-2 absolute top-3 ${
            index % 2 === 0 ? '-left-4' : '-right-4'
          }  outline-deepskyblue rounded-md`}
        ></div>
      </div>
      <div
        className={`w-full md:w-1/2 text-center md:text-left reveal ${
          index % 2 === 0 ? 'order-2' : 'order-1 md:text-right'
        } `}
      >
        <h1 className='text-2xl text-ghostwhite dark:text-darkblue'>{title}</h1>
        <p className='text-ghostwhite dark:text-darkblue'>{description}</p>
        <p className='text-xs mt-5 mb-5 text-ghostwhite dark:text-darkblue'>{tech}</p>
        <Link
          to={link}
          target='_blank'
          className={`flex gap-2 items-center ${
            index % 2 === 0 ? '' : 'float-right'
          } text-ghostwhite dark:text-darkblue justify-center px-3 py-2 w-full md:w-fit outline outline-deepskyblue hover:bg-deepskyblue hover:text-white`}
        >
          {t('projects.see')} <RiArrowRightLine />
        </Link>
      </div>
    </div>
  );
};

export default Project;
