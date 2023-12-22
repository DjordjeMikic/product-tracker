import React from 'react';

import { CheckContainer, Label } from './Inputs.style';
import { InfoProps as CheckBoxProps } from './InputsProps';

export const CheckBox: React.FC<CheckBoxProps> = ({ info }) => (
  <CheckContainer className="flex" width="44%">
    <input type="checkbox" id={info} />
    <Label htmlFor={info}>{info}</Label>
  </CheckContainer>
);
