import searchIcon from "./img/search-icon.svg";
import style from "./css/tournamentListModule.module.css";
import { useState, useEffect } from "react";
import { fetchUserData } from "./api/tournaments-api";
import Tournaments from "./Components/Tournaments";
import { TournamentData } from "../../interfaces/interfaces";
import { Link } from "react-router-dom";

const TournamentListModule: React.FC = () => {
    const [tournamentsData, setTournamentsData] = useState<TournamentData[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchUserData(setTournamentsData, setLoading, setError);
    }, []);

    if (loading) {
        return <p>Загрузка данных...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <main className={style.main}>
            <h1 className={style["page-name"]}>Список всех турниров</h1>
            <form className={style["tournament-form"]} id="tournament-form">
                <input type="text" className={style["tournament-form__input"]} id="tournament-form__input" placeholder="Искать"
                    required />
                <button className={style.button} id="tournament-form__btn">
                    <img src={searchIcon} alt="Поиск" />
                </button>
            </form>
            <table className={style.table}>
                <thead>
                    <tr className={style.tr}>
                        <th className={style.th}>
                            <select className={style.select} id="sportSelect">
                                <option className={style.option} value="Теннис">Все виды спорта</option>
                                <option className={style.option} value="Волейбол">Волейбол</option>
                                <option className={style.option} value="Баскетбол">Баскетбол</option>
                                <option className={style.option} value="Футбол">Футбол</option>
                            </select>
                        </th>
                        <th className={style.th}>Турнир</th>
                        <th className={style.th}>Дата проведения</th>
                        <th className={style.th}>Место проведения</th>
                        <th className={style.th}>Пол</th>
                        <th className={style.th}>Статус</th>
                    </tr>
                </thead>
                <tbody>
                    <Tournaments tournamentsData={tournamentsData} />
                </tbody>
            </table>
        </main>
    );
};

export default TournamentListModule;