import styled from 'styled-components';
import { Flex } from '../../Shared.style';

export const InputContainer = styled.div<{
  width?: string;
  margin?: string;
  column?: string;
}>`
  width: ${({ width }) => width || '90%'};
  display: flex;
  align-items: flex-start !important;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  margin-top: ${({ margin }) => (margin ? margin : '2%')};
  position: relative;
`;

export const Label = styled.label`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.black};
`;

export const InputField = styled.input<{ bgColor?: string }>`
  width: 98%;
  font-size: 1rem;
  border: 1px solid ${({ color, theme }) => (color ? color : theme.colors.light)};
  border-radius: 9px;
  outline: none;
  padding: 11px;
  background-color: ${({ bgColor }) => bgColor || ''};
  margin-top: 4px;
  position: relative;
  transition: all 0.4s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.blue};
  }
`;

export const UnstyledContainer = styled(InputField)`
  border: none;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.blue};
  }
`;

export const Button = styled.button`
  width: 98%;
  font-size: 1rem;
  padding: 11px;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 9px;
  color: ${({ theme }) => theme.colors.shine};
  background-color: ${({ theme }) => theme.colors.blue};
  margin-top: 1%;
  transition: all 0.4s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkBlue};
  }
`;

export const CheckContainer = styled(InputContainer)`
  display: flex;
  justify-content: flex-start !important;
  flex: 0 0 35%;

  label {
    user-select: none;
    margin-left: 2%;
    margin-bottom: 1%;
  }

  input[type='checkbox'] {
    flex: 0 0 9%;
    margin-top: 2px;
    transform: scale(1.6, 1.6);
  }
`;

export const TableCheckContainer = styled.div`
  display: flex;
  flex: 0 0 100%;

  input[type='checkbox'] {
    flex: 0 0 9%;
    margin-top: 4px;
    transform: scale(1.6, 1.6);
  }
`;

export const TareaContainer = styled.textarea<{
  color?: string;
  bgColor?: string;
}>`
  width: 98%;
  font-size: 1rem;
  border: 1px solid ${({ color, theme }) => (color ? color : theme.colors.light)};
  border-radius: 9px;
  outline: none;
  padding: 11px;
  background-color: ${({ bgColor }) => bgColor || ''};
  margin-top: 4px;
  resize: none;
  position: relative;
  transition: all 0.4s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.blue};
  }
`;

export const SwitchContainer = styled.div<{ enabled: boolean }>`
  height: 28px;
  width: 52px;
  border-radius: 14px;
  background-color: ${({ enabled, theme }) =>
    enabled ? theme.colors.success : theme.colors.red};
  position: relative;
`;

export const Show = styled.div<{ enabled: boolean }>`
  height: 26px;
  width: 26px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.shine};
  margin: 0 !important;
  position: absolute;
  top: 1px;
  left: ${({ enabled }) => !enabled && '1px'};
  right: ${({ enabled }) => enabled && '1px'};
  z-index: 2;
`;

export const DiscountContainer = styled(Flex)<{ bgColor: string; color: string }>`
  border-radius: 9px;
  padding: 4px 11px;
  background-color: ${({ bgColor }) => bgColor && bgColor};
  color: ${({ color }) => color && color};
  position: relative;
`;
