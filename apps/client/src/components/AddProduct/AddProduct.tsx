import React from 'react';
import { Link } from 'react-router-dom';

import { UnstyledInput } from '../Inputs/UnstyledInput';
import { AddBtn, AddProductContainer } from './AddProduct.style';

interface AddProductProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const AddProduct: React.FC<AddProductProps> = ({ search, setSearch }) => (
  <AddProductContainer className="flex">
    <UnstyledInput
      type="text"
      placeholder="Search: Name, Price, Product, Key"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    <AddBtn className="flex">
      <Link className="flex" to="/dashboard/add">
        <p>+</p>
        <span>Add Product</span>
      </Link>
    </AddBtn>
  </AddProductContainer>
);
