import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Forgot, OtherOption, PasswordContainer } from '../../Shared.style';
import { Form } from '../../components/Form/Form';
import { CheckBox } from '../../components/Inputs/CheckBox';
import { Input } from '../../components/Inputs/Input';
import { Submit } from '../../components/Inputs/Submit';
import { FormLayout } from '../../components/Layouts/FormLayout/FormLayout';
import { ROUTES } from '../../constants/ROUTES';
import { useAuth } from '../../hooks/useAuth';
import { LoginPayloadType } from '../../types';

export const Login = () => {
  const [info, setInfo] = useState<LoginPayloadType>({
    email: '',
    password: '',
  });

  const { mutateSignIn } = useAuth();

  const onChange = (e) => {
    setInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    mutateSignIn({ ...info, password: info.password.trim() });
  };

  return (
    <FormLayout>
      <Form bannerText="Sign In to PT" onSubmit={onSubmit}>
        <h1>Form</h1>

        <Input
          type="email"
          info="Email Address"
          name="email"
          value={info.email}
          onChange={onChange}
          required
        />
        <Input
          type="password"
          info="Password"
          name="password"
          value={info.password}
          onChange={onChange}
          required
        />

        <PasswordContainer className="flex" style={{ marginTop: '2%' }}>
          <CheckBox info="Remember me" />
          <Forgot>Forgot password</Forgot>
        </PasswordContainer>

        <Submit info="Sign in" />

        <OtherOption>
          If you don't have an account register you can{' '}
          <Link to={ROUTES.REGISTER}>Register here !</Link>
        </OtherOption>
      </Form>
    </FormLayout>
  );
};
