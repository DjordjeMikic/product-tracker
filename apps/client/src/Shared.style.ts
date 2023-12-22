import styled from 'styled-components';

export const PasswordContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 6px;

  input {
    flex: 0 0 44%;
  }
`;

export const OtherOption = styled.p`
  font-size: 0.9rem;
  margin-top: 2%;

  a {
    text-decoration: none;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.blue};

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Forgot = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.black};
  margin-top: 1.8%;
  margin-right: 1.75%;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled(Flex)`
  height: 91vh;
  width: 100%;
  justify-content: flex-start !important;
  flex-direction: column;
  border-radius: 9px;
  padding: 1.75rem;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
`;

// Product pages styles

export const AddContainer = styled(Container).attrs({
  as: 'form',
})`
  align-items: flex-start !important;
  flex-direction: row;
`;

export const Left = styled(Flex)`
  flex: 0 0 67%;
  flex-direction: column;
`;

export const Right = styled.div`
  flex: 0 0 33%;

  div {
    margin: 4% 0;
  }
`;

export const FlexProduct = styled(Flex)`
  width: 90%;
  justify-content: space-between !important;
  gap: 16px;
`;

export const Btn = styled.button`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 11px;
  border-radius: 9px;
  color: ${({ theme }) => theme.colors.shine};
  background-color: ${({ theme }) => theme.colors.blue};
  margin-top: 11%;
  transition: all 0.4s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkBlue};
  }

  p {
    padding-top: 4px;
  }

  svg {
    margin-right: 4%;
  }
`;
