import "./css/footer.css";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <ul className="footer__list">
                <li className="footer__list__element"><a href="#">Главная</a></li>
                <li className="footer__list__element"><a href="#">Турниры</a></li>
                <li className="footer__list__element"><a href="#">Статистика</a></li>
                <li className="footer__list__element"><a href="#">Написать в поддержку</a></li>
            </ul>
        </footer>
    );
};

export default Footer;