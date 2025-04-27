import { api } from "./index-api";
import { FormValues } from "../interfaces/interfaces";

export default class Authorization {
    static authURL = '/auth';
    
    static async login(email: string, password: string) {
        return api.post(`${this.authURL}/login`, { email, password });
    }

    static async registration(user: FormValues) {
        return api.post(`${this.authURL}/register`, user);
    }

    static async logout(): Promise<void> {
        return api.post(`${this.authURL}/logout`);
    }

    static async getUserID() {
        return api.get(`${this.authURL}/get-user-id`);
    }

    static async getRole() {
        return api.get(`${this.authURL}/get-role`);
    }

    static async getUser(userID: string) {
        return api.get<FormValues>(`/${userID}`);
    }
}