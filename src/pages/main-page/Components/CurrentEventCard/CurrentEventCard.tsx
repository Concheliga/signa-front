import React from 'react';
import { SportEvent } from '../../types/events';
import styles from './CurrentEventCard.module.css';
import BlackRightArrow from '../../img/BlackRightArrow.svg';

interface CurrentEventCardProps extends Omit<SportEvent, 'id'> {}

const CurrentEventCard: React.FC<CurrentEventCardProps> = ({ 
  sport, 
  teamType, 
  name, 
  stage, 
  stageColor 
}) => {
  const sportClass = `${styles.sportTag} ${styles[`sport${sport.charAt(0).toUpperCase() + sport.slice(1)}`]}`;
  const stageClass = `${styles.eventStage} ${styles[`stage${stageColor}`]}`;
  
  return (
    <div className={styles.currentEventCard}>
      <div className={styles.eventSport}>
        <span className={sportClass}>{getSportName(sport)}</span>
        {teamType && (
          <span className={`${styles.sportTag} ${styles.teamType}`}>{teamType}</span>
        )}
      </div>
      <div className={styles.eventMeta}>
        <h3 className={styles.eventName}>{name}</h3>
        {stage && <p className={stageClass}>{stage}</p>}
      </div>
      <div className={styles.eventMore}>
        <img src={BlackRightArrow}></img>
      </div>
    </div>
  );
};

const getSportName = (sport: string): string => {
  const names: Record<string, string> = {
    volleyball: 'Волейбол',
    tennis: 'Теннис',
    basketball: 'Баскетбол',
    football: 'Футбол'
  };
  return names[sport] || sport;
};

export default CurrentEventCard;