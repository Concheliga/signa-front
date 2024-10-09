import "./css/footer.css";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <ul className="footer__list">
                <li className="footer__list__element">Главная</li>
                <li className="footer__list__element">Турниры</li>
                <li className="footer__list__element">Статистика</li>
                <li className="footer__list__element">Написать в поддержку</li>
            </ul>
        </footer>
    );
};

export default Footer;