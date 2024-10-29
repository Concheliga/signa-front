import styles from "./css/logo.module.css";
import logo from './img/logoSportUrfu.png';

const Logo: React.FC = () => {
    return (
        <header className={styles.logo}>
            <a href="#">
                <img src={logo} alt="Логотип Спорт УрФУ" />
                <p className={styles.logo__text}>СПОРТ УРФУ</p>
            </a>
        </header>
    );
};

export default Logo;