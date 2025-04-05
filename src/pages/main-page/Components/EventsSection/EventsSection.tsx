import React from 'react';
import { SportEvent } from '../../types/events';
import EventCard from '../EventCard/EventCard';
import styles from './EventsSection.module.css';
import BlackRightArrow from '../../img/BlackRightArrow.svg';

interface EventsSectionProps {
  title: string;
  events: SportEvent[];
  buttonText: string;
  isResults?: boolean;
}

const EventsSection: React.FC<EventsSectionProps> = ({ 
  title, 
  events, 
  buttonText, 
  isResults = false 
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <div className={styles.sectionDivider}></div>
        <button className={styles.showAll}>
          <span>Показать все</span>
          <svg width={16} height={16} viewBox="0 0 24 24" fill="#1054DE">
          <img src={BlackRightArrow}></img>
          </svg>
        </button>
      </div>
      <div className={styles.eventsGrid}>
        {events.map(event => (
          <EventCard 
            key={event.id}
            event={event}
            buttonText={buttonText}
            isResults={isResults}
          />
        ))}
      </div>
    </section>
  );
};

export default EventsSection;