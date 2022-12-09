import React from 'react';
import styled from 'styled-components';
import Search from '../../components/Blog/Search';
import Hero from '../../components/Blog/Hero';
import PostSnippet from '../../components/Blog/PostSnippet';
import PageLayout from '../../layout/PageLayout';

import Filter from '../../components/Blog/filter';
import Footer from '../../components/Blog/footer';
//import Pagination from '../../components/Blog/pagination';
import { useEffect, useState, useCallback } from 'react';
//import DataBlog from './data';
import Pagination from '../../components/Blog/pagination';
import { ApiPrivate } from '../../api/axios';
import useAppContext from '../../hooks/useAppContext';

const StyledPostSnippet = styled.div`
	width: 100%;
	display: grid;
	gap: 1.5rem;
	grid-template-columns: repeat(3, 1fr);

	@media (max-width: 1200px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 520px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const StyledPostMain = styled.div`
	display: flex;
	//justify-content: center;
	position: relative;
	//background-color: black;
	margin-left: 64px;
	margin-right: 64px;

	@media (max-width: 850px) {
		margin-left: 34px;
		margin-right: 34px;
		flex-direction: column;
	}

	@media (max-width: 520px) {
		margin-left: 20px;
		margin-right: 20px;
	}
`;
const StyledFilter = styled.div`
	margin-right: 32px;

	@media (max-width: 850px) {
		margin-right: 0px;
	}
`;

const Blog = () => {
	const { item, setItem } = useAppContext();

	const fetchAllBlog = useCallback(async () => {
		try {
			const response = await ApiPrivate.get(
				'/blogging?pageNumber=0&pageSize=10'
			);
			setItem(response?.data);
		} catch (err) {
			console.log(err);
		}
	}, [setItem]);

	useEffect(() => {
		fetchAllBlog();
	}, [fetchAllBlog]);

	//Filter Topics////////////////////////////
	const menuItems = [...new Set(item.map((data) => data.tag))];

	const filterItem = (curcat) => {
		const newItem = item.filter((newVal) => {
			return newVal.tag === curcat;
		});
		setItem(newItem);
	};

	// Pagination//////////////////////
	const [currentPage, setCurrentPage] = useState(1);
	const [recordsPerPage] = useState(6);
	const indexOfLastRecord = currentPage * recordsPerPage;
	const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
	const currentRecords = item.slice(indexOfFirstRecord, indexOfLastRecord);
	const nPages = Math.ceil(item.length / recordsPerPage);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<section>
			<PageLayout>
				<div style={{ maxWidth: '1540px', margin: '0 auto' }}>
					<Hero />
					<Search />
					<StyledPostMain>
						<StyledFilter>
							<Filter
								filterItem={filterItem}
								setItem={setItem}
								menuItems={menuItems}
							/>
						</StyledFilter>

						<StyledPostSnippet>
							<PostSnippet item={currentRecords} />
						</StyledPostSnippet>
					</StyledPostMain>

					<Pagination
						nPages={nPages}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
				</div>
				<Footer />
			</PageLayout>
		</section>
	);
};

export default Blog;
