import { PostTournamentData } from "../../../interfaces/interfaces";

const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, setFormData: React.Dispatch<React.SetStateAction<PostTournamentData>>) => {
    const { name, value } = e.target;
    const numbers:string[] = [
        'teamsMembersMaxNumber', 'teamsMembersMinNumber', 'minFemaleCount', 'minMaleCount',
        'maxTeamsCount'
]
    if (numbers.includes(name)) {
        setFormData(prevState => ({
        ...prevState,
        [name]: Number(value)
    }));
    } else {
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    
};

const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>, setFormData: React.Dispatch<React.SetStateAction<PostTournamentData>>) => {
    setFormData(prevState => ({
        ...prevState,
        sportType: e.target.value
    }));
};

export { onInputChange, onSelectChange};