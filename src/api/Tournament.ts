import { TournamentData } from "../interfaces/interfaces";
import { api } from "./index-api";

export default class Tournament {
    static tournamentURL = '/tournaments';

    static async create(tournament: TournamentData) {
        return api.post(`${this.tournamentURL}/create`, tournament);
    }

    static async getTournament(tournamentId: string) {
        return api.get(`${this.tournamentURL}/${tournamentId}`);
    }

    static async getTournaments() {
        return api.get(this.tournamentURL);
    }

    static async update(tournamentId: string) {
        return api.patch(`${this.tournamentURL}/${tournamentId}/update`);
    }

    static async delete(tournamentId: string) {
        return api.delete(`${this.tournamentURL}/${tournamentId}/delete`);
    }
}