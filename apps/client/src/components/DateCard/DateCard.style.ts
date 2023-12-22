import styled from 'styled-components';

import { Flex } from '../../Shared.style';

export const DateCardContainer = styled(Flex)`
  height: 127px;
  width: 88%;
  flex-direction: column;
  border-radius: 9px;
  padding: 2.6rem 1.4rem;
  background-color: ${({ theme }) => theme.colors.lightness};
  margin-top: 4%;
  position: relative;

  p {
    font-size: 0.9rem;
  }

  .flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between !important;
    margin: 2% 0;
  }
`;
