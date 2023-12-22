import React from 'react';

import { DefaultTheme } from 'styled-components';
import { Bag, Profile } from '../../Svg';
import { ROUTES } from '../../constants/ROUTES';
import {
  Arrow,
  ImageContainer,
  LinkContainer,
  SmNavContainer,
  StyledNavLink,
} from './Sidebar.style';

interface SmNavProps {
  setAppended: VoidFunction;
  theme: DefaultTheme;
}

const SmNav: React.FC<SmNavProps> = ({ setAppended, theme }) => (
  <SmNavContainer>
    <ImageContainer height="6vh" margin="144%">
      <Arrow sm="" onClick={setAppended}>
        <p>&#x3e;</p>
      </Arrow>
    </ImageContainer>
    <LinkContainer sm="44%">
      <StyledNavLink
        to={ROUTES.DASHBOARD}
        className={(navData: any) => (navData.isActive ? 'active' : '')}
        end
      >
        <Bag fill={theme.colors.black} />
      </StyledNavLink>
    </LinkContainer>
    <LinkContainer sm="44%">
      <StyledNavLink
        to={ROUTES.PROFILE_PAGE}
        className={(navData: any) => (navData.isActive ? 'active' : '')}
        end
      >
        <Profile fill={theme.colors.black} />
      </StyledNavLink>
    </LinkContainer>
  </SmNavContainer>
);

export default SmNav;
