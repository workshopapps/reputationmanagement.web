<<<<<<< HEAD
import React from 'react';
import PageLayout from '../../../layout/PageLayout';
import ErrorPage from '../../ErrorPage';

const BlogSeeAll = () => {
	return <ErrorPage />;
=======
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
>>>>>>> 133da5892cc9ef2c91c0aa425ecb2c8c2ba948a1
};

export default BlogSeeAll;
