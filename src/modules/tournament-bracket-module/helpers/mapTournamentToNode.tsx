import { Game } from "../../../interfaces/interfaces";

const mapTournamentToNode = (game: Game) => {
    return (
        <div className="teams-match">
            <div className="upper-team">
                <p className="team-name">{game.teamOne}</p>
                <p className="game-score">{game.scoreTeamOne}</p>
            </div>
            <div className="down-team">
                <p className="team-name" >{game.teamTwo}</p>
                <p className="game-score" >{game.scoreTeamTwo}</p>
            </div>
        </div>
    );
};

export {mapTournamentToNode};