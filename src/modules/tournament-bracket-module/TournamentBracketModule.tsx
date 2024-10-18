import "./css/tournament-bracket-module.css";
import { useState, useEffect } from "react";
import { fetchUserData } from "./api/api-functions";
import { TreeGenerator } from 'tournament-bracket-tree';
import 'tournament-bracket-tree/dist/index.css';
import { buildTree } from "./helpers/buildTree";
import { mapTournamentToNode } from "./helpers/mapTournamentToNode";

interface UserData {
    firstName: string;
    lastName: string;
    patronymic: string;
    gender: string;
    groupNumber: string;
    vkLink: string;
}

interface MatchData {
    id: string;
    nextMatchId: string;
    teams: TeamData[];
}

interface TeamData {
    score: number,
    id: string,
    title: string;
    captain: UserData;
    members: UserData[];
}

interface TournamentData {
    title: string;
    location: string;
    sportType: string;
    gender: string;
    startedAt: string;
    state: string;
    maxTeamsCount: string;
    regulationLink: string;
    chatLink: string;
    teams: TeamData[];
    matches: MatchData[];
    organizers: UserData[];
    currentMembersCount: number;
}

interface Game {
    teamOne: string;
    scoreTeamOne: number;
    teamTwo: string;
    scoreTeamTwo: number;
}

interface Tree<Game> {
    data: Game;
    left?: Tree<Game> | undefined;
    right?: Tree<Game> | undefined;
}

const TournamentBracketModule: React.FC = () => {
    const [tournamentData, setTournamentData] = useState<TournamentData | null>(null);
    const [matchesData, setMatchesData] = useState<MatchData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
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
        fetchUserData(setTournamentData, setMatchesData, setLoading, setError);
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

    if (loading) {
        return <p>Загрузка данных...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <main className="main">
            <h1 className="page-name">{tournamentData?.title || ''}</h1>
            <ul className="tabs">
                <li className="tab"><a href="#" className="tab-link">Основная информация</a></li>
                <li className="tab"><a href="#" className="tab-link">Участники</a></li>
                <li className="tab active"><a href="#" className="tab-link">Турнирная сетка</a></li>
                <li className="tab"><a href="#" className="tab-link">Результаты турнира</a></li>
            </ul>
            <h2 className="groups-title">Групповой этап</h2>
            <div className="table-container">
                <div className="table">
                    <h3 className="group-name-title">Группа А</h3>
                    <div className="table-row">
                        <div className="team">Команда 1</div>
                        <div className="score">3</div>
                    </div>
                    <div className="table-row">
                        <div className="team">Команда 2</div>
                        <div className="score">1</div>
                    </div>
                    <div className="table-row">
                        <div className="team">Команда 3</div>
                        <div className="score">3</div>
                    </div>
                    <div className="table-row">
                        <div className="team">Команда 4</div>
                        <div className="score">1</div>
                    </div>
                </div>

                <div className="table">
                    <h3 className="group-name-title">Группа Б</h3>
                    <div className="table-row">
                        <div className="team">Команда 1</div>
                        <div className="score">3</div>
                    </div>
                    <div className="table-row">
                        <div className="team">Команда 2</div>
                        <div className="score">1</div>
                    </div>
                    <div className="table-row">
                        <div className="team">Команда 3</div>
                        <div className="score">3</div>
                    </div>
                    <div className="table-row">
                        <div className="team">Команда 4</div>
                        <div className="score">1</div>
                    </div>
                </div>

                <div className="table">
                    <h3 className="group-name-title">Группа В</h3>
                    <div className="table-row">
                        <div className="team">Команда 1</div>
                        <div className="score">3</div>
                    </div>
                    <div className="table-row">
                        <div className="team">Команда 2</div>
                        <div className="score">1</div>
                    </div>
                    <div className="table-row">
                        <div className="team">Команда 3</div>
                        <div className="score">3</div>
                    </div>
                    <div className="table-row">
                        <div className="team">Команда 4</div>
                        <div className="score">1</div>
                    </div>
                </div>

                <div className="table">
                    <h3 className="group-name-title">Группа Г</h3>
                    <div className="table-row">
                        <div className="team">Команда 1</div>
                        <div className="score">3</div>
                    </div>
                    <div className="table-row">
                        <div className="team">Команда 2</div>
                        <div className="score">1</div>
                    </div>
                    <div className="table-row">
                        <div className="team">Команда 3</div>
                        <div className="score">3</div>
                    </div>
                    <div className="table-row">
                        <div className="team">Команда 4</div>
                        <div className="score">1</div>
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
        </main>
    );
};

export default TournamentBracketModule;