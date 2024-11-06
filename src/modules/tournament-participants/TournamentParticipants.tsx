import { useContext } from "react";
import style from "./css/tournament-participants.module.css";
import { Context } from "../../main";

const TournamentParticipants: React.FC = () => {
    const { store } = useContext(Context);

    return (
        <>
            <div className={style['teams-count']}>Количество участников: <span>{store.tournament.members.length}</span></div>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th className={style.th}>№</th>
                        <th className={style.th}>Участник</th>
                        <th className={style.th}>Пол</th>
                        <th className={style.th}>Институт</th>
                    </tr>
                </thead>
                <tbody>
                    {store.tournament.members.map((member, index) => {
                        return (
                            <tr className={style.tr}>
                                <td className={style.td}>{index + 1}</td>
                                <td className={style.td}>{`${member.patronymic} ${member.firstName[0]}.${member.lastName[0]}`}</td>
                                <td className={style.td}>{member.gender}</td>
                                <td className={style.td}>{member.groupNumber}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
};

export default TournamentParticipants;