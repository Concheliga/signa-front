import User from "../api/User";
import Store from "../store/store";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: { value: string; label: string }[];
}

interface UserData {
    firstName: string;
    lastName: string;
    patronymic: string;
    gender: string;
    groupNumber: string;
}

interface MemberProps {
    userData: UserData | null;
    onDelete: (id: number) => void;
    id: number;
}

interface TeamData {
    score: number;
    title: string;
    tournamentId: string;
    captainId: UserData;
    membersId: UserData[];
}

interface Member {
    id: number;
    data: UserData;
}

interface CreateTeamProps {
    tournamentId: string;
    maxMembersCount: number;
}

interface MatchData {
    id: string;
    nextMatchId: string;
    teams: TeamData[];
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
    members: UserData[];
}

interface Orgs {
    organizers: UserData[] | undefined;
}

interface FormValues {
    firstName: string;
    lastName: string;
    patronymic: string;
    gender: string;
    groupNumber: string;
    link: string;
    password: string;
    email: string;
    phoneNumber: string;
    photoLink: string;
}

interface NamesProps extends React.InputHTMLAttributes<HTMLInputElement> {
    names: { name: string; value: string }[];
    setFormData: React.Dispatch<React.SetStateAction<FormValues>>;
}

interface MatchTeamData {
    score: number,
    id: string,
    title: string;
    captain: UserData;
    members: UserData[];
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

interface TournamentsDataProps {
    tournamentsData: TournamentData[] | null;
}

interface IUser {
    email: string;
    isActivated: boolean;
    id: string;
}

interface AuthorizationResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}

interface State {
    store: Store;
}

export type {
    TournamentData, SelectProps, UserData, MemberProps, TeamData, Member, CreateTeamProps,
    Orgs, FormValues, NamesProps, MatchData, MatchTeamData, Game, Tree, TournamentsDataProps,
    AuthorizationResponse, State, IUser
}