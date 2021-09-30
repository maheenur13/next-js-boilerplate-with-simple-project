import { server } from '../../../config';
import Link from 'next/link';

const article = ({ article }: any) => {
	return (
		<div>
			<h3>{article[0].title}</h3>
			<p>{article[0].body}</p>
			<br />
			<Link href="/">Go back</Link>
		</div>
	);
};

export const getStaticProps = async (context: { params: { id: any } }) => {
	const res = await fetch(`${server}/api/articles/${context.params.id}`);
	const article = await res.json();

	return {
		props: {
			article,
		},
	};
};

export const getStaticPaths = async (context: { params: { id: any } }) => {
	const res = await fetch(`${server}/api/articles`);
	const articles = await res.json();

	const ids = articles.map((article: { id: any }) => article.id);

	const paths = ids.map((id: { toString: () => any }) => ({ params: { id: id.toString() } }));

	return {
		paths,
		fallback: false,
	};
};





// export const getStaticProps = async (context: { params: { id: any } }) => {
// 	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
// 	const article = await res.json();
// 	console.log('okay', article);

// 	return {
// 		props: {
// 			article,
// 		},
// 	};
// };

// export const getStaticPaths = async (context: { params: { id: any } }) => {
// 	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
// 	const articles = await res.json();

// 	const ids = articles.map((article: { id: any }) => article.id);

// 	const paths = ids.map((id: { toString: () => any }) => ({ params: { id: id.toString() } }));

// 	return {
// 		paths,
// 		fallback: false,
// 	};
// };

export default article;
