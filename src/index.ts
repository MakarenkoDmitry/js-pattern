class Singleton {
    public static getInstance() {
        if (Object.is(Singleton.instance, null)) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
    private static instance;
    constructor() {
        if (Object.is(Singleton.instance, undefined)) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
}

let obj1 = new Singleton();
obj1.name = "start";
let obj2 = new Singleton();
console.log(obj2 === obj1);
