import React, { useState } from 'react';
import { useTheme } from 'styled-components';

import { Profile } from '../../../Svg';
import { useAuth } from '../../../hooks/useAuth';
import { useTitle } from '../../../hooks/useTitle';
import { useAppSelector } from '../../../store/store';
import { HeaderContainer } from './DashboardLayout.style';
import { Menu } from './Menu';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const user = useAppSelector((state) => state.store.user);
  const theme = useTheme();

  const { mutateSignOut } = useAuth();
  const { path } = useTitle();

  const logout = () => mutateSignOut();

  return (
    <HeaderContainer>
      <h1>{path}</h1>
      <p>{user?.fullName || 'User 1'}</p>

      <div onClick={() => setShowMenu((prevState) => !prevState)}>
        <Profile fill={theme.colors.black} />
      </div>

      {showMenu && <Menu logout={logout} user={user?.fullName} />}
    </HeaderContainer>
  );
};
