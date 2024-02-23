'use client';

import debounce from 'debounce';
import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEventHandler } from 'react';

import { Input } from '@/components/ui/input';

export const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryId = searchParams.get('categoryId');

  const onQueryHandler = (value: string) => {
    router.replace(window.location.href + `?name=${value}&categoryId=${categoryId}`);
  };

  const onQueryHandlerDebounce = debounce(onQueryHandler, 1000);

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onQueryHandlerDebounce(event.target.value);
  };

  return (
    <div className={'relative'}>
      <Search className={'absolute left-4 top-3 size-4 text-muted-foreground'} />
      <Input
        onChange={onChange}
        placeholder={'Search...'}
        className={'bg-primary/10 pl-10'}
      />
    </div>
  );
};
