import styled from "styled-components";

const Col = styled.div`
  flex: 0 0 auto;
  display: flex;
  width: 100%;

  @media (min-width: 992px) {
    flex: 0 0 auto;

    width: 50%;
  }
`;

export default Col;
