import style from "./css/create-team.module.css";
import { useState, useEffect, useContext } from "react";
import { findUser, postTeamData } from "./api/create-team-api";
import photo from "./img/photo.svg";
import trash from "./img/trash.svg";
import { TeamData, Member, SearchedUser } from "../../interfaces/interfaces";
import { useLocation } from "react-router-dom";
import search from "./img/search.svg";
import { Context } from "../../main";

const CreateTeam: React.FC = () => {
    const {store} = useContext(Context);
    const location = useLocation();
    const tournamentId = location.pathname.substring(13, location.pathname.length - 12);
    const [currentMembersCount, setCurrentMembersCount] = useState<number>(0);
    let maxMembersCount = 8;
    const [teamName, setTeamName] = useState<string>('');
    const [userData, setUserData] = useState<SearchedUser | null>(null);
    const [users, setUsers] = useState<SearchedUser[]>([]);
    const [currentMembers, setCurrentMembers] = useState<Member[]>([]);
    const [searchMemberName, setSearchMemberName] = useState<string>('');

    useEffect(() => {
        if (searchMemberName != '') {
            findUser(setUsers, searchMemberName);
        }
    }, [searchMemberName]);

    useEffect(() => {
        setTimeout(() => addMember({...store.user, id: store.userID}), 400);
    }, [])

    const addMember = (userData: SearchedUser | null) => {
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

    const onFindedUserClick = (
        setUserData: React.Dispatch<React.SetStateAction<SearchedUser | null>>,
        user: SearchedUser
    ) => {
        setUserData(user);
        addMember(user);
    }

    return (
        <main className={style.main}>
            <div className={style.container}>
                <div className={style["header-container"]}>
                    <span className={style.team}>Команда</span>
                    <input
                        placeholder="Введите название"
                        onChange={e => setTeamName(e.target.value)}
                        type="text"
                        className={style["team-name"]}
                        value={teamName} />
                </div>
                <div className={style['search-list']}>
                    <div className={style.search}>
                        <img src={search} alt="поиск" width="16px" />
                        <input
                            placeholder="Поиск"
                            className={style['search-text']}
                            value={searchMemberName}
                            onChange={e => setSearchMemberName(e.target.value)} />
                    </div>
                    <ul>
                        {users.slice(0, 5 < users.length ? 5 : users.length).map((user, index) => {
                            return (
                                <li onClick={() => onFindedUserClick(setUserData, user)} className={style.list} key={index}>
                                    {`${user?.lastName} ${user?.firstName} ${user?.patronymic}`}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className={style["members-block"]}>
                    <div className={style.titles}>
                        <span className={style["id-title"]}>#</span>
                        <span className={style["name-title"]}>Имя</span>
                        <span className={style["group-title"]}>Группа </span>
                    </div>
                    <button
                        onClick={() => addMember(userData)}
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
                                {index && <img
                                    onClick={() => deleteMember(member.id)}
                                    src={trash}
                                    alt="trash"
                                    className={style.trash}
                                />}
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
                            captainId: currentMembers[0].data.id,
                            membersId: currentMembers.map((member) => member.data.id)
                        }

                        postTeamData(team);
                    }} className={style.save}>Сохранить команду</button>
                </div>
            </div>
        </main>
    );
};

export default CreateTeam;