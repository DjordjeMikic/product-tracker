import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import { ROUTES } from '../constants/ROUTES';
import { AddProduct } from '../pages/AddProduct/AddProduct';
import { ChangeProduct } from '../pages/ChangeProduct/ChangeProduct';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { Login } from '../pages/Login/Login';
import { NotFound } from '../pages/NotFound/NotFound';
import { ProductItem } from '../pages/ProductItem/ProductItem';
import { Products } from '../pages/Products/Products';
import { Profile } from '../pages/Profile/Profile';
import { Register } from '../pages/Register/Register';

const getRoutes: RouteObject[] = [
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTES.REGISTER,
    element: <Register />,
  },
  {
    path: ROUTES.DASHBOARD,
    element: <Dashboard />,
    children: [
      {
        path: ROUTES.DASHBOARD,
        element: <Products />,
      },
      {
        path: ROUTES.PROFILE_PAGE,
        element: <Profile />,
      },
      {
        path: ROUTES.ADD_PRODUCT_PAGE,
        element: <AddProduct />,
      },
      {
        path: ROUTES.CHAGE_PRODUCT,
        element: <ChangeProduct />,
      },
      {
        path: ROUTES.PRODUCT_PAGE,
        element: <ProductItem />,
      },
    ],
  },
  {
    path: ROUTES.NOT_FOUND_PAGE,
    element: <NotFound />,
  },
];

export const AppRoutes = () => {
  const routes = useRoutes(getRoutes);

  return routes;
};
