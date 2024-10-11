import "./css/logo.css";
import logo from './img/logoSportUrfu.png';

const Logo: React.FC = () => {
    return (
        <header className="logo">
            <img className="logo__img" src={logo} alt="Логотип Спорт УрФУ" />
            <p className="logo__text">СПОРТ УРФУ</p>
        </header>
    );
};

export default Logo;