import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { Eye, Pen, Trash } from '../../Svg';
import { setDelProduct } from '../../store/slice';
import { ProductItem } from '../../types';
import { OptionsContainer } from './Table.style';

interface OptionsProps {
  item: ProductItem;
}

export const Options: React.FC<OptionsProps> = ({ item }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <OptionsContainer>
      <Link to={`/dashboard/change/${item._id}`}>
        <Pen fill={theme.colors.black} />
      </Link>

      <button onClick={() => dispatch(setDelProduct(item))}>
        <Trash fill={theme.colors.black} />
      </button>

      <Link to={`/dashboard/product/${item._id}`}>
        <Eye fill={theme.colors.black} />
      </Link>
    </OptionsContainer>
  );
};
