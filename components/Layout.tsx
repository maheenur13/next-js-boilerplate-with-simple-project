import { FC } from 'react';
import style from '../styles/Layout.module.css';
import Navigation from '../components/Navigationbar';
import Header from './Header';
const Layout: FC = ({ children }) => {
	return (
		<>
		<Navigation />
		<div className={style.container}>
			
			<main className={style.main}>
				<Header />
				{children}</main>
		</div>
		</>
	);
};

export default Layout;
