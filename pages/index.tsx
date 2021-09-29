import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import ArticleList from '../components/ArticleList';
import { server } from '../config';


const Home: NextPage = ({ articles }: any) => {
	return (
		<div>
			<Head>
				<title>This is our site title top of the website</title>
				<meta name="keywords" content="This is our site title top of the website" />
			</Head>
			<ArticleList articles={articles} />
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



// export const getStaticProps = async () => {
// 	const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
// 	const articles = await res.json();

// 	return {
// 		props: {
// 			articles,
// 		},
// 	};
// };
