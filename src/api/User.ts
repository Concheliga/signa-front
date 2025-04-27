import { api } from "./index-api";

export default class User {
    static userURL = '/user';

    static async getUser(userId: string) {
        return api.get(`${this.userURL}/get/${userId}`);
    }

    static async search() {
        return api.get(`${this.userURL}/search`);
    }

    static async update(userId: string) {
        return api.patch(`${this.userURL}/${userId}/update`);
    }

    static async delete(userId: string) {
        return api.delete(`${this.userURL}/${userId}/delete`);
    }
}