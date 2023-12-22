import React, { PropsWithChildren, useEffect } from 'react';

import { DashboardLayoutContainer, MainContent } from './DashboardLayout.style';
import { Header } from './Header';
import { Sidebar } from '../../Sidebar/Sidebar';
import { useAppSelector } from '../../../store/store';
import { DeleteModal } from '../../DeleteModal/DeleteModal';
import { useAuth } from '../../../hooks/useAuth';

export const DashboardLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { mutateCheckIsLogged } = useAuth();
  const product = useAppSelector((state) => state.store.delProduct);

  useEffect(() => {
    mutateCheckIsLogged();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DashboardLayoutContainer>
      {product && <DeleteModal />}
      <Sidebar />
      <MainContent>
        <Header />
        {children}
      </MainContent>
    </DashboardLayoutContainer>
  );
};
