import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { addProduct } from '../api/products/addProduct';
import { updateProduct } from '../api/products/changeProduct';
import { deleteProduct } from '../api/products/deleteProduct';
import { ROUTES } from '../constants/ROUTES';

export const useProductMutations = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const successCb = (action: string) => {
    queryClient.invalidateQueries({ queryKey: ['product'] });
    queryClient.invalidateQueries({ queryKey: ['products'] });

    toast(`Product ${action} succesfully`, { autoClose: 1000 });
    setTimeout(() => navigate(ROUTES.DASHBOARD), 1000);
  };

  const { mutate: mutateAddProduct } = useMutation({
    mutationFn: addProduct,
    onSuccess: () => successCb('added'),
    onError: () => {
      toast.error('Something gonna wrong, Please Try Again');
    },
  });

  const { mutate: mutateUpdateProduct } = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => successCb('updated'),
    onError: () => {
      toast.error('Something gonna wrong, Please Try Again');
    },
  });

  const { mutate: mutateDeleteProduct } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => successCb('deleted'),
    onError: () => {
      toast.error('Something gonna wrong, Please Try Again');
    },
  });

  return {
    mutateAddProduct,
    mutateUpdateProduct,
    mutateDeleteProduct,
  };
};
