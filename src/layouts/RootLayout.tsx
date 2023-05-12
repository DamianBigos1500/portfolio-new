import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface RootLayoutProps {}

const RootLayout: FC<RootLayoutProps> = ({}) => {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default RootLayout;
