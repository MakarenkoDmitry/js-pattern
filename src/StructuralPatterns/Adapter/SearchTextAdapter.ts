import { SearchText } from "./index";
export class SearchTextAdapter {
    public searchText: SearchText;
    constructor(searchText) {
        this.searchText = searchText;
    }
    public getMatches() {
        return `This word "${this.searchText.getWord()}" found in the text: ${this.searchText.getMatches().length}`;
    }
}
