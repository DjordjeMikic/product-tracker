import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useTheme } from 'styled-components';
import { Bag, Profile } from '../../Svg';
import { ROUTES } from '../../constants/ROUTES';
import { Card } from './Card';
import {
  Arrow,
  Desc,
  ImageContainer,
  LinkContainer,
  SideBarContainer,
  StyledNavLink,
} from './Sidebar.style';
import SmNav from './SmNav';

export const Sidebar = () => {
  const [appended, setAppended] = useState(false);
  const theme = useTheme();

  if (!appended) return <SmNav setAppended={() => setAppended(true)} theme={theme} />;

  return (
    <SideBarContainer className="flex column">
      <Link to={ROUTES.DASHBOARD}>
        <ImageContainer height="9vh">
          <img src="/logo.png" alt="Banner" />
        </ImageContainer>
      </Link>
      <Arrow sm={appended ? 'true' : ''} onClick={() => setAppended(false)}>
        <p>&#x3c;</p>
      </Arrow>

      <Desc>Pages</Desc>

      <LinkContainer>
        <StyledNavLink
          to={ROUTES.DASHBOARD}
          className={({ isActive }) => (isActive ? 'active' : '')}
          end
        >
          <Bag fill={theme.colors.black} />
          Products
        </StyledNavLink>
      </LinkContainer>

      <LinkContainer>
        <StyledNavLink
          to={ROUTES.PROFILE_PAGE}
          className={({ isActive }) => (isActive ? 'active' : '')}
          end
        >
          <Profile fill={theme.colors.black} />
          Profile
        </StyledNavLink>
      </LinkContainer>

      <Card />
    </SideBarContainer>
  );
};
