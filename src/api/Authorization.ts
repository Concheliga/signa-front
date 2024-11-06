import { api } from "./index-api";
import { AxiosResponse } from "axios";
import { AuthorizationResponse } from "../interfaces/interfaces";
import { FormValues } from "../interfaces/interfaces";

export default class Authorization {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthorizationResponse>> {
        return api.post<AuthorizationResponse>('/user/login', { email, password });
    }

    static async registration(user: FormValues): Promise<AxiosResponse<AuthorizationResponse>> {
        return api.post<AuthorizationResponse>('/user/register', user);
    }

    static async logout(): Promise<void> {
        return api.post('/logout');
    }
}