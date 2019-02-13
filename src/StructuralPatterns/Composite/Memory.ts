import { Device } from "./";

export class Memory extends Device {
    constructor(price) {
        super();
        this.setName("Memory");
        this.price = price;
    }
}
