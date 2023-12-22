import React from 'react';

import { Show, SwitchContainer } from './Inputs.style';

interface SwitchCheckBoxProps {
  enabled: boolean;
  enableSwitch: any;
}

export const SwitchCheckBox: React.FC<SwitchCheckBoxProps> = ({
  enabled,
  enableSwitch,
}) => (
  <SwitchContainer enabled={enabled} onClick={enableSwitch}>
    <Show enabled={enabled}></Show>
  </SwitchContainer>
);
