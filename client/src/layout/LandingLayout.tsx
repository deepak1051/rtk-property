import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Modal from '../components/modal/Modal';

const LandingLayout = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-10 min-h-screen">
        <Outlet />
        <Modal />
      </div>
      <Footer />
    </>
  );
};
export default LandingLayout;
