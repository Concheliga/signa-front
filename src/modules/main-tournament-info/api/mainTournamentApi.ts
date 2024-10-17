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

interface TeamData {
    title: string;
    captain: UserData;
    members: UserData[];
}

interface MatchData {
    id: string;
    nextMatchId: string;
    teamIds: string;
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
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setError: React.Dispatch<React.SetStateAction<string | null>>
    ) => {
    try {
        //после tournament/ должен быть id tournamenta
        const response = await axios.get<TournamentData>(`${baseURL}/tournament/d867bc9b-552b-4862-9136-5330b0b413fe`);

        setTournamentData(response.data);
        setLoading(false);
    } catch (err) {
        setError('Ошибка при загрузке данных пользователя.');
        setLoading(false);
    }
};

export {fetchUserData};