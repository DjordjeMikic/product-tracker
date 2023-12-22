import styled from 'styled-components';
import { Flex } from '../../Shared.style';

export const AddProductContainer = styled(Flex)`
  height: 9%;
  width: 100%;
  align-items: flex-start !important;
  justify-content: space-between !important;
`;

export const AddBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 14%;
  font-size: 1rem;
  border: none;
  outline: none;
  border-radius: 9px;
  padding: 5px 19px;
  color: ${({ theme }) => theme.colors.shine};
  background-color: ${({ theme }) => theme.colors.blue};
  margin-top: 4px;

  p {
    font-size: 1.75rem;
    margin-right: 8%;
  }

  a {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.shine};
  }
`;
