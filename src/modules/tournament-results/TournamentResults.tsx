import style from "./css/tournament-results.module.css";
import bronzeMedal from "./img/bronze-medal.svg";
import silverMedal from "./img/silver-medal.svg";
import goldMedal from "./img/gold-megal.svg";

const TournamentResults: React.FC = () => {
    return (
        <table className={style.table}>
            <thead>
                <tr>
                    <th className={style.th}></th>
                    <th className={style.th}>Место</th>
                    <th className={style.th}>Участник</th>
                    <th className={style.th}>Пол</th>
                    <th className={style.th}>Институт</th>
                </tr>
            </thead>
            <tbody>
                <tr className={style.tr}>
                    <td className={style.td}><img src={goldMedal} /></td>
                    <td className={style.td}>1</td>
                    <td className={style.td}>Килин М.С</td>
                    <td className={style.td}>Мужской</td>
                    <td className={style.td}>РТФ</td>
                </tr>
                <tr className={style.tr}>
                    <td className={style.td}><img src={silverMedal} /></td>
                    <td className={style.td}>2</td>
                    <td className={style.td}>Килин М.С</td>
                    <td className={style.td}>Мужской</td>
                    <td className={style.td}>РТФ</td>
                </tr>
                <tr className={style.tr}>
                    <td className={style.td}><img src={bronzeMedal} /></td>
                    <td className={style.td}>3</td>
                    <td className={style.td}>Килин М.С</td>
                    <td className={style.td}>Мужской</td>
                    <td className={style.td}>РТФ</td>
                </tr>
                <tr className={style.tr}>
                    <td className={style.td}></td>
                    <td className={style.td}>4</td>
                    <td className={style.td}>Килин М.С</td>
                    <td className={style.td}>Мужской</td>
                    <td className={style.td}>РТФ</td>
                </tr>
            </tbody>
        </table>
    );
};

export default TournamentResults;