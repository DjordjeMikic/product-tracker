import React, { PropsWithChildren } from 'react';
import {
  FooterText,
  FormContainer,
  FormEl,
  FormFooter,
  ImageContainer,
  MainForm,
  Secondary,
} from './Form.style';

interface FormProps extends PropsWithChildren {
  bannerText: string;
  [x: string]: any;
}

export const Form: React.FC<FormProps> = ({ children, bannerText, ...rest }) => (
  <FormContainer {...rest}>
    <ImageContainer>
      <img src="/logo.png" alt="Logo" id="img" />
    </ImageContainer>
    <FormEl>
      <h4>Welcome !</h4>
      <h1>{bannerText}</h1>
      <Secondary>Enter your personal data below</Secondary>
      <MainForm>{children}</MainForm>
      <FormFooter>
        <p>
          @ 2021, Made with by <span style={{ fontWeight: 'bold' }}>Djordje Mikic</span>
        </p>
        <FooterText>App version 1.0.</FooterText>
      </FormFooter>
    </FormEl>
  </FormContainer>
);
