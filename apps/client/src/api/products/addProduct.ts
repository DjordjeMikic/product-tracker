import axios from '../axiosConf';

export const addProduct = async (data: FormData) => {
  const res = await axios({
    method: 'post',
    url: '/products/create',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data,
  });

  return res;
};
