import { useEffect } from 'react';
import PageContent from './page-content';

import { capitalizeFirstLetter } from '../../utils/helpers';
import { Outlet } from 'react-router-dom';

function Page({ currentPage }) {
  console.log("Current page", currentPage)
  currentPage = currentPage.substring(1) || "Daniel Gomez";
  

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage);
  }, [currentPage]);

  return (
    <section>
      <h2>{capitalizeFirstLetter(currentPage)}</h2>

      <PageContent>
        <Outlet />
      </PageContent>
    </section>
  );
}

export default Page;