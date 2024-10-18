import 'tournament-bracket-tree/dist/index.css';

interface UserData {
    firstName: string;
    lastName: string;
    patronymic: string;
    gender: string;
    groupNumber: string;
    vkLink: string;
}

interface TeamData {
    score: number,
    id: string,
    title: string;
    captain: UserData;
    members: UserData[];
}

interface MatchData {
    id: string;
    nextMatchId: string;
    teams: TeamData[];
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

const buildTree = (matches: MatchData[]): Tree<Game> => {
    let counter = 1;
    let power = 0;
    const rootNodes: Tree<Game>[] = [];
    let queue = [];
    while (counter < matches.length) {
        counter *= 2;
        power += 1;
    }

    matches.forEach((match) => {
        const teams = match.teams;
        if (teams.length >= 2) {
            const newNode: Tree<Game> = {
                data: {
                    teamOne: teams[0].title,
                    scoreTeamOne: teams[0].score,
                    teamTwo: teams[1].title,
                    scoreTeamTwo: teams[1].score,
                },
                left: undefined,
                right: undefined,
            };

            rootNodes.push(newNode);
        } else {
            rootNodes.unshift({
                data: {
                    teamOne: '',
                    scoreTeamOne: 0,
                    teamTwo: '',
                    scoreTeamTwo: 0,
                },
                left: undefined,
                right: undefined,
            })
        }
    });

    queue.push(rootNodes[0])
    
    for (let i = 0; i < rootNodes.length; i++) {
        let v: Tree<Game> | undefined = queue.shift();
        console.log(v)
        if (v) {
            v.data = rootNodes[i].data;
            if (i < 2 ** (power - 1) - 1) {
                if (!v.left) {
                    v.left = {
                        data: {
                            teamOne: '',
                            scoreTeamOne: 0,
                            teamTwo: '',
                            scoreTeamTwo: 0,
                        },
                        left: undefined,
                        right: undefined,
                    }
                }
                if (!v.right) {
                    v.right = {
                        data: {
                            teamOne: '',
                            scoreTeamOne: 0,
                            teamTwo: '',
                            scoreTeamTwo: 0,
                        },
                        left: undefined,
                        right: undefined,
                    }
                }
            }
            queue.push(v.left);
            queue.push(v.right);
        }
    }
    console.log(rootNodes[0]);
    return rootNodes[0];
};

export {buildTree};
