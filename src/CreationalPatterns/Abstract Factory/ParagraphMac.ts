import { IComponent } from "./IComponent";

export class ParagraphMac implements IComponent {
    public paragraph: HTMLElement;
    constructor() {
        this.paragraph = document.createElement("p");
        this.paragraph.style.fontSize = "16px";
    }
    public render() {
        return this.paragraph;
    }
}
