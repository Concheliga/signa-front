import style from "./css/main-tournament-info.module.css";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { fetchUserData } from "./api/mainTournamentApi";
import Organizers from "./Components/Organizers";
import { TournamentData } from "../../interfaces/interfaces";
import { useNavigate } from "react-router-dom";

const MainTournamentInfo: React.FC = () => {
    const [tournamentData, setTournamentData] = useState<TournamentData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUserData(setTournamentData, setLoading, setError);
    }, []);

    if (loading) {
        return <p>Загрузка данных...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            <form className={style["tournament-info-form"]}>
                <ul className={style["left-fields"]}>
                    <li className={style.field}>
                        <label className={style.label} htmlFor="first-name">Вид спорта</label>
                        <input className={style.field__input} type="text" name="first-name" id="first-name" value={tournamentData?.sportType || ''} disabled />
                    </li>
                    <li className={style.field}>
                        <label className={style.label} htmlFor="patronymic">Участники</label>
                        <input className={style.field__input} type="text" name="patronymic" id="patronymic" value={tournamentData?.currentMembersCount} disabled />
                    </li>
                    <li className={style.field}>
                        <label className={style.label} htmlFor="past-name">Пол</label>
                        <input className={style.field__input} type="text" name="past-name" id="past-name" value={tournamentData?.gender || ''} disabled />
                    </li>
                </ul>
                <ul className={style["right-fields"]}>
                    <li className={style.field}>
                        <label className={style.label} htmlFor="gender">Дата проведения</label>
                        <input className={style.field__input} type="text" name="gender" id="gender" value={dayjs(tournamentData?.startedAt).format('DD.MM.YYYY') || ''} disabled />
                    </li>
                    <li className={style.field}>
                        <label className={style.label} htmlFor="group">Место проведения</label>
                        <input className={style.field__input} type="text" name="group" id="group" value={tournamentData?.location || ''} disabled />
                    </li>
                    <Organizers organizers={tournamentData?.organizers} />
                </ul>
            </form>
            <ul className={style.buttons}>
                <li className={style.button}><button onClick={() => navigate('/tournament/create-team')}>Зарегистрироваться</button></li>
                <li className={style.button}><button>Ссылка на беседу ВК</button></li>
                <li className={style.button}><button>Связаться с организатором</button></li>
                <li className={style.button}><button>Регламент</button></li>
            </ul>
        </>
    );
};

export default MainTournamentInfo;