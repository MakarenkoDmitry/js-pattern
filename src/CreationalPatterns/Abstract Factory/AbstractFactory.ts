import { MacFactory, WinFactory } from "./";

export class AbstractFactory {
    public static create(type) {
        switch (type) {
            case "windows":
                return new WinFactory();
            case "macOS":
                return new MacFactory();
            default:
                throw new Error(`No this type: ${type}`);
        }
    }
}
