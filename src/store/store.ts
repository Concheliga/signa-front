import { makeAutoObservable } from "mobx";
import { FormValues } from "../interfaces/interfaces";
import Authorization from "../api/Authorization";

export default class Store {
    user = {} as FormValues;
    isAuthorized = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuthorization(isAuthorized: boolean) {
        this.isAuthorized = isAuthorized;
    }

    setUser(user: FormValues) {
        this.user = user;
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