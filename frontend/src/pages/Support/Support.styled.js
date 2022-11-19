import styled from "styled-components";
import Background from "../../assets/support-background.png";

const SupportWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  height: 25.6rem;
  background: #eef1fc;
  border-radius: 8px;
  ${"" /* width: 50vw; */}
`;
const SearchContainer = styled.div`
  width: 50vw;
  height: 4.25rem;
  border: 1px solid #d8eff4;
  /* padding: 1rem; */
  color: rgba(43, 44, 52, 0.3);
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    background: #fff;
    border: transparent;
    margin: 1rem;
    /* height: 100%; */
    &:focus {
      outline: none;
    }
  }
  button {
    height: 3rem;
    width: 8.125rem;
    color: white;
    margin: 1rem;
    background: #233ba9;
    border: none;
    border-radius: 4px;
    &:hover {
      cursor: pointer;
    }
  }
`;
const HeaderComponent = styled.div`
  font-size: 57px;
  font-weight: 800;
  line-height: 68px;
  letter-spacing: 0.04em;
  text-align: left;
  margin: 12px;
  ${"" /* width: 50vw; */}
`;
const Input = styled.input`
  background: #fff;
  border: none;
`;

const HeaderWrapper = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 60px;
  margin-top: 6rem;
  text-align: center;
  color: #2b2c34;
`;
const ArticleContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);
  ${"" /* margin-top: 3.6875rem; */}
  flex-wrap: wrap;
  width: 70vw;
  margin: 2.5rem;
  margin-bottom: 6.4rem;
`;

const ArticleComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 21px;
  height: 10.7rem;
  border-radius: 4px;
  gap: 10px;
  border: 1px solid #d2d3d4;
`;

const QuestionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-size: 10000px;
  background: url(${Background}) #eef1fc;
  height: 21.4rem;
  text-align: center;
`;
const QuestionParent = styled.div`
  display: flex;
  flex-direction: row;
  width: 50vw;
  justify-content: space-evenly;
`;
const QuestionChild = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 50vw; */
  justify-content: space-evenly;
`;

const Content = styled.div`
  width: 36vw;
  color: #6f7174;
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 88px;
  height: 88px;
  filter: drop-shadow(4px 4px 8px rgba(120, 122, 125, 0.08));
  flex: none;
  order: 0;
  flex-grow: 0;
  background: #fff4eb;
  border-radius: 50%;
`;

export {
  SupportWrapper,
  ArticleWrapper,
  SearchWrapper,
  SearchContainer,
  HeaderComponent,
  HeaderWrapper,
  ArticleComponent,
  ArticleContainer,
  QuestionsWrapper,
  Content,
  IconContainer,
  Input,
  QuestionParent,
  QuestionChild,
};
