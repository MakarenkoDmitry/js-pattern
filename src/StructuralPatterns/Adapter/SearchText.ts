export class SearchText {
    public text: string;
    public word: string;
    public matches: number[];
    constructor(text) {
        this.text = text;
    }
    public searchWorldInText(word) {
        this.word = word;
        this.matches = [];
        let index = 0;
        let position;
        while (true) {
            position = this.text.indexOf(word, index);
            if (position === -1) break;
            index = position + 1;
            this.matches.push(position);
        }
    }
    public getWord(): string {
        return this.word;
    }
    public getMatches(): number[] {
        return this.matches;
    }
}
