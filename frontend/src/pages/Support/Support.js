import React from "react";
import { SupportData } from "./Support.data";
import { ReactComponent as Message } from "../../assets/message-2.svg";
import { ReactComponent as Call } from "../../assets/call.svg";

import {
  SupportWrapper,
  ArticleWrapper,
  SearchWrapper,
  SearchContainer,
  HeaderComponent,
  HeaderWrapper,
  ArticleContainer,
  QuestionsWrapper,
  Content,
  IconContainer,
  QuestionParent,
  QuestionChild,
} from "./Support.styled";
import Article from "../../components/ArticleComp/Article";

function Support() {
  return (
    <SupportWrapper>
      <SearchWrapper>
        <HeaderComponent>Hi, how can we help you?</HeaderComponent>
        <Content>
          Ask a question or describe the problem you are having, an we will
          respond to you shortly and swiftly.
        </Content>

        <SearchContainer>
          <input placeholder="Search for articles" />
          <button>Search</button>
        </SearchContainer>
      </SearchWrapper>
      <ArticleWrapper>
        <HeaderWrapper>Popular Articles</HeaderWrapper>
        <ArticleContainer>
          {SupportData.map((item) => (
            <Article data={item} />
          ))}
        </ArticleContainer>
      </ArticleWrapper>

      <QuestionsWrapper>
        <HeaderWrapper>Still Got a question?</HeaderWrapper>
        <Content>
          Always send us a message, we will get back to you shortly, Always send
          us a message , we will get back to you shortly.
        </Content>
        <QuestionParent>
          <QuestionChild>
            <IconContainer>
              <Message />
            </IconContainer>
          </QuestionChild>

          <QuestionChild>
            <IconContainer>
              <Call />
            </IconContainer>
            <h1>Live Chat</h1>
            <p>Get a one -on-one support now</p>
          </QuestionChild>
        </QuestionParent>

      </QuestionsWrapper>
    </SupportWrapper>
  );
}

export default Support;
