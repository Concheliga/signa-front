import { Link, useNavigate } from "react-router-dom";
import style from "./css/login.module.css";
import { useContext, useState } from "react";
import { Context } from "../../main";

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { store } = useContext(Context);
    const navigate = useNavigate();

    const onLoginClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void = async (e) => {
        e.preventDefault();

        try {
            await store.login(email, password);
            navigate('..');
        } catch(error) {
            console.error("Ошибка при отправке формы:", error);
            alert("Произошла ошибка при отправке формы.");
        }
    }

    return (
        <div className={style['body-container']}>
            <div className={style['login-container']}>
                <h2>Вход в аккаунт</h2>
                <form>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="Email" />
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Пароль" />
                    <button onClick={(e) => onLoginClick(e)}>Войти</button>
                    <p>Еще нет аккаунта? <Link to={'/registration'}>Зарегистрироваться</Link></p>
                </form>
            </div>
        </div>
    )
};

export default Login;