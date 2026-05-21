import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
      <Toaster position="top-right" richColors />
    </>
  );
}