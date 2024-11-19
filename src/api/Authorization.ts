import { api } from "./index-api";
import { AxiosResponse } from "axios";
import { FormValues } from "../interfaces/interfaces";

export default class Authorization {
    static async login(email: string, password: string): Promise<AxiosResponse<string>> {
        return api.post<string>('/login', { email, password });
    }

    static async registration(user: FormValues): Promise<AxiosResponse<string>> {
        return api.post<string>('/register', user);
    }

    static async logout(): Promise<void> {
        return api.post('/logout');
    }

    static async getUserID(): Promise<AxiosResponse<string>> {
        return api.get<string>('/get-user-id');
    }

    static async getUser(userID: string): Promise<AxiosResponse<FormValues>> {
        return api.get<FormValues>(`/${userID}`);
    }
}