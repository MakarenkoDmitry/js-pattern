import { PC, Hdd, MemoryCard, Processor } from "./";

export class PcBuilderOffice {
    private pc: PC;
    private name: string;
    private hdd: Hdd;
    private memoryCard: MemoryCard;
    private processor: Processor;
    constructor() {
        this.pc = new PC();
    }
    public setName(name) {
        this.pc.name = name;
    }
    public setMemoryCard(memoryCard) {
        this.pc.memoryCard = memoryCard;
    }
    public setHdd(hdd) {
        this.pc.hdd = hdd;
    }
    public setProcessor(processor) {
        this.pc.processor = processor;
    }
    public setType(type) {
        this.pc.type = type;
    }
    public getPc() {
        return this.pc;
    }
}
