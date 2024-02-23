import { Menu } from 'lucide-react';

import { Sidebar } from '@/components/sidebar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export const MobileSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger className={'pr-4 md:hidden'}>
        <Menu />
      </SheetTrigger>
      <SheetContent side={'left'} className={'w-32 bg-secondary p-0 pt-10'}>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
