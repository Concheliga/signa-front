import React, { ChangeEvent } from 'react';
import { Filters, EventStatus, SportType, GenderType } from '../../types/events';
import styles from './FiltersSection.module.css';
import CaretUp from '../../img/CaretUp.svg';

interface FiltersSectionProps {
  filters: Filters;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FiltersSection: React.FC<FiltersSectionProps> = ({ filters, onChange }) => {
  const [showFilters, setShowFilters] = React.useState(true);

  return (
    <section className={`${styles.section} ${!showFilters ? styles.collapsed : ''}`}>
      <div className={styles.filtersHeader}>
        <h2 className={styles.filtersTitle}>Найти подходящие мероприятия</h2>
        <button 
          className={styles.hideFilters}
          onClick={() => setShowFilters(!showFilters)}
        >
          <span>{showFilters ? 'Скрыть фильтры' : 'Показать фильтры'}</span>

            <img src={CaretUp}></img>

        </button>
      </div>
      
      {showFilters && (
        <div className={styles.filtersContent}>
          <div className={styles.filterGroup}>
            <h3 className={styles.filterTitle}>Статус мероприятия</h3>
            <div className={styles.filterOptions}>
              {([
                { id: 'current', label: 'Проходит сейчас' },
                { id: 'registration', label: 'Идет регистрация' },
                { id: 'upcoming', label: 'Предстоящие' },
                { id: 'completed', label: 'Уже завершилось' }
              ] as { id: EventStatus; label: string }[]).map(option => (
                <label key={option.id} className={styles.filterOption}>
                  <input
                    type="radio"
                    name="status"
                    value={option.id}
                    checked={filters.status === option.id}
                    onChange={onChange}
                    className={styles.radioInput}
                  />
                  <span className={styles.customRadio}></span>
                  <span className={styles.filterLabel}>{option.label}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div className={styles.filterGroup}>
            <h3 className={styles.filterTitle}>Вид спорта</h3>
            <div className={styles.filterOptions}>
              {([
                { id: 'volleyball', label: 'Волейбол' },
                { id: 'tennis', label: 'Теннис' },
                { id: 'football', label: 'Футбол' },
                { id: 'basketball', label: 'Баскетбол' }
              ] as { id: SportType; label: string }[]).map(option => (
                <label key={option.id} className={styles.filterOption}>
                  <input
                    type="radio"
                    name="sport"
                    value={option.id}
                    checked={filters.sport === option.id}
                    onChange={onChange}
                    className={styles.radioInput}
                  />
                  <span className={styles.customRadio}></span>
                  <span className={styles.filterLabel}>{option.label}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div className={styles.filterGroup}>
            <h3 className={styles.filterTitle}>Пол команды</h3>
            <div className={styles.filterOptions}>
              {([
                { id: 'male', label: 'Мужчины' },
                { id: 'female', label: 'Женщины' },
                { id: 'mixed', label: 'Смешанная команда' }
              ] as { id: GenderType; label: string }[]).map(option => (
                <label key={option.id} className={styles.filterOption}>
                  <input
                    type="radio"
                    name="gender"
                    value={option.id}
                    checked={filters.gender === option.id}
                    onChange={onChange}
                    className={styles.radioInput}
                  />
                  <span className={styles.customRadio}></span>
                  <span className={styles.filterLabel}>{option.label}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div className={styles.dateFilter}>
            <h3 className={styles.filterTitle}>Дата проведения</h3>
            <div className={styles.dateRange}>
              <input
                type="text"
                className={styles.dateInput}
                name="dateFrom"
                value={filters.dateFrom}
                onChange={onChange}
                placeholder="Дата от"
              />
              <span>-</span>
              <input
                type="text"
                className={styles.dateInput}
                name="dateTo"
                value={filters.dateTo}
                onChange={onChange}
                placeholder="Дата до"
              />
            </div>
            <div className={styles.filterActions}>
              <button className={`${styles.filterBtn} ${styles.resetBtn}`}>Сбросить</button>
              <button className={`${styles.filterBtn} ${styles.applyBtn}`}>Применить фильтр</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FiltersSection;