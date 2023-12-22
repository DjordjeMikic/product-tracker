import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProductItem, UserType } from '../types';

interface InitialState {
  delProduct: ProductItem | null;
  user: UserType | null;
}

const initialState: InitialState = {
  delProduct: null,
  user: null,
};

export const slice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setDelProduct: (state: InitialState, action: PayloadAction<ProductItem | null>) => {
      state.delProduct = action.payload;
    },
    setUser: (state: InitialState, action: PayloadAction<UserType | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setDelProduct, setUser } = slice.actions;

export default slice.reducer;
