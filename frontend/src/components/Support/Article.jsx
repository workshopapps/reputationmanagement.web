import React from 'react'
import { StyledH3 } from '../Styles/Body/Text.styled'
import { article } from './data'
import { StyledArticle } from './Support.styled'


const Article = () => {
  return (
    <StyledArticle>

      <div className='article'>
        <div className="content flex justify-between">
          {article.map(({ icon, title, text }, i) => {
            return (
              <>
                <div className="testimonial md:px-3 w-full md:w-1/2 lg:w-1/3 ">
                  <div className="card">
                    <div className="">
                      <div className="">
                        <img src={icon} alt="icon" />
                        <StyledH3 className="">{title}</StyledH3>
                      </div>
                    </div>
                    <p className="">
                      {text}
                    </p>
                  </div>
                </div>
              </>
            )
          })}

        </div>
      </div>
    </StyledArticle>
  )
}

export default Article