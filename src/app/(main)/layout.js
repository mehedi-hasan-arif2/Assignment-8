import { Toaster } from 'sonner';

export default function MainLayout({ children }) {
  return (
    <>
      <main className="pt-20">{children}</main>
      <Toaster position="top-right" richColors />
    </>
  );
}
