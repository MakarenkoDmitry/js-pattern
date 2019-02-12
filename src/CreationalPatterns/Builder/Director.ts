import { Hdd, VideoCard, MemoryCard, Processor, PcBuilderGamer, PcBuilderOffice } from "./";

export class Director {
    public pc;
    public type: string;
    constructor(type) {
        this.type = type;
        if (type === "office") {
            this.pc = new PcBuilderOffice();
        } else if (type === "gamer") {
            this.pc = new PcBuilderGamer();
        }
        this.pc.setType(type);
    }
    public buildPc(name) {
        if (this.type === "office") {
            switch (name) {
                case "s1": {
                    this.pc.setName(name);
                    this.pc.setMemoryCard(new MemoryCard("GeForce x6", 8));
                    this.pc.setHdd(new Hdd("hub1", 10000));
                    this.pc.setProcessor(new Processor("AMD Ryzen 5 ", 3400));
                }
            }
        } else if (this.type === "gamer") {
            switch (name) {
                case "game1": {
                    this.pc.setName(name);
                    this.pc.setMemoryCard(new MemoryCard("GeForce x6", 8));
                    this.pc.setVideoCard(new VideoCard("AMD Radeon RX 580", 8192));
                    this.pc.setHdd(new Hdd("hub1", 10000));
                    this.pc.setProcessor(new Processor("AMD Ryzen 5 ", 3400));
                }
            }
        }
    }
    public getPc() {
        return this.pc.getPc();
    }
}
