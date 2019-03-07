import { Device } from "./";

export class Memory extends Device {
    constructor(price?: number) {
        super();
        this.setName("Memory");
        this.price = price;
    }
}
