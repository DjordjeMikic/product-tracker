import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import { Flex } from '../../Shared.style';

export const SideBarContainer = styled(Flex)`
  height: 100%;
  justify-content: flex-start !important;
  flex-direction: column;
  flex: 0 0 16%;
  padding: 2.4rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.shine};
  position: relative;

  a {
    width: 100%;

    & .active {
      color: blue;
    }
  }
`;

export const ImageContainer = styled(Flex)<{ height?: string; margin?: string }>`
  height: ${({ height }) => height};
  max-height: 9vh;
  width: 100%;
  margin-bottom: ${({ margin }) => margin};
  position: relative;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 9px;
  }
`;

export const Arrow = styled(Flex)<{ sm?: string }>`
  height: 28px;
  width: 28px;
  font-size: 1.1rem;
  border-radius: 50%;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.shine};
  background-color: ${({ theme }) => theme.colors.blue};
  position: absolute;
  top: ${({ sm }) => (sm ? '7%' : '50%')};
  right: 0;
  transform: translate(50%, -50%);
  z-index: 1;
  transition: all 0.4s;

  p {
    height: 100%;
    line-height: 26px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkBlue};
  }
`;

export const Desc = styled.p`
  width: 100%;
  font-size: 0.9rem;
  text-transform: uppercase;
  margin: 14% 0;
`;

export const LinkContainer = styled(Flex)<{ sm?: string }>`
  width: 100%;
  justify-content: flex-start !important;
  padding-bottom: ${({ sm }) => (sm ? sm : '14%')};
  position: relative;

  a {
    height: 100%;
    width: 100%;
    justify-content: flex-start !important;
    text-decoration: none;
    font-size: 1.1rem;
    opacity: 0.4;
    color: ${({ theme }) => theme.colors.black};
  }

  svg {
    height: 23px;
    width: 23px;
    object-fit: contain;
    margin-right: 4%;
  }
`;

export const SmNavContainer = styled(Flex)`
  height: 100vh;
  width: 44px;
  justify-content: flex-start !important;
  flex-direction: column;
  padding: 2.4rem 0;
  background-color: ${({ theme }) => theme.colors.shine};
  position: relative;

  a {
    justify-content: center !important;
  }
`;

export const CardContainer = styled(Flex)`
  min-height: 9vh;
  width: calc(100% - 3rem);
  align-items: flex-start !important;
  justify-content: space-evenly !important;
  flex-direction: column;
  border-radius: 9px;
  padding: 23px;
  color: ${({ theme }) => theme.colors.shine};
  background-color: ${({ theme }) => theme.colors.blue};
  position: absolute;
  left: 1.5rem;
  bottom: 2.4rem;

  p {
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.light};
  }
`;

export const Mail = styled.div`
  width: 100%;
  font-size: 0.9rem;
  background-color: ${({ theme }) => theme.colors.shine};
  color: ${({ theme }) => theme.colors.black};
  padding: 9px;
  border-radius: 9px;
  margin-top: 9%;

  a {
    height: 100%;
    width: 100%;
    display: block;
    font-size: clamp(0.4vw, 0.75vw, 1.4vw);
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
  }
`;

export const StyledNavLink = styled(NavLink)<{ active?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  &.active {
    opacity: 1 !important;
  }
`;
