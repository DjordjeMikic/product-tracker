import styled from 'styled-components';

export const FormContainer = styled.div`
  height: 100%;
  width: 62%;
  display: flex;
  align-items: flex-start !important;
  justify-content: flex-end !important;
  flex-direction: column;
  padding: 2rem 4rem;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.shine};
  position: relative;
`;

export const ImageContainer = styled.div`
  height: 12%;
  width: 35%;
  position: absolute;
  top: 2rem;
  left: 4rem;

  #img {
    height: 100%;
    width: 100%;
    object-fit: cover !important;
    border-radius: 10px;
  }
`;

export const FormEl = styled.div`
  height: 89%;
  width: 80%;
  padding: 26px 0;
  margin-top: 4%;
  position: relative;

  h1 {
    font-size: 2.4rem;
  }
`;

export const MainForm = styled.form`
  height: 80%;
  width: 100%;
  padding: 27px 0;
`;

export const Secondary = styled.h4`
  font-weight: 300;
  color: #999;
`;

export const FormFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start !important;
  justify-content: space-between !important;
  flex-direction: column;
  font-size: 0.9rem;
  position: absolute;
  bottom: 0;
`;

export const FooterText = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.metal};
  letter-spacing: 1px;
`;
