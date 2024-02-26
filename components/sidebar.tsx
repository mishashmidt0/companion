'use client';

import { Home, Plus, Settings } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

import { ROUTES } from '@/const/routes';
import { cn } from '@/lib/utils';

const navigation = [
  {
    icon: Home,
    href: ROUTES.home,
    label: 'Home',
    pro: false,
  },
  {
    icon: Plus,
    href: ROUTES.create,
    label: 'Create',
    pro: true,
  },
  {
    icon: Settings,
    href: ROUTES.settings,
    label: 'Settings',
    pro: false,
  },
];

export const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const onNavigate = (url: string, pro: boolean) => {
    console.log(pro);
    return router.push(url);
  };

  return (
    <div className={'flex h-full flex-col space-y-4 bg-secondary text-primary'}>
      <div className={'flex flex-1  justify-center p-3'}>
        <div className={'space-y-2'}>
          {navigation.map((el) => (
            <button
              onClick={() => onNavigate(el.href, el.pro)}
              key={el.href}
              className={cn(
                'group flex w-full cursor-pointer justify-start rounded-lg p-3 text-xs font-medium  text-muted-foreground transition hover:bg-primary/10 hover:text-primary',
                pathname === el.href && 'bg-primary/10 text-primary',
              )}
            >
              <div className={'flex flex-1 flex-col items-center gap-y-2'}>
                <el.icon className={'size-5'} />
                {el.label}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
