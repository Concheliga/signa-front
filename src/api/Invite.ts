import { api } from "./index-api";

export default class Invite {
    static inviteURL = '/invites';
    
    static async create(teamId: string) {
        return api.post(`${this.inviteURL}/${teamId}/create`);
    }

    static async getSendedInvite(captainId: string) {
        return api.get(`${this.inviteURL}/${captainId}/sent`);
    }

    static async getInvite(userId: string) {
        return api.get(`${this.inviteURL}/${userId}`);
    }

    static async accept(inviteId: string) {
        return api.patch(`${this.inviteURL}/${inviteId}/accept`);
    }

    static async discard(inviteId: string) {
        return api.patch(`${this.inviteURL}/${inviteId}/discard`);
    }
}