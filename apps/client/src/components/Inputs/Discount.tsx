import React from 'react';
import { DefaultTheme } from 'styled-components';

import { DiscountContainer } from './Inputs.style';

interface DiscountProps {
  status: boolean;
  theme: DefaultTheme;
}

export const Discount: React.FC<DiscountProps> = ({ status, theme }) => (
  <DiscountContainer
    color={status ? theme.colors.success : theme.colors.red}
    bgColor={status ? theme.colors.lightSuccess : theme.colors.lightRed}
  >
    <p>{status ? 'Yes' : 'No'}</p>
  </DiscountContainer>
);
