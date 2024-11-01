import { makeAutoObservable } from "mobx";
import { AuthorizationResponse, IUser } from "../interfaces/interfaces";
import Authorization from "../api/Authorization";
import axios from "axios";
import { baseURL } from "../constants/constants";

export default class Store {
    user = {} as IUser;
    isAuthorized = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuthorization(isAuthorized: boolean) {
        this.isAuthorized = isAuthorized;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    async login(email: string, password: string) {
        try {
            const response = await Authorization.login(email, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuthorization(true);
            this.setUser(response.data.user);
        } catch (e:any) {
            console.log(e.response?.data?.message);
        }
    }

    async registration(email: string, password: string) {
        try {
            const response = await Authorization.registration(email, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuthorization(true);
            this.setUser(response.data.user);
        } catch (e:any) {
            console.log(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            const response = await Authorization.logout();
            console.log(response);
            localStorage.removeItem('token');
            this.setAuthorization(false);
            this.setUser({} as IUser);
        } catch (e:any) {
            console.log(e.response?.data?.message);
        }
    }

    async checkAuthorization() {
        try {
            const response = await axios.get<AuthorizationResponse>(`${baseURL}/refresh`, {withCredentials: true});
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuthorization(true);
            this.setUser(response.data.user);
        } catch (e:any) {
            console.log(e.response?.data?.message);
        }
    }
}