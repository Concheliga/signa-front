import style from "./css/statistic.module.css";
import medal from "./img/medal.svg";
import trophy from "./img/trophy.svg";
import arrow from "./img/arrow.svg"

const Statistic: React.FC = () => {
    return (
        <div className={style.page}>
            <div className={style.container}>
                <div className={style.column}>
                    <div className={style.block}>
                        <div>
                            12
                        </div>
                        <div>
                            сыгранные матчи
                        </div>
                    </div>
                    <div className={style.block}>
                        <div>
                            3 (25%)
                        </div>
                        <div>
                            выигранные матчи
                        </div>
                    </div>
                </div>
                <div className={style.column}>
                    <div className={style.block}>
                        <div>
                            12
                        </div>
                        <div>
                            сыгранные турниры
                        </div>
                    </div>
                    <div className={style.block}>
                        <div>
                            3 (25%)
                        </div>
                        <div>
                            выигранные турниры
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.awards}>
                <div className={style.award}>
                    <img src={trophy} alt="трофей" />
                    <div>
                        <div>24</div>
                        <div>Сыграно матчей и турниров</div>
                    </div>
                    <img className={style.arrow} src={arrow} alt="стрелка" />
                </div>
                <div className={style.award}>
                    <img src={medal} alt="медаль" />
                    <div>
                        <div>3</div>
                        <div>Награды за призовые места</div>
                    </div>
                    <img className={style.arrow} src={arrow} alt="стрелка" />
                </div>
            </div>
            <div className={style.streak}>
                <div>4</div>
                <div>Серия побед по турнирам</div>
            </div>
        </div>
    );
};

export default Statistic;