import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { AddContainer, Btn, FlexProduct, Left, Right } from '../../Shared.style';
import { FolderAdd } from '../../Svg';
import { DateCard } from '../../components/DateCard/DateCard';
import { Input } from '../../components/Inputs/Input';
import { Tarea } from '../../components/Inputs/Tarea';
import { useProduct } from '../../hooks/useProduct';
import { useProductMutations } from '../../hooks/useProductMutations';
import { ProductItem } from '../../types';

export const ChangeProduct = () => {
  const [info, setInfo] = useState<ProductItem>({
    added: '',
    discount: false,
    image: '',
    price: '',
    productDescription: '',
    productKey: '',
    productName: '',
    stock: '',
    __v: 0,
    _id: '',
  });

  const { id } = useParams();
  const { product } = useProduct(id || '');
  const { mutateUpdateProduct } = useProductMutations();
  const theme = useTheme();

  useEffect(() => {
    if (product) setInfo(product);
  }, [product]);

  const checkNumber = (param: string) => {
    if (isNaN(parseFloat(param))) return true;

    return false;
  };

  const onChange = (e, num) => {
    if (num) {
      if (checkNumber(e.target.value)) return;

      setInfo((prevState) => ({
        ...prevState,
        [e.target.name]: parseFloat(e.target.value),
      }));

      return;
    }

    setInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    mutateUpdateProduct(info);
  };

  return (
    <AddContainer onSubmit={onSubmit}>
      <Left>
        <Input
          info="Product name"
          placeholder="Enter Product Name"
          name="productName"
          value={info.productName}
          onChange={onChange}
        />
        <Tarea
          info="Short Product Description"
          placeholder="Product Description..."
          rows="4"
          name="productDescription"
          value={info.productDescription}
          onChange={onChange}
        />
      </Left>
      <Right>
        <DateCard
          enabled={info.discount}
          onChange={() =>
            setInfo((prevState) => ({
              ...prevState,
              discount: !prevState.discount,
            }))
          }
        />
        <Input
          info="Product key"
          placeholder="1RRED94F45B99QTS"
          name="productKey"
          value={info.productKey}
          onChange={onChange}
        />
        <FlexProduct className="flex">
          <Input
            info="Stock"
            name="stock"
            value={info.stock}
            onChange={(e) => onChange(e, true)}
          />
          <Input
            info="Price"
            name="price"
            value={info.price}
            onChange={(e) => onChange(e, true)}
          />
        </FlexProduct>

        <Btn className="flex">
          <FolderAdd fill={theme.colors.shine} />
          <p>Save</p>
        </Btn>
      </Right>
    </AddContainer>
  );
};
