import { IComponent } from "./IComponent";

export class ParagraphWin implements IComponent {
    public paragraph: HTMLElement;
    constructor() {
        this.paragraph = document.createElement("p");
        this.paragraph.style.fontSize = "18px";
    }
    public render() {
        return this.paragraph;
    }
}
