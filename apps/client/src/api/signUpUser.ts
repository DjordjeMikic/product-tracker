import { RegisterPayloadType } from '../types';
import axios from './axiosConf';

export const signUpUser = async (data: RegisterPayloadType) => {
  const res = await axios({
    method: 'post',
    url: '/users/signup',
    data,
  });

  return res;
};
