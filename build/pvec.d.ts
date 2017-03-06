declare class PVec {
    x: number;
    y: number;
    z: number;
    /**
     * Creates a new origin vector object.
     */
    constructor();
    /**
     * Create a new vector object from the given values.
     * @param x The x value of the vector.
     */
    constructor(x: number);
    /**
     * Create a new vector object from the given values.
     * @param x The x value of the vector.
     * @param y The y value of the vector.
     */
    constructor(x: number, y: number);
    /**
     * Create a new vector object from the given values.
     * @param x The x value of the vector.
     * @param y The y value of the vector.
     * @param z The z value of the vector.
     */
    constructor(x: number, y: number, z: number);
    add(v: PVec): PVec;
    add(x: number): PVec;
    add(x: number, y: number): PVec;
    add(x: number, y: number, z: number): PVec;
    static add(a: PVec, b: PVec): PVec;
    static add(a: PVec, b: PVec, target: PVec): PVec;
    /**
     * Returns a copy of the vector object.
     */
    copy(): PVec;
    /**
     * Returns a copy of the given vector object.
     * @param v The vector to copy.
     */
    static copy(v: PVec): PVec;
    /**
     * Creates a unit vector from a given angle (in radians).
     * @param angle The angle to generate a vector from (in radians).
     */
    static fromAngle(angle: number): PVec;
    /**
     * Calculates the magnitude (length) of the vector and returns the result
     * as a number.
     */
    mag(): number;
    magSq(): number;
    /**
     * Set the components of the vector.
     * @param v The vector to set this vector to.
     */
    set(v: PVec): void;
    /**
     * Set the x component of the vector.
     * @param x The x value of the vector.
     */
    set(x: number): void;
    /**
     * Set the x and y components of the vector.
     * @param x The x value of the vector.
     * @param y The y value of the vector.
     */
    set(x: number, y: number): void;
    /**
     * Set the x, y and z components of the vector.
     * @param x The x value of the vector.
     * @param y The y value of the vector.
     * @param z The z value of the vector.
     */
    set(x: number, y: number, z: number): void;
}
export default PVec;
