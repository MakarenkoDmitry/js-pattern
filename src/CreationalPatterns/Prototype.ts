export interface IMainScreen {
    weight: number;
    height: number;
    clone: () => MainScreen;
}

export class MainScreen implements IMainScreen {
    constructor(public weight, public height) {}
    public clone() {
        return new MainScreen(this.weight, this.height);
    }
}

export default MainScreen;
