import { ButtonWin, ParagraphWin } from "./";

export class WinFactory {
    public button: HTMLElement;
    public paragraph: HTMLElement;

    constructor() {
        const button = new ButtonWin();
        const paragraph = new ParagraphWin();
        this.button = button.render();
        this.paragraph = paragraph.render();
    }
}
