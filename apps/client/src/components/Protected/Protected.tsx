import React, { PropsWithChildren, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { getAuthCookie } from '../../api/cookies';
import { ROUTES } from '../../constants/ROUTES';

export const Protected: React.FC<PropsWithChildren> = ({ children }) => {
  const [cookie] = useState(getAuthCookie());

  if (!cookie) {
    return <Navigate to={ROUTES.LOGIN} />;
  }

  return children;
};
