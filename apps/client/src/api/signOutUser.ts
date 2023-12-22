import axios from './axiosConf';

export const signOut = async () => {
  const res = await axios({
    method: 'post',
    url: '/users/signout',
  });

  return res;
};
