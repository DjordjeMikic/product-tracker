import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { signUpUser } from '../api/signUpUser';
import { ROUTES } from '../constants/ROUTES';

export const useRegister = () => {
  const navigate = useNavigate();

  const { mutate: mutateRegister } = useMutation({
    mutationFn: signUpUser,
    onSuccess: () => {
      setTimeout(() => {
        toast('User registered successfully');
        navigate(ROUTES.LOGIN);
      }, 1000);
    },
    onError: (e) => {
      if (e instanceof AxiosError) {
        const err = e as any;

        if (err.response.status === 400) {
          toast.error('Bad credentials');
          return;
        }

        toast.error('Error. Please Try Again');
      }
    },
  });

  return { mutateRegister };
};
