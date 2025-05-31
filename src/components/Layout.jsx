import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollProvider } from '../contexts/ScrollToContext';

export function Layout() {
  return (
    <ScrollProvider>
      <Header />
      <Outlet />
      <Footer />
    </ScrollProvider>
  );
}
