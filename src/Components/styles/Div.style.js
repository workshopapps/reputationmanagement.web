import styled from "styled-components";

const Div = styled.div`
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
 & #steps_with_button {
    padding-top: 24px;
    padding-left: 24px;
    padding-bottom: 16px;
    padding-right: 25px;
  
  }
 & .card-hwfi {
    padding: 32px;
    gap: 8px;
    border: 0;
    background: #ffffff;
    border-radius: 12px;
    position: relative;
  }

  @media (min-width: 2560px) {
    max-width: 1320px;
    margin-right: auto !important;
    margin-left: auto !important;
    text-align: center!important;
}
  }
`;

export default Div;
