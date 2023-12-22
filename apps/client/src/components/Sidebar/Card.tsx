import React from 'react';

import { CardContainer, Mail } from './Sidebar.style';

export const Card = () => (
  <CardContainer>
    <h3>Need more features?</h3>
    <p>Contact us!</p>
    <Mail>
      <a href="mailto:dj@gmail.com">djmikic996@gmail.com</a>
    </Mail>
  </CardContainer>
);
