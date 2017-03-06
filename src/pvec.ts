class PVec {
  x:number
  y:number
  z:number

  /**
   * Creates a new origin vector object.
   */
  constructor()
  /**
   * Create a new vector object from the given values.
   * @param x The x value of the vector.
   */
  constructor(x:number)
  /**
   * Create a new vector object from the given values.
   * @param x The x value of the vector.
   * @param y The y value of the vector.
   */
  constructor(x:number, y:number)
  /**
   * Create a new vector object from the given values.
   * @param x The x value of the vector.
   * @param y The y value of the vector.
   * @param z The z value of the vector.
   */
  constructor(x:number, y:number, z:number)
  constructor(x?:number, y?:number, z?:number) {
    this.set(x || 0, y || 0, z || 0)
  }

  add (v:PVec):PVec
  add (x:number):PVec
  add (x:number, y:number):PVec
  add (x:number, y:number, z:number):PVec
  add (x:PVec|number, y?:number, z?:number):PVec {
    if (typeof x === 'object') {
      this.x += x.x
      this.y += x.y
      this.z += x.z
    } else {
      this.x += x || 0
      this.y += y || 0
      this.z += z || 0
    }
    return this
  }

  static add (a:PVec, b:PVec):PVec
  static add (a:PVec, b:PVec, target:PVec):PVec
  static add (a:PVec, b:PVec, target?:PVec):PVec {
    if (target !== undefined) {
      target.set(a)
    } else {
      target = a.copy()
    }
    target.add(b)
    return target
  }

  /**
   * Returns a copy of the vector object.
   */
  copy ():PVec {
    return new PVec(this.x, this.y, this.z)
  }

  /**
   * Returns a copy of the given vector object.
   * @param v The vector to copy.
   */
  static copy (v:PVec):PVec {
    return v.copy()
  }

  /**
   * Creates a unit vector from a given angle (in radians).
   * @param angle The angle to generate a vector from (in radians).
   */
  static fromAngle(angle:number):PVec
  /**
   * Sets an existing vector to a unit vector with a given angle (in radians).
   * @param angle The angle to set the vector to (in radians).
   * @param v A vector to modify.
   */
  static fromAngle(angle:number, v?:PVec):PVec {
    let x:number = Math.cos(angle)
    let y:number = Math.sin(angle)
    if (v !== undefined) {
      v.set(x, y, 0)
    } else {
      v = new PVec(x, y, 0)
    }
    return v
  }

  /**
   * Calculates the magnitude (length) of the vector and returns the result
   * as a number.
   */
  mag ():number {
    return Math.sqrt(this.magSq())
  }

  magSq ():number {
    return Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2)
  }
  
  /**
   * Set the components of the vector.
   * @param v The vector to set this vector to.
   */
  set (v:PVec):void
  /**
   * Set the x component of the vector.
   * @param x The x value of the vector.
   */
  set (x:number):void
  /**
   * Set the x and y components of the vector.
   * @param x The x value of the vector.
   * @param y The y value of the vector.
   */
  set (x:number, y:number):void
  /**
   * Set the x, y and z components of the vector.
   * @param x The x value of the vector.
   * @param y The y value of the vector.
   * @param z The z value of the vector. 
   */
  set (x:number, y:number, z:number):void
  set (x:PVec|number, y?:number, z?:number):void {
    if (typeof x === 'object') {
      this.set(x.x, x.y, x.z)
    } else {
      this.x = (x !== undefined) ? x : this.x
      this.y = (y !== undefined) ? y : this.y
      this.z = (z !== undefined) ? z : this.z
    }
  }
}

export default PVec
