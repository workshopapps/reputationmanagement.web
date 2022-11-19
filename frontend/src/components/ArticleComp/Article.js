import React from "react";
import { ArticleComponent, IconContainer } from "./Article.styled";

function Article({ data }) {
  return (
    <ArticleComponent>
      <IconContainer> <img src={data.svg} /></IconContainer>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </ArticleComponent>
  );
}

export default Article;
