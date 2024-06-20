import { useEffect } from 'react';
import PageContent from './page-content';

import { capitalizeFirstLetter } from '../../utils/helpers';
import { Outlet } from 'react-router-dom';

function Page({ currentPage }) {
  currentPage = currentPage.substring(1);
  

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage);
  }, [currentPage]);

  return (
    <section>
      <PageContent>
        <Outlet />
      </PageContent>
    </section>
  );
}

export default Page;