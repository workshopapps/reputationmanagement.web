import styled from "styled-components";

const IntroTitle = styled.p`
  font-family: Lato;
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  margin-bottom: 4px;
  color: #2b2c34;

  @media (min-width: 992px) {
    font-family: Lato;
    font-size: 45px;
    font-weight: 700;
    line-height: 68px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 16px;
  }
`;

export default IntroTitle;
