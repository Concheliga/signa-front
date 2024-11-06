import { NavLink, Outlet } from "react-router-dom";
import "../../ui/css/page.css";
import style from "./css/profile-page.module.css"

const ProfilePage: React.FC = () => {
    return (
        <main className={style.main}>
            <h1 className={style["page-name"]}>Профиль участника</h1>
            <ul className={style.tabs}>
                <li><NavLink to={`/profile/info`}>Основная информация</NavLink></li>
                <li><NavLink to={`/profile/statistic`}>Статистика</NavLink></li>
            </ul>
            <Outlet />
        </main>
        
    );
};

export default ProfilePage;