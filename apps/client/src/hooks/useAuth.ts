import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { isLoggedIn } from '../api/isLoggedIn';
import { signInUser } from '../api/signInUser';
import { signOut } from '../api/signOutUser';
import { ROUTES } from '../constants/ROUTES';
import { setUser } from '../store/slice';

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutate: mutateSignIn } = useMutation({
    mutationFn: signInUser,
    onSuccess: (res) => {
      dispatch(
        setUser({
          email: res.data.email,
          fullName: res.data.fullName,
          userId: res.data._id,
        }),
      );

      navigate(ROUTES.DASHBOARD);
    },
    onError: (e) => {
      if (e instanceof AxiosError) {
        const err = e as any;

        if (err.response.status === 400) {
          toast.error(err.response.data);
          return;
        }

        toast.error('Something wrong. Please, Try again');
      }
    },
  });

  const { mutate: mutateSignOut } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      toast('Successfully signed out', { autoClose: 1000 });
      navigate(ROUTES.LOGIN);
    },
    onError: () => {
      toast.error('Please try again');
    },
  });

  const { mutate: mutateCheckIsLogged } = useMutation({
    mutationFn: isLoggedIn,
    onSuccess: (res) => {
      dispatch(
        setUser({
          email: res.data.email,
          fullName: res.data.fullName,
          userId: res.data._id,
        }),
      );

      navigate(ROUTES.DASHBOARD);
    },
    onError: () => {
      navigate(ROUTES.LOGIN);
    },
  });

  return { mutateSignIn, mutateSignOut, mutateCheckIsLogged };
};
