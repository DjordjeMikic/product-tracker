import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';

import { getProductsList } from '../api/products/getProductsList';
import { useAppSelector } from '../store/store';

export const useProducts = (search: string) => {
  const queryClient = useQueryClient();
  const user = useAppSelector((state) => state.store.user);

  const {
    data: products,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['products', user?.userId, search],
    queryFn: ({ pageParam, queryKey }) => getProductsList({ pageParam, queryKey }),
    getPreviousPageParam: (firstPage) => firstPage.page ?? undefined,
    getNextPageParam: (lastPage) => lastPage.page ?? undefined,
    initialPageParam: 0,
    refetchOnMount: true,
  });

  const refetchProducts = () => {
    queryClient.invalidateQueries({
      queryKey: ['products', search],
    });
  };

  return {
    products: products,
    refetchProducts,
    fetchNextPage,
    hasNextPage,
  };
};
