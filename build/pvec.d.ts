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
    /**
     * Add two vectors and return the result as a new vector.
     * @param a A vector.
     * @param b A vector.
     */
    static add(a: PVec, b: PVec): PVec;
    /**
     * Add two vectors and set target to the resulting vector.
     * @param a A vector.
     * @param b A vector.
     * @param target A vector to be set.
     */
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
     * Returns a cross-product vector from two vectors.
     * @param v A vector.
     */
    cross(v: PVec): PVec;
    /**
     * Sets a given target vector as a cross-product vector from two vectors.
     * @param v A vector.
     * @param target A vector be set as the resulting cross-product vector.
     */
    cross(v: PVec, target: PVec): PVec;
    /**
     * Returns a cross-product vector from two vectors.
     * @param a A vector.
     * @param b A Vector.
     */
    static cross(a: PVec, b: PVec): PVec;
    /**
     * Sets a given target vector as a cross-product vector from two vectors.
     * @param a A vector.
     * @param b A vector.
     * @param target A vector be set as the resulting cross-product vector.
     */
    static cross(a: PVec, b: PVec, target: PVec): PVec;
    /**
     * Returns the distance between two vectors.
     * @param v A vector.
     */
    dist(v: PVec): number;
    /**
     * Returns the distance between two vectors.
     * @param a A vector.
     * @param b A vector.
     */
    static dist(a: PVec, b: PVec): number;
    /**
     * Returns the distance^2 between two vectors. Avoids a Math.sqrt
     * call if absolute distance not required.
     * @param v A vector.
     */
    distSq(v: PVec): number;
    /**
     * Returns the distance^2 between two vectors. Avoids a Math.sqrt
     * call if absolute distance not required.
     * @param a A vector.
     * @param b A vector.
     */
    static distSq(a: PVec, b: PVec): number;
    /**
     * Divides this vector by a given vector.
     * @param v A vector.
     */
    div(v: PVec): PVec;
    /**
     * Divides this vector by a given scalar.
     * @param n A scalar.
     */
    div(n: number): PVec;
    /**
     * Returns a vector of the division between a given vector by a given scalar.
     * @param v A vector.
     * @param n A scalar.
     */
    static div(v: PVec, n: number): PVec;
    /**
     * Sets a given target vector as a the division between a given vector by a given scalar.
     * @param v A vector.
     * @param n A scalar.
     * @param target A vector be set as the resulting division vector.
     */
    static div(v: PVec, n: number, target: PVec): PVec;
    /**
     * Returns the dot-product between this vector and a given vector.
     * @param v A vector.
     */
    dot(v: PVec): number;
    /**
     * Returns the dot-product between this vector and three scalars.
     * @param x A scalar.
     * @param y A scalar.
     * @param z A scalar.
     */
    dot(x: number, y: number, z: number): number;
    /**
     * Returns the dot-product between two given vectors.
     * @param a A vector.
     * @param b A vector.
     */
    static dot(a: PVec, b: PVec): number;
    /**
     * Creates a unit vector from a given angle (in radians).
     * @param angle The angle to generate a vector from (in radians).
     */
    static fromAngle(angle: number): PVec;
    /**
     * Sets an existing vector to a unit vector with a given angle (in radians).
     * @param angle The angle to set the vector to (in radians).
     * @param target A vector be set as the resulting angled vector.
     */
    static fromAngle(angle: number, target: PVec): PVec;
    heading(): number;
    lerp(v: PVec, t: number): PVec;
    lerp(x: number, t: number): PVec;
    lerp(x: number, y: number, t: number): PVec;
    lerp(x: number, y: number, z: number, t: number): PVec;
    limit(max: number): PVec;
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
    /**
     * Multiplies this vector by a given vector.
     * @param v A vector.
     */
    mult(v: PVec): PVec;
    /**
     * Multiplies this vector by a given scalar.
     * @param n A scalar.
     */
    mult(n: number): PVec;
    /**
     * Returns a vector of the multiplication between a given vector and given scalar.
     * @param v A vector.
     * @param n A scalar.
     */
    static mult(v: PVec, n: number): PVec;
    /**
     *
     * @param v A vector.
     * @param n A scalar.
     * @param target A vector be set as the resulting multiplication vector.
     */
    static mult(v: PVec, n: number, target: PVec): PVec;
    /**
     * Normalize this vector into a unit vector (Magnitude of 1).
     */
    normalize(): PVec;
    /**
     * Returns a normalized version of this vector.
     * @param target A vector be set as the resulting normalized unit vector.
     */
    normalize(target: PVec): PVec;
    rotate(theta: number): PVec;
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
    setMag(len: number): PVec;
    setMag(target: PVec, len: number): PVec;
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
    /**
     * Return a vector of the resulting subtraction between two vectors (a-b).
     * @param a A vector.
     * @param b A vector.
     */
    static sub(a: PVec, b: PVec): PVec;
    /**
     * Set a vector to the resulting subtraction between two vectors (a-b).
     * @param a A vector.
     * @param b A vector.
     * @param target A vector to set as the resulting subtraction vector.
     */
    static sub(a: PVec, b: PVec, target: PVec): PVec;
}
export default PVec;
