import { Key } from 'react';
import styles from '../styles/Article.module.css';
import ArticleItem from './ArticleItem';

const ArticleList = ({ articles }: any) => {
	return (
		<div className={styles.gird}>
			{articles.map((article: { id: Key | null | undefined }) => (
				<ArticleItem key={article.id} article={article} />
			))}
		</div>
	);
};

export default ArticleList;
