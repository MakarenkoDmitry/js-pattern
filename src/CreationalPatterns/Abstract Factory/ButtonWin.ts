import { IComponent } from "./IComponent";

export class ButtonWin implements IComponent {
    public button: HTMLElement;
    constructor() {
        this.button = document.createElement("button");
        this.button.style.background = "#2241af";
    }
    public render() {
        return this.button;
    }
}
