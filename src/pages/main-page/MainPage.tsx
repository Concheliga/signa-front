import React, { useState } from 'react';
import CurrentEventCard from './Components/CurrentEventCard/CurrentEventCard';
import FiltersSection from './Components/FiltersSection/FiltersSection';
import EventsSection from './Components/EventsSection/EventsSection';
import { Filters, SportEvent } from './types/events';
import styles from './css/main.module.css';
import whiteLeftArrow from './img/whiteLeftArrow.svg';
import whiteRightArrow from './img/whiteRightArrow.svg';

const SportsEventsPage: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({
    status: 'current',
    sport: 'volleyball',
    gender: '',
    dateFrom: '14.03.2025',
    dateTo: '10.04.2025'
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const registrationEvents: SportEvent[] = [
    {
      id: 1,
      sport: 'volleyball',
      teamType: 'Смешанная команда',
      name: 'Лучшая подача в УрФУ среди женщин',
      date: '2 – 3 ноября',
      details: {
        text: 'До конца регистрации 2 дня',
        type: 'warning'
      }
    }
  ];

  const upcomingEvents: SportEvent[] = [
    {
      id: 5,
      sport: 'basketball',
      teamType: 'Женщины',
      name: 'Лучшая подача в УрФУ среди женщин',
      date: '2 – 3 ноября'
    }
  ];

  const completedEvents: SportEvent[] = [
    {
      id: 9,
      sport: 'basketball',
      teamType: 'Женщины',
      name: 'Лучшая подача в УрФУ среди женщин',
      date: '5 ноября'
    }
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.currentEventsBanner}>
          <div className={styles.bannerCircles}>
            <div className={`${styles.bannerCircle} ${styles.circle1}`}></div>
            <div className={`${styles.bannerCircle} ${styles.circle2}`}></div>
            <div className={`${styles.bannerCircle} ${styles.circle3}`}></div>
          </div>
          <div className={styles.bannerHeader}>
            <div className={styles.bannerTitle}>
              <div className={styles.bannerTitleIcon}></div>
              <h1 className={styles.bannerTitleText}>Следи за ходом соревнований!</h1>
            </div>
          </div>
          <div className={styles.bannerDescription}>
            <h2 className={styles.bannerDescriptionTitle}>Прямо сейчас проводится 7 мероприятий</h2>
            <p className={styles.bannerDescriptionText}>
              Ты можешь ознакомиться с командами и турнирной сеткой на странице соревнования
            </p>
          </div>
          <div className={styles.currentEventsSlider}>
            <div className={styles.sliderControls}>
              <button className={styles.sliderControl}>
              <img src={whiteLeftArrow}></img>
              </button>
              <button className={styles.sliderControl}>
              <img src={whiteRightArrow}></img>
              </button>
            </div>
            <div className={styles.currentEventsList}>
              <CurrentEventCard 
                sport="volleyball" 
                teamType="Смешанная команда"
                name="Чемпионат по волейболу между институтами"
                stage="Финал"
                stageColor="green"
                date='06.04.2025'
              />
              <CurrentEventCard 
                sport="volleyball" 
                teamType="Смешанная команда"
                name="Чемпионат по волейболу между институтами"
                stage="Четверть-финал"
                stageColor="orange"
                date='06.04.2025'
              />
            </div>
          </div>
        </section>

        <FiltersSection filters={filters} onChange={handleFilterChange} />

        <EventsSection 
          title="Идет регистрация" 
          events={registrationEvents} 
          buttonText="Зарегистрироваться"
        />
        <EventsSection 
          title="Будущие события" 
          events={upcomingEvents} 
          buttonText="Узнать больше"
        />
        <EventsSection 
          title="Завершены" 
          events={completedEvents} 
          buttonText="Посмотреть результаты"
          isResults={true}
        />
      </main>
    </div>
  );
};

export default SportsEventsPage;