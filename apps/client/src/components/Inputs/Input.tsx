import React from 'react';

import { InputContainer, InputField, Label } from './Inputs.style';

interface InputProps {
  info: string;
  color?: string;
  bgColor?: string;
  [x: string]: any;
}

export const Input: React.FC<InputProps> = ({ info, color, bgColor, ...rest }) => (
  <InputContainer column="true">
    <Label htmlFor={info}>{info}</Label>
    <InputField id={info} color={color} bgColor={bgColor} {...rest} />
  </InputContainer>
);
