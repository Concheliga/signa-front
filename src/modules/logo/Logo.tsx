import styles from "./css/logo.module.css";
import logo from './img/logoSportUrfu.png';
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

const Logo: React.FC = () => {

    return (
        <header className={styles.logo}>
            <div>
                <Link to="">
                    <img src={logo} alt="Логотип Спорт УрФУ" />
                    <p className={styles.logo__text}>СПОРТ УРФУ</p>
                </Link>
            </div>
            <div className={styles.auth}>
                <Link to="login"><div className="login">Вход</div></Link>
                <Link to="registration"><div className="registration">Регистрация</div></Link>
            </div>

        </header>
    );
};

export default observer(Logo);