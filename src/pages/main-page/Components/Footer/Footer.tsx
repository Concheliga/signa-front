import React from 'react';
import styles from './Footer.module.css';
import logo from '../../img/logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src={logo} alt="Спорт УрФУ" width={55} height={29} />
        <span className={styles.logoText}>СПОРТ УРФУ</span>
      </div>
      <p className={styles.copyright}>Сервис разработан в рамках Проектного практикума, 2025</p>
    </footer>
  );
};

export default Footer;