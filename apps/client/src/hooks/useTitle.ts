import { useLocation } from 'react-router-dom';

import { capitalizeWords, stripSlashes } from '../helpers';

export const useTitle = () => {
  const { pathname } = useLocation();
  const header = capitalizeWords(stripSlashes(pathname));
  const dynamic = header[header.length - 1];
  const path = dynamic.match(/[0-9]/g) ? 'Product' : dynamic;

  return {
    path,
    dynamic,
  };
};
