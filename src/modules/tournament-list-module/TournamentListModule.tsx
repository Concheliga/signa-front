import searchIcon from "./img/search-icon.svg";
import "./css/tournamentListModule.css";

const TournamentListModule: React.FC = () => {
    return (
        <main className="main">
            <h1 className="page-name">Список всех турниров</h1>
            <form className="tournament-form" id="tournament-form">
                <input type="text" className="tournament-form__input" id="tournament-form__input" placeholder="Искать"
                    required/>
                <button className="tournament-form__btn" id="tournament-form__btn">
                    <img src={searchIcon} alt="Поиск"/>
                </button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>
                            <select id="sportSelect">
                                <option value="Теннис">Все виды спорта</option>
                                <option value="Волейбол">Волейбол</option>
                                <option value="Баскетбол">Баскетбол</option>
                                <option value="Футбол">Футбол</option>
                            </select>
                        </th>
                        <th>Турнир</th>
                        <th>Дата проведения</th>
                        <th>Место проведения</th>
                        <th>Пол</th>
                        <th>Статус</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Волейбол</td>
                        <td>Турнир "Лучшая подача в УрФУ" среди женщин</td>
                        <td>02.11.2024</td>
                        <td>ФОК</td>
                        <td>Женцины</td>
                        <td>Идет регистрация</td>
                        <td><button>Регистрация</button></td>
                    </tr>
                    <tr>
                        <td>Футбол</td>
                        <td>Любительская игра для начинающих и продвинутых</td>
                        <td>20.10.2024</td>
                        <td>Фонвизина 8</td>
                        <td>Смешанный</td>
                        <td>Завершен</td>
                    </tr>
                    <tr>
                        <td>Баскетбол</td>
                        <td>Чемпионат Свердловской области среди мужских команд</td>
                        <td>25.10.2024 - 30.10.2024</td>
                        <td>Стадион</td>
                        <td>Мужчины</td>
                        <td>Идет регистрация</td>
                        <td><button>Регистрация</button></td>
                    </tr>
                </tbody>
            </table>
        </main>
    );
};

export default TournamentListModule;