'use client';

import { Poppins } from 'next/font/google';
  import Link from 'next/link';

import { MobileSideBar } from '@/components/mobile-side-bar';
import { ModeToggle } from '@/components/theme-toggle-button';
import { UserButton } from '@/components/user-button';
import { cn } from '@/lib/utils';

const font = Poppins({ weight: '600', subsets: ['latin'] });

export const Navbar = () => {
  return (
    <div
      className={
        'fixed z-50 flex h-16 w-full items-center justify-between border-b border-primary/10 bg-secondary px-4 py-2'
      }
    >
      <div className={'flex items-center'}>
        <MobileSideBar />
        <Link href={'/'}>
          <h1
            className={cn(
              'hidden text-xl font-bold text-primary md:block md:text-3xl',
              font.className,
            )}
          >
            companion.ai
          </h1>
        </Link>
      </div>

      <div className={'flex items-center gap-x-3'}>
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  );
};
