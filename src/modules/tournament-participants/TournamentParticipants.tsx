import { useContext, useState } from "react";
import style from "./css/tournament-participants.module.css";
import { Context } from "../../main";
import { genderMapping } from "../../utils/name-mapping";
import { api } from "../../api/index-api";

const TournamentParticipants: React.FC = () => {
    const { store } = useContext(Context);
    const [listType, setListType] = useState<string>('participants');

    const handleDownload = async () => {
        const fileUrl = 'http://localhost:5000/download/user/73f75f02-6eab-4658-b8d7-98afea9053c7';
    
        try {
          const response = await api.get(fileUrl, {
            responseType: 'blob'
          });
    
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
    
          link.download = 'file.docx';
          document.body.appendChild(link);
          link.click();
    
          link.remove();
          window.URL.revokeObjectURL(url);
        } catch (error) {
          console.error('Error downloading the file:', error);
        }
      };

    const renderList = (listType: string) => {
        if (listType === 'participants') {
            return store.tournament.members.map((member, index) => {
                return (
                    <tr className={style.tr} key={index}>
                        <td className={style.td}>{index + 1}</td>
                        <td className={style.td}>{`${member.patronymic} ${member.firstName[0]}.${member.lastName[0]}`}</td>
                        <td className={style.td}>{genderMapping(member.gender)}</td>
                        <td className={style.td}>{member.groupNumber}</td>
                    </tr>
                )
            })
        } else {
            return store.tournament.teams.map((team, index) => {
                return (
                    <tr className={style.tr} key={index}>
                        <td className={style.td}>{index + 1}</td>
                        <td className={style.td}>{team.title}</td>
                        <td className={style.td}>{genderMapping(team.captain.gender)}</td>
                        <td className={style.td}>{team.captain.groupNumber}</td>
                    </tr>
                )
            })
        }
    }

    return (
        <>
            <div className={style['teams-count']}>Количество участников:
                <span>
                    {listType === 'participants' ? store.tournament.members.length:store.tournament.teams.length}
                </span>
            </div>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th className={style.th}>№</th>
                        <th className={style.th}>
                            <select className={style.select} onChange={(e) => setListType(e.target.value)}>
                                <option value="participants">Участники</option>
                                <option value="teams">Команды</option>
                            </select>
                        </th>
                        <th className={style.th}>Пол</th>
                        <th className={style.th}>Институт</th>
                    </tr>
                </thead>
                <tbody>
                    {renderList(listType)}
                </tbody>
            </table>
            <button
            className={style.button}
            onClick={handleDownload}
            >Скачать список участников</button>
        </>
    );
};

export default TournamentParticipants;