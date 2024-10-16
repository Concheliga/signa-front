import searchIcon from "./img/search-icon.svg";
import "./css/tournamentListModule.css";
import { useState, useEffect } from "react";
import { fetchUserData } from "./api/tournaments-api";
import Tournaments from "./Components/Tournaments";

interface TournamentData {
    title: string;
    location: string;
    sportType: string;
    gender: string;
    startedAt: string;
    state: string;
}

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
        <main className="main">
            <h1 className="page-name">Список всех турниров</h1>
            <form className="tournament-form" id="tournament-form">
                <input type="text" className="tournament-form__input" id="tournament-form__input" placeholder="Искать"
                    required />
                <button className="tournament-form__btn" id="tournament-form__btn">
                    <img src={searchIcon} alt="Поиск" />
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
                    <Tournaments tournamentsData={tournamentsData}/>
                </tbody>
            </table>
        </main>
    );
};

export default TournamentListModule;