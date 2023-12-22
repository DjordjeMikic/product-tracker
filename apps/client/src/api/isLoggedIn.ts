import axios from './axiosConf';

export const isLoggedIn = async () => {
  const res = await axios({
    method: 'post',
    url: '/users/is-auth',
  });

  return res;
};
