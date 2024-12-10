import dayjs from "dayjs";
import { TournamentsDataProps } from "../../../interfaces/interfaces";
import style from "../css/tournamentListModule.module.css";
import { useNavigate } from "react-router-dom";
import { genderMapping, regStateMapping } from "../../../utils/name-mapping";

const Tournaments: React.FC<TournamentsDataProps> = ({ tournamentsData }) => {
    const navigate = useNavigate();

    if (tournamentsData) {
        return (
            tournamentsData.map((tournamentData, id) => {
                return (
                    <tr
                        className={`${style.tr} ${style['tr-body']}`}
                        key={id}
                        onClick={() => navigate(`${tournamentData.id}/info`)}>
                        <td className={style.td}>{tournamentData.sportType}</td>
                        <td className={style.td}>{tournamentData.title}</td>
                        <td className={style.td}>{dayjs(tournamentData.startedAt).format('DD.MM.YYYY')}</td>
                        <td className={style.td}>{tournamentData.location}</td>
                        <td className={style.td}>{genderMapping(tournamentData.gender)}</td>
                        <td className={style.td}>{regStateMapping(tournamentData.state)}</td>
                        {
                            tournamentData.state === 'Идет регистрация' ?
                                <td className={style.td}>
                                    <button className={style.button}>
                                        Регистрация
                                    </button>
                                </td> :
                                null
                        }
                    </tr>
                )
            })
        )
    }
}

export default Tournaments;