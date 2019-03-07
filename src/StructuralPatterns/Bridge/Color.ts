import { IColor } from "./";

export class Color implements IColor {
    private name: string;
    private readonly r: number;
    private readonly g: number;
    private readonly b: number;
    constructor(name, r, g, b) {
        this.name = name;
        this.r = r;
        this.g = g;
        this.b = b;
    }
    public getColor() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
}
