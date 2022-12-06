import React from 'react';

import { article } from './data';
import { StyledArticle } from './Support.styled';

const Article = () => {
	return (
		<StyledArticle data-testid="article-element">
			<div className="article">
				<div className="content flex justify-between">
					{article.map(({ icon, title, text, link }, index) => {
						return (
							<div key={index}>
								<div className="testimonial md:px-3 w-full md:w-1/2 lg:w-1/3 ">
									<div className="card">
										<div className="">
											<div className="">
												<img src={icon} alt="icon" />
												<a href={link}>{title}</a>
											</div>
										</div>
										<p className="">{text}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</StyledArticle>
	);
};

export default Article;
