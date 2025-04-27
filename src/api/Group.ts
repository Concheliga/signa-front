import { api } from "./index-api";

export default class Group {
    static groupURL = '/group';

    static async getGroup() {
        return api.get(this.groupURL);
    }

    static async create(group:string) {
        return api.post(`${this.groupURL}/create`, group);
    }//заглушка, исправить
}