import { Device } from "./";

export class Processor extends Device {
    constructor(price) {
        super();
        this.setName("Processor");
        this.price = price;
    }
}
