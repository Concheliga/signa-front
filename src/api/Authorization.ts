import { api } from "./index-api";
import { FormValues } from "../interfaces/interfaces";

export default class Authorization {
    static async login(email: string, password: string) {
        return api.post('/login', { email, password });
    }

    static async registration(user: FormValues) {
        return api.post('/register', user);
    }

    static async logout(): Promise<void> {
        return api.post('/logout');
    }

    static async getUserID() {
        return api.get('/get-user-id');
    }

    static async getUser(userID: string) {
        return api.get<FormValues>(`/${userID}`);
    }
}