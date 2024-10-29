import homePageIcon from './img/home-page-icon.svg';
import ProfileIcon from './img/profile-icon.svg';
import StatisticIcon from './img/statistic-icon.svg';
import TournamentsIcon from './img/tournaments-icon.svg';
import styles from  "./css/left-sidebar.module.css";

const LeftSidebar: React.FC = () => {
    return (
        <aside className={styles['navigation-menu']}>
            <nav className="navigation">
                <ul>
                    <li className={styles['navigation-list__item']}>
                        <a href='#'>
                            <img src={homePageIcon} alt="Главная" />
                            <p>Главная</p>
                        </a>
                    </li>
                    <li className={styles['navigation-list__item']}>
                        <a href='#'>
                            <img src={TournamentsIcon} alt="Турниры" />
                            <p>Турниры</p>
                        </a>
                    </li>
                    <li className={styles['navigation-list__item']}>
                        <a href='#'>
                            <img src={StatisticIcon} alt="Статистика" />
                            <p>Статистика</p>
                        </a>
                    </li>
                    <li className={styles['navigation-list__item']}>
                        <a href='#'>
                            <img src={ProfileIcon} alt="Мой профиль" />
                            <p>
                                Мой<br /> профиль
                            </p>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default LeftSidebar;