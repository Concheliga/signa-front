import "./css/main-tournament-info.css";
import orgAvatar from "./img/org-avatar.svg";

const MainTournamentInfo: React.FC = () => {
    return (
        <main className="main">
            <h1 className="page-name">Название турнира</h1>
            <ul className="tabs">
                <li className="tab active"><a href="#" className="tab-link">Основная информация</a></li>
                <li className="tab"><a href="#" className="tab-link">Участники</a></li>
                <li className="tab"><a href="#" className="tab-link">Турнирная сетка</a></li>
                <li className="tab"><a href="#" className="tab-link">Результаты турнира</a></li>
            </ul>
            <form className="tournament-info-form">
                <ul className="left-fields">
                    <li className="field">
                        <label htmlFor="first-name">Вид спорта</label>
                        <input className="field__input" type="text" name="first-name" id="first-name" value="Баскетбол" disabled/>
                    </li>
                    <li className="field">
                        <label htmlFor="patronymic">Участники</label>
                        <input className="field__input" type="text" name="patronymic" id="patronymic" value="12/15" disabled/>
                    </li>
                    <li className="field">
                        <label htmlFor="past-name">Пол</label>
                        <input className="field__input" type="text" name="past-name" id="past-name" value="Мужчины" disabled/>
                    </li>
                </ul>
                <ul className="right-fields">
                    <li className="field">
                        <label htmlFor="gender">Дата проведения</label>
                        <input className="field__input" type="text" name="gender" id="gender" value="25.10.2024-30.10.2024" disabled/>
                    </li>
                    <li className="field">
                        <label htmlFor="group">Место проведения</label>
                        <input className="field__input" type="text" name="group" id="group" value="Стадион" disabled/>
                    </li>
                    <li className="field org">
                        <img src={orgAvatar} alt="Фото организатора" className="org_img"/>
                            <div className="org_info">
                                <p className="status">Организатор</p>
                                <p className="name">Алексеев Алексей Алексеевич</p>
                            </div>
                    </li>
                </ul>
            </form>
            <ul className="buttons">
                <li className="button"><button>Зарегистрироваться</button></li>
                <li className="button"><button>Ссылка на беседу ВК</button></li>
                <li className="button"><button>Связаться с организатором</button></li>
                <li className="button"><button>Регламент</button></li>
            </ul>
        </main>
    );
};

export default MainTournamentInfo;