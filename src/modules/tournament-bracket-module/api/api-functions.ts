import axios from "axios";
import { baseURL } from "../../../constants/constants";

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
    score: number;
    id: string;
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

const fetchUserData = async (
    setTournamentData: React.Dispatch<React.SetStateAction<TournamentData | null>>,
    setMatchesData: React.Dispatch<React.SetStateAction<MatchData[]>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setError: React.Dispatch<React.SetStateAction<string | null>>
) => {
    try {
        //после tournament/ должен быть id tournamenta
        const tournamentResponse = await axios.get<TournamentData>(`${baseURL}/tournament/49815da3-6eb5-4bfe-be3f-3c3ff34090a1`);
        const matchesResponse = await axios.get<MatchData[]>(`${baseURL}/tournament/49815da3-6eb5-4bfe-be3f-3c3ff34090a1/matches`);

        setTournamentData(tournamentResponse.data);
        setMatchesData(matchesResponse.data);
        setLoading(false);
    } catch (err) {
        setError('Ошибка при загрузке данных пользователя.');
        setLoading(false);
    }
};

export {fetchUserData};