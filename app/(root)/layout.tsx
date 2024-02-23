import { ReactNode } from 'react';

import { Navbar } from '@/components/navbar';
import { Sidebar } from '@/components/sidebar';
interface Props {
  children: ReactNode;
}
export default function RootLayout({ children }: Props) {
  return (
    <div className={'min-h-screen'}>
      <Navbar />

      <div className={'fixed inset-y-0 mt-16 hidden w-20 flex-col md:flex'}>
        <Sidebar />
      </div>
      <main className={'h-full pt-16 md:pl-20'}>{children}</main>
    </div>
  );
}
