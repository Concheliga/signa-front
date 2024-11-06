import styles from  "./css/footer.module.css";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <ul className={styles.footer__list}>
                <li className={styles.footer__list__element}><Link to="home">Главная</Link></li>
                <li className={styles.footer__list__element}><Link to="tournaments">Турниры</Link></li>
                <li className={styles.footer__list__element}><Link to="statistic">Статистика</Link></li>
                <li className={styles.footer__list__element}><Link to="help">Написать в поддержку</Link></li>
            </ul>
        </footer>
    );
};

export default Footer;