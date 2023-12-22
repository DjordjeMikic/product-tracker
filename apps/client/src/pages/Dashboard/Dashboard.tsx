import React from 'react';
import { Outlet } from 'react-router-dom';

import { DashboardLayout } from '../../components/Layouts/DashboardLayout/DashboardLayout';
import { Protected } from '../../components/Protected/Protected';

export const Dashboard = () => (
  <Protected>
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  </Protected>
);
