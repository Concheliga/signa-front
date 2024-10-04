export default class User{
    //#id: number;
    #firstName: string;
    #lastName: string;
    #patronymic: string;
    #gender: string;
    #group: string;
    //#email: string;
    #password: string;
    #link: string;
    //#photoLink: string;

    constructor(userData: any){
        this.#firstName = userData.firstName;
        this.#lastName = userData.lastName;
        this.#patronymic = userData.patronymic;
        this.#gender = userData.gender;
        this.#group = userData.group;
        this.#password = userData.password;
        this.#link = userData.link;
    }
}