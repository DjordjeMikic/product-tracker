import styled from 'styled-components';

import { Flex } from '../../../Shared.style';

export const DashboardLayoutContainer = styled(Flex)`
  height: 100vh;
  width: 100%;
  justify-content: flex-start !important;
  background-color: ${({ theme }) => theme.colors.lightness};
  position: relative;
`;

export const MainContent = styled(Flex)`
  height: 100%;
  width: 100%;
  justify-content: flex-start !important;
  flex-direction: column;
  padding: 2.4rem 2rem;
  position: relative;
`;

export const HeaderContainer = styled.header`
  height: 9vh;
  width: 100%;
  display: flex;
  align-items: flex-start !important;
  justify-content: space-between !important;
  position: relative;

  svg {
    height: 44px;
    width: 44px;
    cursor: pointer;
  }
`;

export const MenuContainer = styled(Flex)`
  height: auto;
  width: 26%;
  flex-direction: column;
  padding: 9px 2px 2px 2px;
  border-radius: 9px;
  background-color: ${({ theme }) => theme.colors.light};
  position: absolute;
  right: 0;
  transform: translateY(9vh);
  z-index: 9;

  h3 {
    align-self: flex-end;
    margin: 0 2% 2% 0;
  }
`;

export const Line = styled(Flex)`
  width: 100%;
  font-size: 1.2rem;
  padding: 9px 0;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.metal};
  border-radius: 9px;
  background-color: ${({ theme }) => theme.colors.shine};
`;
