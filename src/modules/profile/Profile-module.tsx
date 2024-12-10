import avatar from "./img/avatar.svg";
import style from "./css/profile-module.module.css";
import { useState, useEffect } from "react";
import { fetchUserData } from "./api/profile-api";
import { UserData } from "../../interfaces/interfaces";
import { genderMapping } from "../../utils/name-mapping";

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
        <>
            <div className={style.user}>
                <img src={avatar} alt="Аватарка" />
                <p className={style["user__full-name"]}>{`${userData?.firstName || ''} ${userData?.patronymic || ''} ${userData?.lastName || ''}`}</p>
            </div>
            <form className={style.form}>
                <ul className={style["left-fields"]}>
                    <li className={style.field}>
                        <label className={style.label} htmlFor="first-name">Имя</label>
                        <input className={style.field__input} type="text" name="first-name" id="first-name" value={userData?.firstName || ''} disabled />
                    </li>
                    <li className={style.field}>
                        <label className={style.label} htmlFor="patronymic">Отчество</label>
                        <input className={style.field__input} type="text" name="patronymic" id="patronymic" value={userData?.patronymic || ''} disabled />
                    </li>
                    <li className={style.field}>
                        <label className={style.label} htmlFor="past-name">Фамилия</label>
                        <input className={style.field__input} type="text" name="past-name" id="past-name" value={userData?.lastName || ''} disabled />
                    </li>
                </ul>
                <ul className={style["right-fields"]}>
                    <li className={style.field}>
                        <label className={style.label} htmlFor="gender">Пол</label>
                        <input className={style.field__input} type="text" name="gender" id="gender" value={genderMapping(userData?.gender) || ''} disabled />
                    </li>
                    <li className={style.field}>
                        <label className={style.label} htmlFor="group">Группа</label>
                        <input className={style.field__input} type="text" name="group" id="group" value={userData?.groupNumber || ''} disabled />
                    </li>
                    <li className={style.field}>
                        <label className={style.label} htmlFor="link">Ссылка на ВК</label>
                        <input className={style.field__input} type="url" name="link" id={style.link} value={userData?.vkLink || ''} onClick={(e) => {
                            e.preventDefault();
                            window.location.href = userData?.vkLink || window.location.href;
                        }} />
                    </li>
                </ul>
            </form>
        </>
    );
};

export default ProfileModule;