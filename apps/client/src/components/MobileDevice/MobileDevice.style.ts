import styled from 'styled-components';

import { Flex } from '../../Shared.style';

export const MobileDeviceContainer = styled(Flex)`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.light};

  h1 {
    text-align: center;
  }
`;
