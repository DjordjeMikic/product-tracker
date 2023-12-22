import styled from 'styled-components';

import { Flex } from '../../Shared.style';

export const Container = styled(Flex)`
  height: 91vh;
  width: 100%;
  justify-content: flex-start !important;
  flex-direction: column;
  border-radius: 9px;
  padding: 1.75rem;
  background-color: ${({ theme }) => theme.colors.white};
  overflow-y: auto;
  position: relative;
`;
