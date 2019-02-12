interface IUser {
    countPage: number;
    visionPage: () => User;
}

export class User implements IUser {
    public static getInstance() {
        if (Object.is(User.instance, undefined)) {
            User.instance = new User();
        }
        return User.instance;
    }
    private static instance: User;
    public countPage: number;
    public visionPage() {
        User.instance.countPage = typeof User.instance.countPage !== "undefined" ? User.instance.countPage + 1 : 1;
        return User.instance;
    }
}

export default User;
