import { TeamData } from "../interfaces/interfaces";
import { api } from "./index-api";

export default class Team {
    static teamURL = '/teams';
    
    static async create(team: TeamData) {
        return api.post(`${this.teamURL}/create`, team);
    }

    static async getTeam(teamId: string) {
        return api.get(`${this.teamURL}/${teamId}`);
    }

    static async getTeams() {
        return api.get(`${this.teamURL}/get-teams`);
    }

    static async update(teamId: string) {
        return api.patch(`${this.teamURL}/${teamId}/update`);
    }

    static async discard(teamId: string) {
        return api.delete(`${this.teamURL}/${teamId}/delete`);
    }
}