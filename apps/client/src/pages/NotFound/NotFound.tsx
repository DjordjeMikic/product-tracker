import React from 'react';
import { Link } from 'react-router-dom';

import { FormLayout } from '../../components/Layouts/FormLayout/FormLayout';
import { ROUTES } from '../../constants/ROUTES';
import { NfContainer } from './NotFound.style';

export const NotFound = () => (
  <FormLayout>
    <NfContainer>
      <h1>Not Found Page</h1>
      <Link to={ROUTES.LOGIN}>Go Home</Link>
    </NfContainer>
  </FormLayout>
);
