import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { Close, Trash } from '../../Svg';
import { ROUTES } from '../../constants/ROUTES';
import { useProductMutations } from '../../hooks/useProductMutations';
import { setDelProduct } from '../../store/slice';
import { useAppSelector } from '../../store/store';
import {
  Btn,
  ButtonsContainer,
  DeleteModalContainer,
  DeleteModalContent,
} from './DeleteModal.style';

export const DeleteModal = () => {
  const dispatch = useDispatch();
  const product = useAppSelector((state) => state.store.delProduct);
  const theme = useTheme();
  const { mutateDeleteProduct } = useProductMutations();
  const navigate = useNavigate();

  const close = () => dispatch(setDelProduct(null));

  const onClose = (e) => {
    if (e.target.id === 'container') close();
  };

  const deleteProduct = () => {
    mutateDeleteProduct(product?._id as string);
    navigate(ROUTES.DASHBOARD);
    close();
  };

  return (
    <DeleteModalContainer id="container" onClick={onClose}>
      <DeleteModalContent>
        <h1>Delete {product?.productName}</h1>
        <p>with id {product?._id}</p>
        <ButtonsContainer>
          <Btn color={theme.colors.darkGrey} onClick={close}>
            <Close fill={theme.colors.light} />
            Cancel
          </Btn>
          <Btn color={theme.colors.red} onClick={deleteProduct}>
            <Trash fill={theme.colors.light} /> Delete
          </Btn>
        </ButtonsContainer>
      </DeleteModalContent>
    </DeleteModalContainer>
  );
};
