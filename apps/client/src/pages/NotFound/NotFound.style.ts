import styled from 'styled-components';

import { Flex } from '../../Shared.style';

export const NfContainer = styled(Flex)`
  height: 35%;
  width: 35%;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.shine};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;

  h1 {
    font-size: 2.6rem;
  }

  a {
    text-decoration: none;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.shine};
    transition: all 0.4s;

    &:hover {
      color: ${({ theme }) => theme.colors.light};
    }
  }
`;
