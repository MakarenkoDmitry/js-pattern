export interface IDevice {
    getPrice: () => number;
    getName: () => string;
    setName: (name: string) => void;
}
