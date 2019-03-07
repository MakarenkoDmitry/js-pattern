import { Device } from "./";

export class Composite extends Device {
    private components: Device[];
    constructor() {
        super();
        this.components = [];
    }
    public add(component) {
        this.components.push(component);
        return this;
    }
    public getPrice(): number {
        return this.components
            .map(component => component.getPrice())
            .reduce((prevPrice, nextPrice) => prevPrice + nextPrice);
    }
}
