import Logo from "../../modules/logo/Logo";
import LeftSidebar from "../../modules/left-sidebar/Left-sidebar";
import Footer from "../../modules/footer/Footer";
import TournamentBracketModule from "../../modules/tournament-bracket-module/TournamentBracketModule";
import "../../ui/css/page.css";
import { fetchUserData } from "./api/tournament-page-api";
import { useState, useEffect } from "react";
import { TournamentData } from "../../interfaces/interfaces";
import style from "./css/tournament-page.module.css";


const TournamentPage: React.FC = () => {
    const [tournamentData, setTournamentData] = useState<TournamentData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchUserData(setTournamentData, setLoading, setError);
    }, []);

    if (loading) {
        return (
            <div className="body">
                <Logo />
                <div className="nav-main-container">
                    <LeftSidebar />
                    <main className="main">
                        <p className="loading">Загрузка данных...</p>
                    </main>
                    <div className="helper"></div>
                </div>
                <Footer />
            </div >
        );
    }

    if (error) {
        return (
            <div className="body">
                <Logo />
                <div className="nav-main-container">
                    <LeftSidebar />
                    <main className="main">
                        <p className="error">{error}</p>
                    </main>
                    <div className="helper"></div>
                </div>
                <Footer />
            </div >
        );
    }

    return (
        <div className="body">
            <Logo />
            <div className="nav-main-container">
                <LeftSidebar />
                <main className={style.main}>
                    <h1 className={style['page-name']}>{tournamentData?.title || ''}</h1>
                    <ul className={style.tabs}>
                        <li className={style.active}><a href="#">Основная информация</a></li>
                        <li><a href="#">Участники</a></li>
                        <li><a href="#">Турнирная сетка</a></li>
                        <li><a href="#">Результаты турнира</a></li>
                    </ul>
                    <TournamentBracketModule />
                </main>
                <div className="helper"></div>
            </div>
            <Footer />
        </div>
    );
};

export default TournamentPage;