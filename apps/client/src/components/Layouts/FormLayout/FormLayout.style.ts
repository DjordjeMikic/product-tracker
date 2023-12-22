import styled from 'styled-components';
import { Flex } from '../../../Shared.style';

export const FormLayoutContainer = styled(Flex)`
  height: 100vh;
  width: 100%;
  justify-content: flex-start !important;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 54px;
  background-repeat: no-repeat;
  position: relative;

  img {
    height: 100%;
    width: 49%;
    object-fit: contain;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
`;
