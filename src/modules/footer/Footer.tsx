import styles from  "./css/footer.module.css";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <ul className={styles.footer__list}>
                <li className={styles.footer__list__element}><a href="#">Главная</a></li>
                <li className={styles.footer__list__element}><a href="#">Турниры</a></li>
                <li className={styles.footer__list__element}><a href="#">Статистика</a></li>
                <li className={styles.footer__list__element}><a href="#">Написать в поддержку</a></li>
            </ul>
        </footer>
    );
};

export default Footer;