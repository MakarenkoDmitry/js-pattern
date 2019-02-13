import { expect } from "chai";
import { SearchText, SearchTextAdapter, Heading, Color } from "../src/StructuralPatterns/";

describe("Structural Patterns Test", () => {
    it("Adapter pattern", () => {
        const text = "Use the style attribute for styling HTML elements; Text style.";
        const word = "style";
        const match = new SearchText(text);
        match.searchWorldInText(word);
        expect(match.getWord()).to.equal(word);
        expect(match.getMatches().length).to.equal(2);

        const adapter = new SearchTextAdapter(match);
        expect(adapter.getMatches()).to.have.string(`This word "${match.getWord()}" found in the text: ${match.getMatches().length}`)
    });
    it("Bridge pattern", () => {
        const black = [0, 0, 0];
        const white = [255, 255, 255];
        const text1 = "Hello1";
        const text2 = "Hello2";
        const blackColor = new Color("black", black[0], black[1], black[2]);
        const whiteColor = new Color("white", white[0], white[1], white[2]);
        expect(blackColor.getColor()).equal(`rgb(${black.join(", ")})`);
        expect(whiteColor.getColor()).equal(`rgb(${white.join(", ")})`);

        const heading1 = new Heading(text1, blackColor);
        const heading2 = new Heading(text2, whiteColor);
        const component1 = heading1.render();
        const component2 = heading2.render();
        expect(component1.style.color).equal(blackColor.getColor());
        expect(component2.style.color).equal(whiteColor.getColor());
        expect(component1.textContent).equal(text1);
        expect(component2.textContent).equal(text2);
    });
});
