export class UserProfile {
    public name: string;
    public id: number;

    constructor(name) {
        this.name = name;
        this.id = Date.now();
    }
}
