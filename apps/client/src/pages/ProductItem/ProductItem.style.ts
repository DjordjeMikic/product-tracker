import styled from 'styled-components';

import { Container, Flex } from '../../Shared.style';

export const ProductContainer = styled(Container)`
  height: 86vh;
  margin-top: 1%;
`;

export const ImageContainer = styled.div`
  height: 34%;
  width: 100%;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 9px;
  }
`;

export const Row = styled(Flex)`
  height: 9%;
  width: 100%;
  justify-content: space-between !important;
  margin-top: 2%;

  h1 {
    margin-bottom: 4%;
  }

  p {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const ProductNameContainer = styled(Flex)`
  align-items: flex-start;
  flex-direction: column;
`;

export const DataContainer = styled(Flex)`
  height: 100%;
  justify-content: space-between !important;
  flex: 0 0 62%;
  border-radius: 9px;
  padding: 9px;
  background-color: ${({ theme }) => theme.colors.light};
`;

export const Property = styled(Flex)`
  height: 100%;
  padding: 0 16px;

  h4 {
    padding-left: 6px;
  }

  svg {
    height: 62%;
    opacity: 0.6;
  }
`;

export const LinksContainer = styled(Flex)`
  gap: 6px;
`;

export const BtnBox = styled(Flex)<{ bgColor: string }>`
  height: 41px;
  width: 41px;
  border-radius: 9px;
  cursor: pointer;
  background-color: ${({ bgColor }) => bgColor};
`;

export const Desc = styled.p`
  width: 100%;
  text-align: left;
  color: ${({ theme }) => theme.colors.metal};
  margin-top: 4%;
`;
