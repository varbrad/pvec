declare class PVec {
    x: number;
    y: number;
    z: number;
    constructor(x?: number, y?: number, z?: number);
    copy(): PVec;
    static copy(v: PVec): PVec;
    set(x: number, y?: number, z?: number): void;
}
export default PVec;
