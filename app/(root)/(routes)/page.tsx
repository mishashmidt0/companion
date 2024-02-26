import { Suspense } from 'react';

import { SearchInput } from '@/components/search-input';

const RootPage = () => {
  return (
    <div className={'h-full space-y-2 p-4'}>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchInput />
      </Suspense>
    </div>
  );
};

export default RootPage;
