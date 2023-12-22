import axios from '../axiosConf';

export const getProductById = (id: string) => {
  const res = axios({
    method: 'get',
    url: `/products/id/${id}`,
  });

  return res;
};
