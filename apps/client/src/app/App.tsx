import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ReactQueryWrapper } from '../ReactQueryWrapper';
import { MobileDevice } from '../components/MobileDevice/MobileDevice';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { AppRoutes } from './AppRoutes';

export const App = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (isMobile) return <MobileDevice />;

  return (
    <ReactQueryWrapper>
      <AppRoutes />
      <ToastContainer />
    </ReactQueryWrapper>
  );
};

export default App;
