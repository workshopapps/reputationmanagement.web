import React, { useState } from 'react';
import PageLayout from '../../../layout/PageLayout';
import PostSnippet from '../../../components/Blog/PostSnippet';
import { PostSnippetContainer } from './BlogSeeAll.styled';
import Search from '../../../components/Blog/Search';

import { PostsData } from './data';

const BlogSeeAll = () => {
	const [search, setSearch] = useState('');
	const searchPostHandler = (e) => {
		setSearch(e.target.value);
	};

	return (
		<PageLayout>
			<section>
				<Search onchange={searchPostHandler} />
				<PostSnippetContainer>
					{PostsData.filter((post) => {
						return search.toLowerCase().trim() === ''
							? post
							: post.title.toLowerCase().trim().includes(search);
					}).map((post) => (
						<PostSnippet
							img={post.image}
							title={post.title}
							subtitle={post.subtitle}
							key={post.id}
						/>
					))}
				</PostSnippetContainer>
			</section>
		</PageLayout>
	);
};

export default BlogSeeAll;
