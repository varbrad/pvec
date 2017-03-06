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
    /**
     * Add to the vector by a given vector.
     * @param v A vector that will be added to this vector.
     */
    add(v: PVec): PVec;
    /**
     * Add to the vector by the given values.
     * @param x The x value to add to the vector.
     */
    add(x: number): PVec;
    /**
     * Add to the vector by the given values.
     * @param x The x value to add to the vector.
     * @param y The y value to add to the vector.
     */
    add(x: number, y: number): PVec;
    /**
     * Add to the vector by the given values.
     * @param x The x value to add to the vector.
     * @param y The y value to add to the vector.
     * @param z The z value to add to the vector.
     */
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
    cross(v: PVec): PVec;
    cross(v: PVec, target: PVec): PVec;
    static cross(a: PVec, b: PVec): PVec;
    static cross(a: PVec, b: PVec, target: PVec): PVec;
    dist(v: PVec): number;
    static dist(a: PVec, b: PVec): number;
    distSq(v: PVec): number;
    static distSq(a: PVec, b: PVec): number;
    div(v: PVec): PVec;
    div(n: number): PVec;
    static div(v: PVec, n: number): PVec;
    static div(v: PVec, n: number, target: PVec): PVec;
    dot(v: PVec): number;
    dot(x: number, y: number, z: number): number;
    static dot(a: PVec, b: PVec): number;
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
    /**
     * Calculates the square of the magnitude (length^2). Avoids a Math.sqrt call
     * if absolute magnitude value not needed.
     */
    magSq(): number;
    mult(v: PVec): PVec;
    mult(n: number): PVec;
    static mult(v: PVec, n: number): PVec;
    static mult(v: PVec, n: number, target: PVec): PVec;
    normalize(): PVec;
    normalize(target: PVec): PVec;
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
    /**
     * Subtracts the vector by a given vector.
     * @param v The subtracting vector.
     */
    sub(v: PVec): PVec;
    /**
     * Subtract the vector by the given values.
     * @param x The x value to subtract from the vector.
     */
    sub(x: number): PVec;
    /**
     * Subtract the vector by the given values.
     * @param x The x value to subtract from the vector.
     * @param y The y value to subtract from the vector.
     */
    sub(x: number, y: number): PVec;
    /**
     * Subtract the vector by the given values.
     * @param x The x value to subtract from the vector.
     * @param y The y value to subtract from the vector.
     * @param z The z value to subtract from the vector.
     */
    sub(x: number, y: number, z: number): PVec;
    static sub(a: PVec, b: PVec): PVec;
    static sub(a: PVec, b: PVec, target: PVec): PVec;
}
export default PVec;
