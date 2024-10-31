import styles from "./css/logo.module.css";
import logo from './img/logoSportUrfu.png';
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
    return (
        <header className={styles.logo}>
            <Link to="">
                <img src={logo} alt="Логотип Спорт УрФУ" />
                <p className={styles.logo__text}>СПОРТ УРФУ</p>
            </Link>
        </header>
    );
};

export default Logo;