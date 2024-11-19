import { makeAutoObservable } from "mobx";
import { FormValues } from "../interfaces/interfaces";
import Authorization from "../api/Authorization";
import { TournamentData } from "../interfaces/interfaces";

export default class Store {
    user = {} as FormValues;
    userID = '';
    isAuthorized = false;
    tournament = {} as TournamentData;
    tournamentId = '';

    constructor() {
        makeAutoObservable(this);
    }

    setAuthorization(isAuthorized: boolean) {
        this.isAuthorized = isAuthorized;
    }

    setUser(user: FormValues) {
        this.user = user;
    }

    setUserID(userID: string) {
        this.userID = userID;
    }

    setTournament(tournament: TournamentData) {
        this.tournament = tournament;
    }

    setTournamentId(tournamentId: string) {
        this.tournamentId = tournamentId;
    }

    async login(email: string, password: string) {
        try {
            const response = await Authorization.login(email, password);
            localStorage.setItem('token', response.data);
            this.setAuthorization(true);
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }

    async getUser() {
        try {
            const userIDResponse = await Authorization.getUserID();
            this.setUserID(userIDResponse.data);
            const userResponse = await Authorization.getUser(userIDResponse.data);
            this.setUser(userResponse.data);
            localStorage.setItem('userID', userIDResponse.data);
        }
        catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }

    async registration(user: FormValues) {
        try {
            const response = await Authorization.registration(user);
            console.log(response);
            localStorage.setItem('token', response.data);
            this.setAuthorization(true);
            this.setUser(user);
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }

    // async logout() {
    //     try {
    //         const response = await Authorization.logout();
    //         console.log(response);
    //         localStorage.removeItem('token');
    //         this.setAuthorization(false);
    //         this.setUser({} as FormValues);
    //     } catch (e:any) {
    //         console.log(e.response?.data?.message);
    //     }
    // }

    // async checkAuthorization() {
    //     try {
    //         const response = await axios.get<AuthorizationResponse>(`${baseURL}/refresh`, {withCredentials: true});
    //         console.log(response);
    //         localStorage.setItem('token', response.data.accessToken);
    //         this.setAuthorization(true);
    //         //this.setUser(response.data.user);
    //     } catch (e:any) {
    //         console.log(e.response?.data?.message);
    //     }
    // }
}