import React from 'react';

import { InputContainer, UnstyledContainer } from './Inputs.style';

interface UnstyledInputProps {
  color?: string;
  [x: string]: any;
}

export const UnstyledInput: React.FC<UnstyledInputProps> = ({ color, ...rest }) => (
  <InputContainer margin="0">
    <UnstyledContainer color={color} {...rest} />
  </InputContainer>
);
