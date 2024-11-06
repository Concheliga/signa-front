import dayjs from "dayjs";
import { TournamentsDataProps } from "../../../interfaces/interfaces";
import style from "../css/tournamentListModule.module.css";
import { Link } from "react-router-dom";

const Tournaments: React.FC<TournamentsDataProps> = ({ tournamentsData }) => {
    if (tournamentsData) {
        return (
            tournamentsData.map((tournamentData, id) => {
                return (
                    <tr className={style.tr} key={id}>
                        <td className={style.td}>{tournamentData.sportType}</td>
                        <td className={style.td}><Link to={'/tournament'}>{tournamentData.title}</Link></td>
                        <td className={style.td}>{dayjs(tournamentData.startedAt).format('DD.MM.YYYY')}</td>
                        <td className={style.td}>{tournamentData.location}</td>
                        <td className={style.td}>{tournamentData.gender}</td>
                        <td className={style.td}>{tournamentData.state}</td>
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