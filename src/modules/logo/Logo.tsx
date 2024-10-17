import "./css/logo.css";
import logo from './img/logoSportUrfu.png';

const Logo: React.FC = () => {
    return (
        <header className="logo">
            <a href="#">
                <img className="logo__img" src={logo} alt="Логотип Спорт УрФУ" />
                <p className="logo__text">СПОРТ УРФУ</p>
            </a>
        </header>
    );
};

export default Logo;