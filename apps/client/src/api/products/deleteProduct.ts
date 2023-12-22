import axios from '../axiosConf';

export const deleteProduct = async (id: string) => {
  const res = await axios({
    method: 'delete',
    url: `/products/remove/${id}`,
  });

  return res;
};
