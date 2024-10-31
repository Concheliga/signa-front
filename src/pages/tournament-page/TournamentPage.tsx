import { fetchUserData } from "./api/tournament-page-api";
import { useState, useEffect } from "react";
import { TournamentData } from "../../interfaces/interfaces";
import style from "./css/tournament-page.module.css";
import { NavLink, Outlet } from "react-router-dom";


const TournamentPage: React.FC = () => {
    const [tournamentData, setTournamentData] = useState<TournamentData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchUserData(setTournamentData, setLoading, setError);
    }, []);

    if (loading) {
        return (
            <main className="main">
                <p className="loading">Загрузка данных...</p>
            </main>
        );
    }

    if (error) {
        return (
            <main className="main">
                <p className="error">{error}</p>
            </main>
        );
    }

    return (
        <main className={style.main}>
            <h1 className={style['page-name']}>{tournamentData?.title || ''}</h1>
            <ul className={style.tabs}>
                <li><NavLink to={`/tournament/info`}>Основная информация</NavLink></li>
                <li><NavLink to={`/tournament/members`}>Участники</NavLink></li>
                <li><NavLink to={`/tournament/bracket`}>Турнирная сетка</NavLink></li>
                <li><NavLink to={`/tournament/result`}>Результаты турнира</NavLink></li>
            </ul>
            <Outlet />
        </main>
    );
};

export default TournamentPage;