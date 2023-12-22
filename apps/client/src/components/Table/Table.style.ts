import styled from 'styled-components';

export const TableContainer = styled.table`
  max-height: 91vh;
  width: 100%;
  border-collapse: collapse;
  margin-top: 2%;
`;

export const TableHeaderContainer = styled.thead`
  height: 6%;
  width: 100%;
  color: ${({ theme }) => theme.colors.metal};
  background-color: ${({ theme }) => theme.colors.lightness};
`;

export const TableBodyContainer = styled.tbody<{ color?: string }>`
  height: 6%;
  max-height: 6%;
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ color }) => color};
`;

export const Tr = styled.tr<{ color?: string }>`
  height: 4%;
  width: 100%;
  background-color: ${({ color }) => color};
`;

export const TableField = styled.td<{ width?: string }>`
  width: ${({ width }) => width || '15.5%'};
  display: inline-flex;
  justify-content: flex-start !important;
  padding: 11px 0;
`;

export const OptionsContainer = styled(TableField)`
  width: 9%;
  color: ${({ theme }) => theme.colors.light};

  a,
  button {
    text-decoration: none;
    border: none;
    outline: none;
    background-color: inherit;
    padding-top: 2px;
    cursor: pointer;
    margin-right: 11%;
  }

  svg {
    opacity: 0.44;
    margin-right: 11%;
    transition: all 0.4s;

    &:hover {
      opacity: 1;
    }
  }
`;
