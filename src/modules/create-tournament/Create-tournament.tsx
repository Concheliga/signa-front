import { useEffect, useState } from "react";
import style from "./css/create-tournament.module.css";
import search from "./img/search.svg";
import { Member, SearchedUser } from "../../interfaces/interfaces";
import { findUser } from "./api/create-tournament-api";
import trash from "./img/trash.svg";

const CreateTournament: React.FC = () => {
    const [searchMemberName, setSearchMemberName] = useState<string>('');
    const [users, setUsers] = useState<SearchedUser[]>([]);
    const [currentMembersCount, setCurrentMembersCount] = useState<number>(0);
    const [currentMembers, setCurrentMembers] = useState<Member[]>([]);
    const [userData, setUserData] = useState<SearchedUser | null>(null);

    useEffect(() => {
        if (searchMemberName != '') {
            findUser(setUsers, searchMemberName);
        }
    }, [searchMemberName]);

    const addMember = (userData: SearchedUser | null) => {
        if (userData) {
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
        <main>
            <h2 className={style.h2}>Создание турнира</h2>
            <div className={style.container}>
                <div className={style.section}>
                    <div className={style['form-group']}>
                        <label htmlFor="tournament-name">Название турнира</label>
                        <input className={style.input} type="text" id="tournament-name" placeholder="Турнир по волейболу" />
                    </div>

                    <div className={style['form-group']}>
                        <label htmlFor="sport-type">Вид спорта</label>
                        <select className={style.select} id="sport-type">
                            <option>Волейбол</option>
                            <option>Баскетбол</option>
                            <option>Футбол</option>
                            <option>Другое</option>
                        </select>
                    </div>

                    <div className={style['form-group']}>
                        <label>Максимальное количество участников</label><br />
                        <input className={`${style.counter} ${style.input}`} type="number" id="max-participants" value="12" />
                        <div className={style['radio-group']}>
                            <label><input type="radio" name="participant-gender" value="men" /> Мужчины</label>
                            <label><input type="radio" name="participant-gender" value="mixed" /> Смешанный</label>
                            <label><input type="radio" name="participant-gender" value="women" /> Женщины</label>
                        </div>
                    </div>

                    <div className={style['form-group']}>
                        <label htmlFor="min-participants">Минимальное количество участников</label><br />
                        <input className={`${style.counter} ${style.input}`} type="number" id="min-participants" value="12" />
                    </div>

                    <div className={style['form-group']}>
                        <label htmlFor="max-teams">Максимальное количество команд</label><br />
                        <input className={`${style.counter} ${style.input}`} type="number" id="max-teams" value="12" />
                    </div>

                    <div className={style['form-group']}>
                        <label htmlFor="regulations">Регламент</label>
                        <input className={style.input} type="file" id="regulations" />
                    </div>

                    <div className={style['form-group']}>
                        <label htmlFor="chat-link">Ссылка на чат</label>
                        <input className={style.input} type="url" id="chat-link" placeholder="Ссылка" />
                    </div>
                </div>

                <div className={style.section}>
                    <div className={style['form-group']}>
                        <label htmlFor="location">Место проведения</label>
                        <input className={style.input} type="text" id="location" placeholder="Стадион" />
                    </div>

                    <div className={style['form-group']}>
                        <label>Дата и время проведения</label>
                        <div className={style['tournament-date']}>
                            <input className={`${style.date} ${style.input}`} type="date" />
                            <div>-</div>
                            <input className={`${style.date} ${style.input}`} type="date" />
                        </div>
                    </div>

                    <div className={style['form-group']}>
                        <label htmlFor="registration-date">Дата конца регистрации на турнир</label>
                        <input className={style.input} type="date" id="registration-date" />
                    </div>
                </div>

                <div className={style.section}>
                    <div className={style['form-group']}>
                        <label>Организаторы</label>
                        <div className={style['organizer-list']}>
                        <ul className={style.members}>
                            {currentMembers.map((member) => (
                                <li key={member.id} className={style.organizer}>
                                    <div className={style.name}>
                                        <span>
                                            {`${member.data.lastName} ${member.data.firstName} ${member.data.patronymic}`}
                                        </span>
                                        <img
                                            onClick={() => deleteMember(member.id)}
                                            src={trash}
                                            alt="trash"
                                            className={style.trash}
                                        />
                                    </div>
                                    <input className={style.input} type="text" id="organizator-description" placeholder="Описание" />
                                </li>
                            ))}
                        </ul>
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
                    </div>
                </div>
                <button className={`${style['create-tournament-button']} ${style.button}`}>Создать турнир</button>
            </div>
        </main>
    );
};

export default CreateTournament;