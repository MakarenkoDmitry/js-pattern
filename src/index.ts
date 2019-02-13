import { Color, Heading } from "./StructuralPatterns";

const blackColor = new Color("black", 0, 0, 0);
const whiteColor = new Color("white", 255, 255, 255);

const heading1 = new Heading("Hello!", blackColor);
const heading2 = new Heading("Hello!", whiteColor);

console.log(heading1.render());
console.log(heading2.render());
