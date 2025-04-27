import { api } from "./index-api";

export default class Download {
    static downloadhURL = '/download';

    static async user(tournamentId: string) {
        return api.get(`${this.downloadhURL}/user/${tournamentId}`);
    }
}