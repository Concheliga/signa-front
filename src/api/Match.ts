import { MatchData } from "../interfaces/interfaces";
import { api } from "./index-api";

export default class Match {
    static matchURL = '/matches';
    
    static async getMatches() {
        return api.get(this.matchURL);
    }
    
    static async create(match: MatchData) {
        return api.post(`${this.matchURL}/create`, match);
    }

    static async update(match: MatchData) {
        return api.patch(`${this.matchURL}/update`, match);
    }

    static async swap(match: MatchData) {
        return api.patch(`${this.matchURL}/swap-teams`, match);
    }

    static async finish(matchId: string) {
        return api.post(`${this.matchURL}/${matchId}/finish`);
    }
}