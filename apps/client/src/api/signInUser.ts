import { LoginPayloadType } from '../types';
import axios from './axiosConf';

export const signInUser = async (data: LoginPayloadType) => {
  const res = await axios({
    method: 'post',
    url: '/users/signin',
    data,
  });

  return res;
};
