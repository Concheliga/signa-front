import { api } from "./index-api";
import { AxiosResponse } from "axios";
import { IUser } from "../interfaces/interfaces";

export default class User {
    static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return api.get<IUser[]>('/users');
    }
}