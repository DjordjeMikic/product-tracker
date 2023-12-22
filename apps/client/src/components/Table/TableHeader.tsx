import React from 'react';

import { TableField, TableHeaderContainer } from './Table.style';

const properties: string[] = [
  'Product Name',
  'Product Key',
  'Stock',
  'Price',
  'Sale',
  'Options',
];

export const TableHeader = () => (
  <TableHeaderContainer>
    <tr>
      {properties.map((item: string, index: number) => (
        <TableField
          key={index}
          width={item.match(/product/gi) ? '29%' : '9%'}
          style={{ paddingLeft: !index ? '9px' : '0' }}
        >
          {item}
        </TableField>
      ))}
    </tr>
  </TableHeaderContainer>
);
