import styled from "styled-components";

const ArticleComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 10.7rem;
  border-radius: 4px;
  border: 1px solid #d2d3d4;
  color: #2b2c34;
  
  h1 {
    font-size: 1.2rem;
    line-height: 2rem;
    margin-left: 21px;
  }

  p {
    font-size: 0.8rem;
    color: rgba(43, 44, 52, 0.5);
    margin-left: 21px;
  }
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 56px;
  height: 56px;
  filter: drop-shadow(4px 4px 8px rgba(120, 122, 125, 0.08));
  background: #fff4eb;
  margin-left: 21px;
  border-radius: 50%;
`;

export { ArticleComponent, IconContainer };
