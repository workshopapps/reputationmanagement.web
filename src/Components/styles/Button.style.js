import styled from "styled-components";

const Button = styled.button`
  & .learn-more {
    background: #233ba9 !important;
    border-radius: 4px;
    font-family: Lato;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 21px;
    padding: 6px 24px;
    text-align: center;
    color: white;
  }

  @media only screen and (min-width: 992px) {
    & .learn-more {
      background: #233ba9 !important;
      border-radius: 4px;
      font-family: Lato;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 24px;
      padding: 16px 24px;
      text-align: left;
    }
  }
`;

export default Button;
