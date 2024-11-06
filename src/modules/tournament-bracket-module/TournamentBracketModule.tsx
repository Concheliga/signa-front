import style from "./css/tournament-bracket-module.module.css";
import { useState, useEffect, useContext } from "react";
import { TreeGenerator } from 'tournament-bracket-tree';
import 'tournament-bracket-tree/dist/index.css';
import { buildTree } from "./helpers/buildTree";
import { mapTournamentToNode } from "./helpers/mapTournamentToNode";
import { MatchData, Game, Tree } from "../../interfaces/interfaces";
import { Context } from "../../main";

const TournamentBracketModule: React.FC = () => {
    const [matchesData, setMatchesData] = useState<MatchData[]>([]);
    const { store } = useContext(Context);
    const [tree, setTree] = useState<Tree<Game>>(
        {
            data: {
                teamOne: "Loading...",
                scoreTeamOne: 0,
                teamTwo: "Loading...",
                scoreTeamTwo: 0
            },
            left: undefined,
            right: undefined,
        });

    useEffect(() => {
        setMatchesData(store.tournament.matches)
    }, []);

    useEffect(() => {
        if (matchesData.length > 0) {
            const builtTree = buildTree(matchesData);

            setTree(builtTree ?? {
                data: {
                    teamOne: '',
                    scoreTeamOne: 0,
                    teamTwo: '',
                    scoreTeamTwo: 0
                },
                left: undefined,
                right: undefined
            });
        }
    }, [matchesData]);

    return (
        <>
            <h2 className={style["groups-title"]}>Групповой этап</h2>
            <div className={style['table-container']}>
                <div className={style["table"]}>
                    <h3 className={style["group-name-title"]}>Группа А</h3>
                    <div className={style["table-row"]}>
                        <div className={style["team"]}>Команда 1</div>
                        <div className={style["score"]}>3</div>
                    </div>
                    <div className={style["table-row"]}>
                        <div className={style["team"]}>Команда 2</div>
                        <div className={style["score"]}>1</div>
                    </div>
                    <div className={style["table-row"]}>
                        <div className={style["team"]}>Команда 3</div>
                        <div className={style["score"]}>3</div>
                    </div>
                    <div className={style["table-row"]}>
                        <div className={style["team"]}>Команда 4</div>
                        <div className={style["score"]}>1</div>
                    </div>
                </div>

                <div className={style["table"]}>
                    <h3 className={style["group-name-title"]}>Группа Б</h3>
                    <div className={style["table-row"]}>
                        <div className={style["team"]}>Команда 1</div>
                        <div className={style["score"]}>3</div>
                    </div>
                    <div className={style["table-row"]}>
                        <div className={style["team"]}>Команда 2</div>
                        <div className={style["score"]}>1</div>
                    </div>
                    <div className={style["table-row"]}>
                        <div className={style["team"]}>Команда 3</div>
                        <div className={style["score"]}>3</div>
                    </div>
                    <div className={style["table-row"]}>
                        <div className={style["team"]}>Команда 4</div>
                        <div className={style["score"]}>1</div>
                    </div>
                </div>

                <div className={style["table"]}>
                    <h3 className={style["group-name-title"]}>Группа В</h3>
                    <div className={style["table-row"]}>
                        <div className={style["team"]}>Команда 1</div>
                        <div className={style["score"]}>3</div>
                    </div>
                    <div className={style["table-row"]}>
                        <div className={style["team"]}>Команда 2</div>
                        <div className={style["score"]}>1</div>
                    </div>
                    <div className={style["table-row"]}>
                        <div className={style["team"]}>Команда 3</div>
                        <div className={style["score"]}>3</div>
                    </div>
                    <div className={style["table-row"]}>
                        <div className={style["team"]}>Команда 4</div>
                        <div className={style["score"]}>1</div>
                    </div>
                </div>

                <div className={style["table"]}>
                    <h3 className={style["group-name-title"]}>Группа Г</h3>
                    <div className={style["table-row"]}>
                        <div className={style["team"]}>Команда 1</div>
                        <div className={style["score"]}>3</div>
                    </div>
                    <div className={style["table-row"]}>
                        <div className={style["team"]}>Команда 2</div>
                        <div className={style["score"]}>1</div>
                    </div>
                    <div className={style["table-row"]}>
                        <div className={style["team"]}>Команда 3</div>
                        <div className={style["score"]}>3</div>
                    </div>
                    <div className={style["table-row"]}>
                        <div className={style["team"]}>Команда 4</div>
                        <div className={style["score"]}>1</div>
                    </div>
                </div>
            </div>
            <TreeGenerator
                root={"right"}
                mapDataToNode={mapTournamentToNode}
                tree={tree}
                lineThickness={1}
                lineColor="black"
                lineStyle="solid"
                lineLength={40}
            />
        </>
    );
};

export default TournamentBracketModule;