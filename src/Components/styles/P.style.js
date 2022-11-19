import styled from "styled-components";

const P = styled.p`
& .hwfi-title {
    font-family: Lato;
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: center;
    color: #233ba9;
    margin-bottom: 0;
  }
  & .hwfi-subtitle {
    font-family: Lato;
    font-size: 22px;
    font-weight: 600;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 8px;
  }
  & .hwfi-card-text {
    font-family: Lato;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
  }
  & .hwfi-card-title {
    font-family: Lato;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 8px;
  }

  @media (min-width: 2560px) {
    max-width: 1320px;
    margin-right: auto !important;
    margin-left: auto !important;
    text-align: center!important;
}
  }
`;

export default P;
