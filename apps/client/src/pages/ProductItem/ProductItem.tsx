import { format } from 'date-fns';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { Box, CheckMark, Close, Euro, Pen, Trash } from '../../Svg';
import { useProduct } from '../../hooks/useProduct';
import { setDelProduct } from '../../store/slice';
import {
  BtnBox,
  DataContainer,
  Desc,
  ImageContainer,
  LinksContainer,
  ProductContainer,
  ProductNameContainer,
  Property,
  Row,
} from './ProductItem.style';

const API_URL = `${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}`;

export const ProductItem = () => {
  const theme = useTheme();
  const { id } = useParams();
  const { product, productIsLoading } = useProduct(id as string);
  const dispatch = useDispatch();

  if (productIsLoading) return <h1>Loading ...</h1>;

  return (
    <ProductContainer>
      <ImageContainer>
        <img
          src={
            product.image
              ? `${API_URL}/${product.image}`
              : `${API_URL}/uploads/default.jpg`
          }
          alt={product.image}
          loading="lazy"
        />
      </ImageContainer>

      <Row>
        <ProductNameContainer>
          <h1>{product.productName}</h1>
          <p>Key: {product.productKey}</p>
        </ProductNameContainer>

        <DataContainer>
          <Property>
            <Euro fill={theme.colors.darkGrey} />
            <h4>{product.price}</h4>
          </Property>

          <Property>
            <Box fill={theme.colors.darkGrey} />
            <h4>{product.stock} pieces</h4>
          </Property>

          <Property>
            {product.discount ? (
              <CheckMark fill={theme.colors.success} />
            ) : (
              <Close fill={theme.colors.red} />
            )}
            <h4>Sale</h4>
          </Property>

          <Property>
            <h4>{format(new Date(product.added), 'MM/dd/yyyy')}</h4>
          </Property>

          <LinksContainer>
            <Link to={`/dashboard/change/${product._id}`}>
              <BtnBox bgColor={theme.colors.shine}>
                <Pen fill={theme.colors.darkGrey} />
              </BtnBox>
            </Link>
            <BtnBox
              bgColor={theme.colors.red}
              onClick={() => dispatch(setDelProduct(product))}
            >
              <Trash fill={theme.colors.shine} />
            </BtnBox>
          </LinksContainer>
        </DataContainer>
      </Row>

      <Desc>{product.productDescription}</Desc>
    </ProductContainer>
  );
};
