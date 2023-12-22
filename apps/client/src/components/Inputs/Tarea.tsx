import React from 'react';

import { InputContainer, Label, TareaContainer } from './Inputs.style';
import { UnstyledInputProps } from './InputsProps';

export const Tarea: React.FC<UnstyledInputProps> = ({ info, ...rest }) => (
  <InputContainer column="true">
    <Label htmlFor={info}>{info}</Label>
    <TareaContainer id={info} {...rest}></TareaContainer>
  </InputContainer>
);
