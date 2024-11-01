import { api } from "./index-api";
import { AxiosResponse } from "axios";
import { AuthorizationResponse } from "../interfaces/interfaces";

export default class Authorization {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthorizationResponse>> {
        return api.post<AuthorizationResponse>('/login', {email, password});
    }

    static async registration(email: string, password: string): Promise<AxiosResponse<AuthorizationResponse>> {
        return api.post<AuthorizationResponse>('/registration', {email, password});
    }

    static async logout(): Promise<void> {
        return api.post('/logout');
    }
}