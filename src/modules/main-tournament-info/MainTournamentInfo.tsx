import style from "./css/main-tournament-info.module.css";
import { useContext } from "react";
import dayjs from "dayjs";
import Organizers from "./Components/Organizers";
import { TournamentData } from "../../interfaces/interfaces";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../../main";
import { genderMapping } from "../../utils/name-mapping";

const MainTournamentInfo: React.FC = () => {
    const { store } = useContext(Context);
    const tournamentData: TournamentData | null = store.tournament;
    const navigate = useNavigate();
    const location = useLocation();
    const url = new URL("./create-team", window.origin + location.pathname);

    const onRegiterClick = (isAuthorized: boolean, url: URL) => {
        console.log(isAuthorized);
        if (!isAuthorized) {
            alert("Для того чтобы зарегистрировать команду вы должны войти в свою учетную запись");
        } else {
            navigate(url.pathname);
        } 
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
                        <input className={style.field__input} type="text" name="past-name" id="past-name" value={genderMapping(tournamentData?.gender) || ''} disabled />
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
                <li className={style.button}><button onClick={() => onRegiterClick(store.isAuthorized, url)}>Зарегистрироваться</button></li>
                <li className={style.button}><button>Ссылка на беседу ВК</button></li>
                <li className={style.button}><button>Связаться с организатором</button></li>
                <li className={style.button}><button>Регламент</button></li>
            </ul>
        </>
    );
};

export default MainTournamentInfo;