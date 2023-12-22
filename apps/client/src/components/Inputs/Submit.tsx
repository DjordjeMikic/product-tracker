import React from 'react';

import { Button, InputContainer } from './Inputs.style';

interface SubmitProps {
  info: string;
  type?: 'submit' | 'button';
}

export const Submit: React.FC<SubmitProps> = ({ info, type = 'submit' }) => (
  <InputContainer>
    <Button type={type}>{info}</Button>
  </InputContainer>
);
