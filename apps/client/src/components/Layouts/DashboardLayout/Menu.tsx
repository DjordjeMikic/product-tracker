import React from 'react';

import { Line, MenuContainer } from './DashboardLayout.style';

interface MenuProps {
  logout: VoidFunction;
  user?: string;
}

export const Menu: React.FC<MenuProps> = ({ logout, user }) => (
  <MenuContainer>
    {user && <h3>{user}</h3>}
    <Line className="flex" onClick={logout}>
      Logout
    </Line>
  </MenuContainer>
);
