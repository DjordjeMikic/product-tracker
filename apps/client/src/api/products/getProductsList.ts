import axios from '../axiosConf';

export const getProductsList = async ({ pageParam, queryKey }) => {
  const userId = queryKey[1];
  const searchParam = queryKey[2];
  const url = `/products/${userId}/${pageParam}/${
    searchParam ? `?search=${searchParam}` : ''
  }`;

  const res = await axios({
    method: 'get',
    url,
  });

  return {
    data: res.data,
    page: res.data.length >= 15 ? ++pageParam : null,
  };
};
