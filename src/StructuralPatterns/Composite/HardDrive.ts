import { Device } from "./";

export class HardDrive extends Device {
    constructor(price?: number) {
        super();
        this.setName("Hard Drive");
        this.price = price;
    }
}
