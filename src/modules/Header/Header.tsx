import React from 'react';
import styles from './Header.module.css';
import ChatTeardropDots from './img/ChatTeardropDots.svg';
import PersonSimpleThrow from './img/PersonSimpleThrow.svg';
import logo from './img/logo.svg';
import searchIcon from './img/searchIcon.svg';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Спорт УрФУ" width={78} height={41} />
        <span className={styles.logoText}>СПОРТ УРФУ</span>
      </div>
      <div className={styles.search}>
        <img src={searchIcon} />
        <input 
          type="text" 
          className={styles.searchInput} 
          placeholder="Поиск мероприятий" 
        />
      </div>
      <div className={styles.userActions}>
        <button className={styles.notificationBtn}>
        <img src={ChatTeardropDots} />
        </button>
        <button className={styles.profileBtn}>
          <span>Мой профиль</span>
          <img src={PersonSimpleThrow} />
        </button>
      </div>
    </header>
  );
};

export default Header;