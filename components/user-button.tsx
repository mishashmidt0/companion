import { User } from 'lucide-react';

export const UserButton = () => {
  return (
    <button
      className={
        'flex size-10 items-center justify-center rounded transition-colors hover:bg-neutral-300 dark:hover:bg-neutral-700'
      }
    >
      <User className={'size-[1.5rem]'} />
    </button>
  );
};
