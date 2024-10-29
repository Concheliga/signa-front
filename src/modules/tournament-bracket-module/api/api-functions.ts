import axios from "axios";
import { baseURL } from "../../../constants/constants";
import { MatchTeamData } from "../../../interfaces/interfaces";

interface MatchData {
    id: string;
    nextMatchId: string;
    teams: MatchTeamData[];
}

const fetchUserData = async (
    setMatchesData: React.Dispatch<React.SetStateAction<MatchData[]>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setError: React.Dispatch<React.SetStateAction<string | null>>
) => {
    try {
        //после tournament/ должен быть id tournamenta
        const matchesResponse = await axios.get<MatchData[]>(`${baseURL}/tournament/49815da3-6eb5-4bfe-be3f-3c3ff34090a1/matches`);

        setMatchesData(matchesResponse.data);
        setLoading(false);
    } catch (err) {
        setError('Ошибка при загрузке данных матчей.');
        setLoading(false);
    }
};

export {fetchUserData};