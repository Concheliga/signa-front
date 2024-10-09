import homePageIcon from './img/home-page-icon.svg';
import ProfileIcon from './img/profile-icon.svg';
import StatisticIcon from './img/statistic-icon.svg';
import TournamentsIcon from './img/tournaments-icon.svg';
import "./css/left-sidebar.css"

const LeftSidebar: React.FC = () => {
    return (
        <aside className="navigation-menu">
            <nav className="navigation">
                <ul className="navigation-list">
                    <li className="navigation-list__item">
                        <img className="navigation-list__item__img" src={homePageIcon} alt="Главная" />
                        <p className="navigation-list__item__text">Главная</p>
                    </li>
                    <li className="navigation-list__item">
                        <img className="navigation-list__item__img" src={TournamentsIcon} alt="Турниры" />
                        <p className="navigation-list__item__text">Турниры</p>
                    </li>
                    <li className="navigation-list__item">
                        <img className="navigation-list__item__img" src={StatisticIcon} alt="Статистика" />
                        <p className="navigation-list__item__text">Статистика</p>
                    </li>
                    <li className="navigation-list__item">
                        <img className="navigation-list__item__img" src={ProfileIcon} alt="Мой профиль" />
                        <p className="navigation-list__item__text">
                            Мой<br /> профиль
                        </p>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default LeftSidebar;