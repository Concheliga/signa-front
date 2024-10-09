import avatar from "./img/avatar.svg";
import "./css/profile-module.css";

const ProfileModule: React.FC = () => {
    return (
        <main className="main">
            <h1 className="page-name">Профиль участника</h1>
            <div className="user">
                <img src={avatar} alt="Аватарка" className="user__avatar" />
                <p className="user__full-name">Иван Иванович Иванов</p>
            </div>
            <form className="form">
                <ul className="left-fields">
                    <li className="field">
                        <label htmlFor="first-name">Имя</label>
                        <input className="field__input" type="text" name="first-name" id="first-name" value="Иван" disabled />
                    </li>
                    <li className="field">
                        <label htmlFor="patronymic">Отчество</label>
                        <input className="field__input" type="text" name="patronymic" id="patronymic" value="Иванович" disabled />
                    </li>
                    <li className="field">
                        <label htmlFor="past-name">Фамилия</label>
                        <input className="field__input" type="text" name="past-name" id="past-name" value="Иванов" disabled />
                    </li>
                </ul>
                <ul className="right-fields">
                    <li className="field">
                        <label htmlFor="gender">Пол</label>
                        <input className="field__input" type="text" name="gender" id="gender" value="Мужской" disabled />
                    </li>
                    <li className="field">
                        <label htmlFor="group">Группа</label>
                        <input className="field__input" type="text" name="group" id="group" value="РИ-320940" disabled />
                    </li>
                    <li className="field">
                        <label htmlFor="link">Ссылка на ВК</label>
                        <input className="field__input" type="url" name="link" id="link" value="vk.com/545455" disabled />
                    </li>
                </ul>
            </form>
        </main>
    );
};

export default ProfileModule;