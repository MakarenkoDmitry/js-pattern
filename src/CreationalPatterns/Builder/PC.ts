import { VideoCard, Processor, MemoryCard, Hdd } from "./";

export class PC {
    public type: string;
    public name: string;
    public videoCard: VideoCard;
    public processor: Processor;
    public memoryCard: MemoryCard;
    public hdd: Hdd;
}
