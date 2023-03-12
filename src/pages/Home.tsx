import { useTranslation } from 'react-i18next';
import { BsAirplaneFill, BsFillFileMusicFill, BsGearFill } from 'react-icons/bs';
import { SiBitbucket, SiNestjs, SiNuxtdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';
import {
  FaAws,
  FaBootstrap,
  FaComment,
  FaCss3Alt,
  FaFutbol,
  FaGithubSquare,
  FaHtml5,
  FaNodeJs,
  FaPeopleArrows,
  FaShopify,
  FaWordpress,
  FaRegArrowAltCircleDown,
} from 'react-icons/fa';
import { IoLogoGameControllerB, IoLogoJavascript } from 'react-icons/io';
import {
  RiCodeLine,
  RiPingPongFill,
  RiBook2Fill,
  RiMovie2Fill,
  RiReactjsFill,
  RiVuejsLine,
  RiTeamFill,
} from 'react-icons/ri';
import { DiMongodb } from 'react-icons/di';
import { TbBrandNextjs } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import DownloadCv from '../components/buttons/DownloadCv';
import Experience from '../components/cards/Experience';
import Interests from '../components/cards/Interests';
import Presentation from '../components/cards/Presentation';
import Project from '../components/cards/Project';
import TechnicalSkill from '../components/cards/TechnicalSkill';
import SoftSkill from '../components/cards/SoftSkill';

const Home = () => {
  const { t } = useTranslation();
  const interests = [
    {
      icon: RiCodeLine,
      text: t('about.programming'),
    },
    {
      icon: RiPingPongFill,
      text: t('about.pingPong'),
    },
    {
      icon: BsAirplaneFill,
      text: t('about.travel'),
    },
    {
      icon: IoLogoGameControllerB,
      text: t('about.games'),
    },
    {
      icon: RiBook2Fill,
      text: t('about.read'),
    },
    {
      icon: BsFillFileMusicFill,
      text: t('about.music'),
    },
    {
      icon: FaFutbol,
      text: t('about.soccer'),
    },
    {
      icon: RiMovie2Fill,
      text: t('about.cinema'),
    },
  ];

  const education = [
    {
      years: '2013-2019',
      title: 'Escuela Superior de Cómputo (ESCOM-IPN)',
      description: t('resume.engineer'),
    },
    {
      years: '2018',
      title: 'DevF',
      description: t('resume.red'),
    },
    {
      years: '2018',
      title: 'DevF',
      description: t('resume.black'),
    },
  ];

  const labor = [
    {
      years: '2018-2019',
      title: t('resume.seo'),
      name: 'Sube Agencia Digital',
      description: t('resume.seoDescription'),
    },
    {
      years: '2019-2022',
      title: t('home.developer'),
      name: 'Raccoon Studio',
      description: t('resume.raccoon'),
    },
  ];

  const technicalSkills = [
    {
      icon: RiReactjsFill,
      text: 'ReactJS',
      outline: 'ring-[#5ED2F3]',
      bgHover: 'hover:bg-[#5ED2F3]/50',
      textColor: 'text-[#5ED2F3]',
    },
    {
      icon: TbBrandNextjs,
      text: 'NextJs',
      outline: 'ring-[#5ED2F3]',
      bgHover: 'hover:bg-[#5ED2F3]/50',
      textColor: 'text-[#5ED2F3]',
    },
    {
      icon: RiVuejsLine,
      text: 'VueJS',
      outline: 'ring-[#3EB27F]',
      bgHover: 'hover:bg-[#3EB27F]/50',
      textColor: 'text-[#3EB27F]',
    },
    {
      icon: SiNuxtdotjs,
      text: 'NuxtJs',
      outline: 'ring-[#2D465B] dark:ring-[#3EB27F]',
      bgHover: 'hover:bg-[#2D465B]/50 dark:hover:bg-[#3EB27F]/50',
      textColor: 'text-[#2D465B] dark:text-[#3EB27F]',
    },
    {
      icon: FaNodeJs,
      text: 'NodeJS',
      outline: 'ring-[#68A063]',
      bgHover: 'hover:bg-[#68A063]/50',
      textColor: 'text-[#68A063]',
    },
    {
      icon: FaAws,
      text: 'AWS',
      outline: 'ring-[#F69400]',
      bgHover: 'hover:bg-[#F69400]/50',
      textColor: 'text-[#F69400]',
    },
    {
      icon: FaShopify,
      text: 'Shopify',
      outline: 'ring-[#91B944]',
      bgHover: 'hover:bg-[#91B944]/50',
      textColor: 'text-[#91B944]',
    },
    {
      icon: FaWordpress,
      text: 'Wordpress',
      outline: 'ring-[#207095]',
      bgHover: 'hover:bg-[#207095]/50',
      textColor: 'text-[#207095]',
    },
    {
      icon: FaBootstrap,
      text: 'Bootstrap',
      outline: 'ring-[#6C0FED]',
      bgHover: 'hover:bg-[#6C0FED]/50',
      textColor: 'text-[#6C0FED]',
    },
    {
      icon: DiMongodb,
      text: 'MongoDB',
      outline: 'ring-[#3F9043]',
      bgHover: 'hover:bg-[#3F9043]/50',
      textColor: 'text-[#3F9043]',
    },
    {
      icon: FaGithubSquare,
      text: 'Github',
      outline: 'ring-[#000] dark:ring-[#fff]',
      bgHover: 'hover:bg-[#000]/50 hover:dark:bg-[#fff]/50',
      textColor: 'text-[#000] dark:text-[#fff]',
    },
    {
      icon: FaHtml5,
      text: 'Html5',
      outline: 'ring-[#F7491D]',
      bgHover: 'hover:bg-[#F7491D]/50',
      textColor: 'text-[#F7491D]',
    },
    {
      icon: FaCss3Alt,
      text: 'Css3',
      outline: 'ring-[#3495CF]',
      bgHover: 'hover:bg-[#3495CF]/50',
      textColor: 'text-[#3495CF]',
    },
    {
      icon: IoLogoJavascript,
      text: 'JS',
      outline: 'ring-[#EFD81A]',
      bgHover: 'hover:bg-[#EFD81A]/50',
      textColor: 'text-[#EFD81A]',
    },
    {
      icon: SiTailwindcss,
      text: 'Tailwind CSS',
      outline: 'ring-[#05AFCD]',
      bgHover: 'hover:bg-[#05AFCD]/50',
      textColor: 'text-[#05AFCD]',
    },
    {
      icon: SiTypescript,
      text: 'TypeScript',
      outline: 'ring-[#2F73BF]',
      bgHover: 'hover:bg-[#2F73BF]/50',
      textColor: 'text-[#2F73BF]',
    },
    {
      icon: SiNestjs,
      text: 'NestJs',
      outline: 'ring-[#D9214B]',
      bgHover: 'hover:bg-[#D9214B]/50',
      textColor: 'text-[#D9214B]',
    },
    {
      icon: SiBitbucket,
      text: 'Bitbucket',
      outline: 'ring-[#2680F6]',
      bgHover: 'hover:bg-[#2680F6]/50',
      textColor: 'text-[#2680F6]',
    },
  ];

  const projects = [
    {
      title: 'RaccoonDev Studio',
      link: 'https://raccoondev.studio/',
      img: '/img/RaccoonDev.webp',
      tech: 'NextJS / ReactJS / NodeJS / Bootstrap',
      description: t('projects.raccoon'),
    },
    {
      title: 'Oleum Vitae',
      link: 'https://oleumvitae.com.mx/',
      img: '/img/OleumVitae.webp',
      tech: 'NuxtJS / VueJS / Shopify / NodeJS / Bootstrap',
      description: t('projects.oleum'),
    },
    {
      title: 'Crepini',
      link: 'https://crepiniplantbased.com/',
      img: '/img/Crepini.webp',
      tech: 'NuxtJS / VueJS / Worpdress / NodeJS / Vuetify / Paypal',
      description: t('projects.crepini'),
    },
  ];

  const softSkills = [
    {
      icon: FaComment,
      text: t('resume.communication'),
    },
    {
      icon: FaPeopleArrows,
      text: t('resume.teamwork'),
    },
    {
      icon: BsGearFill,
      text: t('resume.adaptability'),
    },
    {
      icon: RiTeamFill,
      text: t('resume.leadership'),
    },
  ];

  const handleClickScroll = () => {
    const element = document.getElementById('aboutme');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id='home'>
        <div className='bg-[url("/img/bg.webp")] bg-center bg-no-repeat bg-cover'>
          <div className='h-screen relative'>
            <div className='absolute top-0 left-0 h-full w-full bg-black/50'></div>
            <FaRegArrowAltCircleDown
              className='absolute text-white bottom-10 animate-pulse text-4xl cursor-pointer z-20 left-0 right-0 mx-auto'
              onClick={handleClickScroll}
            />
            <div className='h-full relative flex items-center px-10 md:px-56'>
              <Presentation />
            </div>
          </div>
        </div>
      </section>
      <section id='aboutme' className='my-10'>
        <div className='container mx-auto px-10'>
          <h1 className='text-center text-4xl font-bold text-darkblue dark:text-ghostwhite'>
            {t('about.title')}
          </h1>
          <div className='flex flex-col md:flex-row mt-10 gap-10 items-center justify-center'>
            <div className='w-full md:w-1/2 reveal'>
              <p className='text-base md:text-xl text-center text-darkblue dark:text-ghostwhite mb-5'>
                {t('about.me')}
              </p>
              <DownloadCv />
            </div>
            <div className='w-full md:w-1/2'>
              <h1 className='text-xl font-bold text-center text-darkblue dark:text-ghostwhite'>
                {t('about.interests')}
              </h1>
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-5 reveal'>
                {interests.map((interest) => (
                  <Interests key={interest.text} icon={interest.icon} title={interest.text} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='projects' className='mt-10'>
        <div className='container mx-auto px-10 text-center'>
          <h1 className='text-center text-4xl font-bold text-darkblue dark:text-ghostwhite'>
            {t('projects.title')}
          </h1>
          {projects.map((project, index) => (
            <Project key={project.title} project={project} index={index} />
          ))}
          {/* <div className='mt-10 mb-10'>
            <Link
              to='/poyectos'
              className='px-3 py-2 outline outline-2 outline-deepskyblue hover:bg-deepskyblue hover:text-white hover:dark:text-white mt-10 text-darkblue dark:text-ghostwhite'
            >
              {t('projects.all')}
            </Link>
          </div> */}
        </div>
      </section>
      <section id='resume' className='mt-10'>
        <div className='container mx-auto px-10'>
          <h1 className='text-center text-4xl font-bold text-darkblue dark:text-ghostwhite'>
            {t('resume.experience')}
          </h1>
          <div className='flex flex-col md:flex-row gap-4 mt-10'>
            <Experience type='school' items={education} />
            <Experience type='work' items={labor} />
          </div>
          <h1 className='text-center mt-10 text-4xl font-bold text-darkblue dark:text-ghostwhite'>
            {t('resume.technicalSkills')}
          </h1>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-10 gap-5'>
            {technicalSkills.map((skill) => (
              <TechnicalSkill
                key={skill.text}
                outline={skill.outline}
                bgHover={skill.bgHover}
                textColor={skill.textColor}
                text={skill.text}
                icon={skill.icon}
              />
            ))}
          </div>
          <h1 className='text-center mt-10 text-4xl font-bold text-darkblue dark:text-ghostwhite'>
            {t('resume.softSkills')}
          </h1>
          <div className='grid grid-cols-2 md:grid-cols-4 mt-4 gap-5'>
            {softSkills.map((softSkill) => (
              <SoftSkill key={softSkill.text} icon={softSkill.icon} title={softSkill.text} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
