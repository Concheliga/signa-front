import React from 'react';
import styles from './Header.module.css';
import ChatTeardropDots from '../../img/ChatTeardropDots.svg';
import PersonSimpleThrow from '../../img/PersonSimpleThrow.svg';
import logo from '../../img/logo.svg';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Спорт УрФУ" width={78} height={41} />
        <span className={styles.logoText}>СПОРТ УРФУ</span>
      </div>
      <div className={styles.search}>
        <input 
          type="text" 
          className={styles.searchInput} 
          placeholder="Поиск мероприятий" 
        />
      </div>
      <div className={styles.userActions}>
        <button className={styles.notificationBtn}>
        <img src={ChatTeardropDots}></img>
        </button>
        <button className={styles.profileBtn}>
          <span>Мой профиль</span>
          <img src={PersonSimpleThrow}></img>
        </button>
      </div>
    </header>
  );
};

export default Header;