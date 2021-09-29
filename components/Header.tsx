import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <h1 className={styles.title}>Web Dev <span>News</span> </h1>
            <p className={styles.description}>Keep up to date with us for getting updated teach news</p>
        </div>
    );
};

export default Header;