import "./css/create-team.css";
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
        <main className="main">
            <div className="container">
                <div className="header-container">
                    <span className="team">Команда</span>
                    <input onChange={e => setTeamName(e.target.value)} type="text" className="team-name" value={teamName}></input>
                </div>
                <div className="members-block">
                    <div className="titles">
                        <span className="id-title">#</span>
                        <span className="name-title">Имя</span>
                        <span className="group-title">Группа </span>
                    </div>
                    <button onClick={addMember} className="add-teammate">+ Добавить участника</button>
                    <ul className="members">
                        {currentMembers.map((member, index) => (
                            <li key={member.id} className="member">
                                <span className="id">{index + 1}</span>
                                <img src={photo} alt="photo" className="photo" />
                                <span className="name">{`${member.data.lastName} ${member.data.firstName} ${member.data.patronymic}`}</span>
                                <span className="group">{member.data.groupNumber}</span>
                                <img
                                    onClick={() => deleteMember(member.id)}
                                    src={trash}
                                    alt="trash"
                                    className="trash"
                                />
                            </li>
                        ))}
                    </ul>
                    <div className="members-count">
                        Всего участников: {currentMembersCount}<span className="max-members">/{maxMembersCount}</span>
                    </div>
                </div>
                <div className="buttons">
                    <button className="cancel">Отменить</button>
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
                    }} className="save">Сохранить команду</button>
                </div>
            </div>
        </main>
    );
};

export default CreateTeam;