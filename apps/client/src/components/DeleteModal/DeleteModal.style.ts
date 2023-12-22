import styled from 'styled-components';

import { Flex } from '../../Shared.style';

export const DeleteModalContainer = styled(Flex)`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99999999;
`;

export const DeleteModalContent = styled(Flex)`
  width: 35%;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border-radius: 9px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ButtonsContainer = styled(Flex)`
  width: 75%;
  gap: 9%;
`;

export const Btn = styled.button<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 14%;
  gap: 6px;
  font-size: 1rem;
  border: none;
  outline: none;
  border-radius: 9px;
  padding: 5px 19px;
  color: ${({ theme }) => theme.colors.shine};
  background-color: ${({ color }) => color};
  cursor: pointer;
  margin-top: 4px;
  transition: all 0.4s;

  &:hover {
    opacity: 0.75;
  }
`;
