import { UserProfile } from "./User";
import { Anonymous } from "./Anonymous";

export class UserFactory {
    public static create(name?: string): UserProfile | Anonymous {
        if (typeof name !== "undefined") {
            return new UserProfile(name);
        }
        if (typeof name === "undefined") {
            return new Anonymous();
        }
    }
}
