import { IComponent } from "./IComponent";

export class ButtonMac implements IComponent {
    public button: HTMLElement;
    constructor() {
        this.button = document.createElement("button");
        this.button.style.background = "#a0a3af";
        this.button.style.borderRadius = "5px";
    }
    public render() {
        return this.button;
    }
}
