import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main className='container'>
        <Sidebar />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
