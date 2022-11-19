import styled from "styled-components";

const PositionRelative = styled.div`
  position: relative;
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y:0;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
`;

export default PositionRelative;
