import React from 'react';
import { useTheme } from 'styled-components';

import { ProductItem } from '../../types';
import { Discount } from '../Inputs/Discount';
import { Options } from './Options';
import { TableBodyContainer, TableField, Tr } from './Table.style';

interface TableBodyProps {
  products: ProductItem[];
}

export const TableBody: React.FC<TableBodyProps> = ({ products }) => {
  const theme = useTheme();

  return (
    <TableBodyContainer>
      {products?.length > 0 ? (
        products.map((item: any, index: number) => (
          <Tr
            color={index % 2 ? theme.colors.lightness : theme.colors.white}
            key={item._id}
          >
            <TableField width="29%" style={{ paddingLeft: '9px' }}>
              {item.productName}
            </TableField>
            <TableField width="29%" style={{ color: theme.colors.light }}>
              {item.productKey}
            </TableField>
            <TableField width="9%">{item.stock}</TableField>
            <TableField width="9%">{item.price}</TableField>
            <TableField width="9%">
              <Discount status={item.discount} theme={theme} />
            </TableField>
            <Options item={item} />
          </Tr>
        ))
      ) : (
        <Tr>
          <TableField>No Products</TableField>
        </Tr>
      )}
    </TableBodyContainer>
  );
};
