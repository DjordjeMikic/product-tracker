import React from 'react';

import { ProductItem } from '../../types';
import { TableContainer } from './Table.style';
import { TableBody } from './TableBody';
import { TableHeader } from './TableHeader';

interface TableProps {
  products: ProductItem[];
}

export const Table: React.FC<TableProps> = ({ products }) => (
  <TableContainer>
    <TableHeader />
    <TableBody products={products} />
  </TableContainer>
);
