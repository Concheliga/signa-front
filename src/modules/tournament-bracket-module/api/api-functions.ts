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
        const matchesResponse = await axios.get<MatchData[]>(`${baseURL}/tournament/fb7ade12-684a-4c36-b1a0-aeb2b5c30cd8/matches`);

        setMatchesData(matchesResponse.data);
        setLoading(false);
    } catch (err) {
        setError('Ошибка при загрузке данных матчей.');
        setLoading(false);
    }
};

export {fetchUserData};