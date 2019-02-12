import { expect } from "chai";
import { SearchText, SearchTextAdapter } from "../src/StructuralPatterns/";
import { MainScreen } from "../src/CreationalPatterns";

describe("Creactional Patterns Test", () => {
    it("Prototype pattern", () => {
        const text = "Use the style attribute for styling HTML elements; Text style.";
        const word = "style";
        const match = new SearchText(text);
        match.searchWorldInText(word);
        expect(match.getWord()).to.equal(word);
        expect(match.getMatches().length).to.equal(2);

        const adapter = new SearchTextAdapter(match);
        expect(adapter.getMatches()).to.have.string(`This word "${match.getWord()}" found in the text: ${match.getMatches().length}`)
    });
});
