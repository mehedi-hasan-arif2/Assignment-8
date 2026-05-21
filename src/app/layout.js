import './globals.css';
import { Toaster } from 'react-hot-toast';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer'; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0b0f19] antialiased">
        {/* Global Toast Notification Provider */}
        <Toaster position="top-center" reverseOrder={false} />
        
        {/* Layout Structure */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}