import { useQuery } from '@tanstack/react-query';

import { getProductById } from '../api/products/getProductById';

export const useProduct = (id: string) => {
  const { data: product, isLoading: productIsLoading } = useQuery({
    queryKey: ['product'],
    queryFn: () => getProductById(id),
    refetchOnMount: true,
  });

  return {
    product: product?.data,
    productIsLoading,
  };
};
