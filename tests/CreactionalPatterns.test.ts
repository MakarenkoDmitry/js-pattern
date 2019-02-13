import { expect } from "chai";
import { MainScreen } from "../src/CreationalPatterns/Prototype";
import { User } from "../src/CreationalPatterns/Singleton";
import { UserFactory } from "../src/CreationalPatterns/Factory";
import { AbstractFactory, WinFactory, MacFactory } from "../src/CreationalPatterns/Abstract Factory";
import { Director, PC } from "../src/CreationalPatterns/Builder";

describe("Creactional Patterns Test", () => {
    it("Prototype pattern", () => {
        const width = 200;
        const height = 400;
        const screen = new MainScreen(width, height);
        const screen2 = screen.clone();
        expect(screen2.weight).to.equal(width);
        expect(screen2.height).to.equal(height);
        expect(screen2).to.be.instanceOf(MainScreen);
        expect(screen === screen2).to.be.false;
    });
    it("Singleton pattern", () => {
        const user1 = User.getInstance();
        const user2 = User.getInstance();
        user1.visionPage();
        user2.visionPage();
        expect(user1.countPage).to.equal(2);
        expect(user2.countPage).to.equal(2);
        expect(user1).to.equal(user2);
        expect(user1 === user2).to.be.true;
    });
    it("Factory pattern", () => {
        const name = "Eich";
        const user1 = UserFactory.create(name);
        const user2 = UserFactory.create();
        expect(user1).to.have.property("name");
        expect(user1).to.have.property("id");
        expect(user2).to.have.property("id");
        expect(user1 === user2).to.be.false;
    });
    it("Abstract Factory pattern", () => {
        const windowsDisplay = AbstractFactory.create("windows");
        const macDisplay = AbstractFactory.create("macOS");
        expect(AbstractFactory.create).to.throw();
        expect(windowsDisplay).to.be.instanceOf(WinFactory);
        expect(macDisplay).to.be.instanceOf(MacFactory);
    });
    it("Builder pattern", () => {
        const office = new Director("office");
        const game = new Director("gamer");
        office.buildPc("s1");
        game.buildPc("game1");
        const pcOffice = office.getPc();
        const pcGame = game.getPc();
        expect(pcOffice).to.be.instanceOf(PC);
        expect(pcGame).to.be.instanceOf(PC);
        expect(pcOffice.type).to.equal("office");
        expect(pcGame.type).to.equal("gamer");
    });
});
