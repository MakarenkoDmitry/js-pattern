import { IHeading, IColor } from "./";

export class Heading implements IHeading {
    private readonly color: IColor;
    private readonly text: string;
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }
    public render() {
        const component = document.createElement("p");
        component.style.color = this.color.getColor();
        component.textContent = this.text;
        return component;
    }
}
