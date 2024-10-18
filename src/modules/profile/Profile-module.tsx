import avatar from "./img/avatar.svg";
import "./css/profile-module.css";
import { useState, useEffect } from "react";
import { fetchUserData } from "./api/profile-api";

interface UserData {
    firstName: string;
    lastName: string;
    patronymic: string;
    gender: string;
    groupNumber: string;
}

const ProfileModule: React.FC = () => {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchUserData(setUserData, setLoading, setError);
    }, []);

    if (loading) {
        return <p>Загрузка данных...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <main className="main">
            <h1 className="page-name">Профиль участника</h1>
            <div className="user">
                <img src={avatar} alt="Аватарка" className="user__avatar" />
                <p className="user__full-name">{`${userData?.firstName || ''} ${userData?.patronymic || ''} ${userData?.lastName || ''}`}</p>
            </div>
            <form className="form">
                <ul className="left-fields">
                    <li className="field">
                        <label htmlFor="first-name">Имя</label>
                        <input className="field__input" type="text" name="first-name" id="first-name" value={userData?.firstName || ''} disabled />
                    </li>
                    <li className="field">
                        <label htmlFor="patronymic">Отчество</label>
                        <input className="field__input" type="text" name="patronymic" id="patronymic" value={userData?.patronymic || ''} disabled />
                    </li>
                    <li className="field">
                        <label htmlFor="past-name">Фамилия</label>
                        <input className="field__input" type="text" name="past-name" id="past-name" value={userData?.lastName || ''} disabled />
                    </li>
                </ul>
                <ul className="right-fields">
                    <li className="field">
                        <label htmlFor="gender">Пол</label>
                        <input className="field__input" type="text" name="gender" id="gender" value={userData?.gender || ''} disabled />
                    </li>
                    <li className="field">
                        <label htmlFor="group">Группа</label>
                        <input className="field__input" type="text" name="group" id="group" value={userData?.groupNumber || ''} disabled />
                    </li>
                    <li className="field">
                        <label htmlFor="link">Ссылка на ВК</label>
                        <input className="field__input" type="url" name="link" id="link" value="ссылка" disabled />
                    </li>
                </ul>
            </form>
        </main>
    );
};

export default ProfileModule;