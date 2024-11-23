import homePageIcon from './img/home-page-icon.svg';
import ProfileIcon from './img/profile-icon.svg';
import StatisticIcon from './img/statistic-icon.svg';
import TournamentsIcon from './img/tournaments-icon.svg';
import styles from  "./css/left-sidebar.module.css";
import { NavLink } from 'react-router-dom';

const LeftSidebar: React.FC = () => {
    return (
        <aside className={styles['navigation-menu']}>
            <nav className="navigation">
                <ul>
                    <li className={styles['navigation-list__item']}>
                        <NavLink to='home'>
                            <img src={homePageIcon} alt="Главная" />
                            <p>Главная</p>
                        </NavLink>
                    </li>
                    <li className={styles['navigation-list__item']}>
                        <NavLink to='tournaments'>
                            <img src={TournamentsIcon} alt="Турниры" />
                            <p>Турниры</p>
                        </NavLink>
                    </li>
                    <li className={styles['navigation-list__item']}>
                        <NavLink to='profile/statistic'>
                            <img src={StatisticIcon} alt="Статистика" />
                            <p>Статистика</p>
                        </NavLink>
                    </li>
                    <li className={styles['navigation-list__item']}>
                        <NavLink to='profile/info'>
                            <img src={ProfileIcon} alt="Мой профиль" />
                            <p>
                                Мой<br /> профиль
                            </p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default LeftSidebar;