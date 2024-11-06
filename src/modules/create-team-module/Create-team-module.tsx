import style from "./css/create-team.module.css";
import { useState, useEffect } from "react";
import { fetchUserData, postTeamData } from "./api/create-team-api";
import photo from "./img/photo.svg";
import trash from "./img/trash.svg";
import { TeamData, Member, CreateTeamProps, UserData } from "../../interfaces/interfaces";

const CreateTeam: React.FC<CreateTeamProps> = ({ tournamentId, maxMembersCount }) => {
    tournamentId = 'fb7ade12-684a-4c36-b1a0-aeb2b5c30cd8';
    const [currentMembersCount, setCurrentMembersCount] = useState<number>(0);
    maxMembersCount = 8;
    const [teamName, setTeamName] = useState('Введите название');
    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [currentMembers, setCurrentMembers] = useState<Member[]>([]);

    useEffect(() => {
        fetchUserData(setUserData, setLoading, setError);
    }, []);

    if (loading) {
        return <p>Загрузка данных...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    const addMember = () => {
        if (userData && currentMembers.length < maxMembersCount) {
            const newMember: Member = {
                id: Date.now(),
                data: userData
            };
            setCurrentMembers([...currentMembers, newMember]);
            setCurrentMembersCount(currentMembersCount + 1);
        }
    };

    const deleteMember = (id: number) => {
        setCurrentMembers(currentMembers.filter(member => member.id !== id));
        setCurrentMembersCount(currentMembersCount - 1);
    };

    return (
        <main className={style.main}>
            <div className={style.container}>
                <div className={style["header-container"]}>
                    <span className={style.team}>Команда</span>
                    <input
                        onChange={e => setTeamName(e.target.value)}
                        type="text"
                        className={style["team-name"]}
                        value={teamName}
                    ></input>
                </div>
                <div className={style["members-block"]}>
                    <div className={style.titles}>
                        <span className={style["id-title"]}>#</span>
                        <span className={style["name-title"]}>Имя</span>
                        <span className={style["group-title"]}>Группа </span>
                    </div>
                    <button
                        onClick={addMember}
                        className={style["add-teammate"]}
                    >+ Добавить участника</button>
                    <ul className={style.members}>
                        {currentMembers.map((member, index) => (
                            <li key={member.id} className={style.member}>
                                <span className={style.id}>{index + 1}</span>
                                <img src={photo} alt="photo" />
                                <span className={style.name}>
                                    {`${member.data.lastName} ${member.data.firstName} ${member.data.patronymic}`}
                                </span>
                                <span>{member.data.groupNumber}</span>
                                <img
                                    onClick={() => deleteMember(member.id)}
                                    src={trash}
                                    alt="trash"
                                    className={style.trash}
                                />
                            </li>
                        ))}
                    </ul>
                    <div className={style["members-count"]}>
                        Всего участников: {currentMembersCount}
                        <span className={style["max-members"]}>/{maxMembersCount}</span>
                    </div>
                </div>
                <div className={style.buttons}>
                    <button className={style.cancel}>Отменить</button>
                    <button onClick={e => {
                        e.preventDefault();

                        const team: TeamData = {
                            title: teamName,
                            tournamentId: tournamentId,
                            captainId: '5c691513-3fa1-4f07-b37c-b3a86cbeecca',
                            membersId: [
                                '5c691513-3fa1-4f07-b37c-b3a86cbeecca',
                                '5c691513-3fa1-4f07-b37c-b3a86cbeecca',
                                '5c691513-3fa1-4f07-b37c-b3a86cbeecca',
                                '5c691513-3fa1-4f07-b37c-b3a86cbeecca',
                                '5c691513-3fa1-4f07-b37c-b3a86cbeecca',
                                '5c691513-3fa1-4f07-b37c-b3a86cbeecca',
                                '5c691513-3fa1-4f07-b37c-b3a86cbeecca',
                                '5c691513-3fa1-4f07-b37c-b3a86cbeecca'
                            ]
                        }

                        postTeamData(team);
                    }} className={style.save}>Сохранить команду</button>
                </div>
            </div>
        </main>
    );
};

export default CreateTeam;