import React, { PropsWithChildren } from 'react';

import { FormLayoutContainer } from './FormLayout.style';

export const FormLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <FormLayoutContainer>
    <img src="/Image.png" alt="" />
    {children}
  </FormLayoutContainer>
);
