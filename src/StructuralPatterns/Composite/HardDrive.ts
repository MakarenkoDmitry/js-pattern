import { Device } from "./";

export class HardDrive extends Device {
    constructor(price) {
        super();
        this.setName("Hard Drive");
        this.price = price;
    }
}
