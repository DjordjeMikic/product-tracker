import React, { useCallback, useEffect, useState } from 'react';

import { AddProduct } from '../../components/AddProduct/AddProduct';
import { Table } from '../../components/Table/Table';
import { useDebounce } from '../../hooks/useDebounce';
import { useProducts } from '../../hooks/useProducts';
import { Container } from './Products.style';

export const Products = () => {
  const [search, setSearch] = useState('');

  const { debounce } = useDebounce();
  const { products, refetchProducts, fetchNextPage, hasNextPage } = useProducts(search);

  const handleSearch = useCallback(
    debounce(() => refetchProducts(), 500),
    [],
  );

  const onScroll = (e) => {
    const el = e.target;
    const nextPage = el.scrollTop >= el.scrollHeight - el.offsetHeight - 4;
    if (hasNextPage && nextPage) fetchNextPage();
  };

  // useEffect(() => {
  //   if (products) {
  //     const arr: ProductItem[] = products?.pages.reduce((acc, item) => [...acc, ...Object.values(item?.data)], []);
  //     console.log(products, arr);
  //   }
  // }, [products]);

  useEffect(() => {
    handleSearch();
  }, [search, handleSearch]);

  return (
    <Container className="flex column" onScroll={onScroll}>
      <AddProduct search={search} setSearch={setSearch} />
      <Table
        // @ts-expect-error: expected prop type
        products={products?.pages.reduce(
          // @ts-expect-error: expected prop type
          (acc, item) => [...acc, ...Object.values(item?.data)],
          [],
        )}
      />
    </Container>
  );
};
