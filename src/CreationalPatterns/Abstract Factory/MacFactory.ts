import { ButtonMac, ParagraphMac } from "./";

export class MacFactory {
    public button: HTMLElement;
    public paragraph: HTMLElement;

    constructor() {
        const button = new ButtonMac();
        const paragraph = new ParagraphMac();
        this.button = button.render();
        this.paragraph = paragraph.render();
    }
}
