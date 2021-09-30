import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import ArticleList from '../components/ArticleList';
import { server } from '../config';
import { useRecoilState } from 'recoil';
import { userDataState } from '../store/allStates';

const Home: NextPage = ({ articles }: any) => {
	const [data, setData] = useRecoilState(userDataState);

	useEffect(() => {
		setData(articles);
	}, []);
	console.log(data);
	return (
		<div>
			<Head>
				<title>This is our site title top of the website</title>
				<meta name="keywords" content="This is our site title top of the website" />
			</Head>
			<ArticleList articles={data} />
		</div>
	);
};

export default Home;

export const getStaticProps = async () => {
	const res = await fetch(`${server}/api/articles`);
	const articles = await res.json();

	return {
		props: {
			articles,
		},
	};
};
