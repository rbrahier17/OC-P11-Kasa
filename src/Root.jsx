import Header from './components/global/Header';
import { Outlet } from 'react-router-dom';
import Footer from "./components/global/Footer";

export default function Root ()  {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
