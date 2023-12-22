import styled from 'styled-components';

import { Flex as SharedFlex } from '../../Shared.style';

export const FileDropContainer = styled(SharedFlex)<{ active?: string }>`
  height: 250px;
  width: 88%;
  flex-direction: column;
  border: 2px dashed ${({ theme }) => theme.colors.light};
  background-color: ${({ active, theme }) => active && theme.colors.success};
  color: ${({ active, theme }) => active && theme.colors.shine};
  border-radius: 9px;
  margin-right: 16px;
  margin-top: 2%;
  position: relative;
  transition: all 0.4s;

  div {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  img {
    height: 90%;
    width: 90%;
    object-fit: contain;
    z-index: 1;
  }
`;

export const RemoveBtn = styled.button`
  height: 35px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  line-height: 9;
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  position: absolute;
  top: 9px;
  right: 9px;
  z-index: 999999;
  transition: all 0.4s;

  &:hover {
    opacity: 0.75;
  }

  &:active {
    opacity: 1;
    transform: scale(0.75, 0.75);
  }
`;
