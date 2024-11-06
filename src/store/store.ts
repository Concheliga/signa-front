import { makeAutoObservable } from "mobx";
import { FormValues } from "../interfaces/interfaces";
import Authorization from "../api/Authorization";
import { TournamentData } from "../interfaces/interfaces";

export default class Store {
    user = {} as FormValues;
    isAuthorized = false;
    tournament = {} as TournamentData;

    constructor() {
        makeAutoObservable(this);
    }

    setAuthorization(isAuthorized: boolean) {
        this.isAuthorized = isAuthorized;
    }

    setUser(user: FormValues) {
        this.user = user;
    }

    setTournament(tournament: TournamentData){
        this.tournament = tournament;
        console.log(tournament);
    }

    async login(email: string, password: string) {
        try {
            const response = await Authorization.login(email, password);
            console.log(response);
            //localStorage.setItem('token', response.data.accessToken);
            this.setAuthorization(true);
            //this.setUser(user);
        } catch (e:any) {
            console.log(e.response?.data?.message);
        }
    }

    async registration(user: FormValues) {
        try {
            const response = await Authorization.registration(user);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuthorization(true);
            this.setUser(user);
        } catch (e:any) {
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