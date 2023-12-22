import { ProductItem } from '../../types';
import axios from '../axiosConf';

export const updateProduct = async (data: ProductItem) => {
  const res = await axios({
    method: 'put',
    url: `/products/update/${data._id}`,
    data,
    withCredentials: true,
  });

  return res;
};
