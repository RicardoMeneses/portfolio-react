import { Outlet } from 'react-router-dom';
import Footer from './general/Footer';
import Header from './general/Header';
import ThemeSelector from './general/ThemeSelector';

const Layout = () => {
  return (
    <div className='md:min-h-screen relative'>
      <Header />
      <ThemeSelector />
      <main className='md:h-screen'>
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
