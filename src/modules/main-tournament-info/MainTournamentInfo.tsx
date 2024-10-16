import "./css/main-tournament-info.css";
import orgAvatar from "./img/org-avatar.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";

interface UserData {
    firstName: string;
    lastName: string;
    patronymic: string;
    gender: string;
    groupNumber: string;
    vkLink: string;
}

interface TeamData {
    title: string;
    captain: UserData;
    members: UserData[];
}

interface MatchData {
    id: string;
    nextMatchId: string;
    teamIds: string;
}

interface TournamentData {
    title: string;
    location: string;
    sportType: string;
    gender: string;
    startedAt: string;
    state: string;
    maxTeamsCount: string;
    regulationLink: string;
    chatLink: string;
    teams: TeamData[];
    matches: MatchData[];
    organizers: UserData[];
    currentMembersCount: number;
}

const MainTournamentInfo: React.FC = () => {
    const [tournamentData, setTournamentData] = useState<TournamentData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                //после tournament/ должен быть id tournamenta
                const response = await axios.get<TournamentData>('https://localhost:7127/tournament/d867bc9b-552b-4862-9136-5330b0b413fe');
                const response2 = await axios.get<TournamentData>('https://localhost:7127/tournament/d867bc9b-552b-4862-9136-5330b0b413fe/matches');
                setTournamentData(response.data);
                console.log(response2.data)
                setLoading(false);
            } catch (err) {
                setError('Ошибка при загрузке данных пользователя.');
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) {
        return <p>Загрузка данных...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <main className="main">
            <h1 className="page-name">{tournamentData?.title || ''}</h1>
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
                        <input className="field__input" type="text" name="first-name" id="first-name" value={tournamentData?.sportType || ''} disabled />
                    </li>
                    <li className="field">
                        <label htmlFor="patronymic">Участники</label>
                        <input className="field__input" type="text" name="patronymic" id="patronymic" value={tournamentData?.currentMembersCount} disabled />
                    </li>
                    <li className="field">
                        <label htmlFor="past-name">Пол</label>
                        <input className="field__input" type="text" name="past-name" id="past-name" value={tournamentData?.gender || ''} disabled />
                    </li>
                </ul>
                <ul className="right-fields">
                    <li className="field">
                        <label htmlFor="gender">Дата проведения</label>
                        <input className="field__input" type="text" name="gender" id="gender" value={dayjs(tournamentData?.startedAt).format('DD.MM.YYYY') || ''} disabled />
                    </li>
                    <li className="field">
                        <label htmlFor="group">Место проведения</label>
                        <input className="field__input" type="text" name="group" id="group" value={tournamentData?.location || ''} disabled />
                    </li>
                    {tournamentData?.organizers.map(organizer => {
                        return (
                            <li className="field org">
                                <img src={orgAvatar} alt="Фото организатора" className="org_img" />
                                <div className="org_info">
                                    <p className="status">Организатор</p>
                                    <p className="name">{organizer.lastName + ' ' + organizer.firstName + ' ' + organizer.patronymic}</p>
                                </div>
                            </li>
                        )
                    })}
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