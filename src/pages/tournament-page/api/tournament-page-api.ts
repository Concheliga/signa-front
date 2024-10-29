import axios from "axios";
import { baseURL } from "../../../constants/constants";
import { TournamentData } from "../../../interfaces/interfaces";

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
        setError('Ошибка при загрузке данных турнира.');
        setLoading(false);
    }
};

export {fetchUserData};