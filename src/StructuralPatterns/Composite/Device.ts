import { IDevice } from "./";

export class Device implements IDevice {
    public name: string;
    public price: number;
    public getPrice() {
        return this.price || 0;
    }
    public getName() {
        return this.name;
    }
    public setName(name) {
        this.name = name;
    }
}
