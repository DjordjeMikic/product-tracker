import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { OtherOption, PasswordContainer } from '../../Shared.style';
import { Form } from '../../components/Form/Form';
import { Input } from '../../components/Inputs/Input';
import { Submit } from '../../components/Inputs/Submit';
import { FormLayout } from '../../components/Layouts/FormLayout/FormLayout';
import { useRegister } from '../../hooks/useRegister';
import { RegisterPasswordFields } from '../../types';

export const Register = () => {
  const [info, setInfo] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [same, setSame] = useState<RegisterPasswordFields | null>(null);

  const { mutateRegister } = useRegister();
  const theme = useTheme();

  const onChange = (e: any) => {
    setInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onBlur = () => {
    setSame({
      color:
        info.password === info.confirmPassword ? theme.colors.success : theme.colors.red,
      bgColor:
        info.password === info.confirmPassword
          ? theme.colors.lightSuccess
          : theme.colors.lightRed,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    mutateRegister({
      ...info,
      password: info.password.trim(),
      confirmPassword: info.confirmPassword.trim(),
    });
  };

  return (
    <FormLayout>
      <Form bannerText="Sign Up to PT" onSubmit={onSubmit}>
        <Input
          type="text"
          info="Full Name"
          name="fullName"
          value={info.fullName}
          onChange={onChange}
          required
        />

        <Input
          type="email"
          info="Email Address"
          name="email"
          value={info.email}
          onChange={onChange}
          required
        />

        <PasswordContainer className="flex">
          <Input
            type="password"
            info="Password"
            name="password"
            color={same?.color}
            bgColor={same?.bgColor}
            value={info.password}
            onChange={onChange}
            onBlur={onBlur}
            required
          />

          <Input
            type="password"
            info="Confirm Password"
            name="confirmPassword"
            color={same?.color}
            bgColor={same?.bgColor}
            value={info.confirmPassword}
            onChange={onChange}
            onBlur={onBlur}
            required
          />
        </PasswordContainer>

        <Submit type="submit" info="Sign Up" />

        <OtherOption>
          If you already have an account you can <Link to="/">Login here !</Link>
        </OtherOption>
      </Form>
    </FormLayout>
  );
};
