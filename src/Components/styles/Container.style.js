import styled from "styled-components";

const Container = styled.div`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 2560px) {
    max-width: 1320px;
    margin-right: auto !important;
    margin-left: auto !important;
    text-align: center!important;
}
  }
`;

export default Container;
