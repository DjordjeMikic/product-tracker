import { format } from 'date-fns';
import React from 'react';

import { SwitchCheckBox } from '../../components/Inputs/SwitchCheckBox';
import { DateCardContainer } from './DateCard.style';

interface DateCardProps {
  enabled: boolean;
  onChange: VoidFunction;
}

export const DateCard: React.FC<DateCardProps> = ({ enabled, onChange }) => (
  <DateCardContainer>
    <div className="flex">
      <p>Date added</p>
      <p>Sale</p>
    </div>

    <div className="flex">
      <h4>{format(new Date(), 'MM, dd, yyyy')}</h4>
      <SwitchCheckBox enabled={enabled} enableSwitch={onChange} />
    </div>
  </DateCardContainer>
);
