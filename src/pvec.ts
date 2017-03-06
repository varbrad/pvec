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

  /**
   * Add to the vector by a given vector.
   * @param v A vector that will be added to this vector.
   */
  add (v:PVec):PVec
  /**
   * Add to the vector by the given values.
   * @param x The x value to add to the vector.
   */
  add (x:number):PVec
  /**
   * Add to the vector by the given values.
   * @param x The x value to add to the vector.
   * @param y The y value to add to the vector.
   */
  add (x:number, y:number):PVec
  /**
   * Add to the vector by the given values.
   * @param x The x value to add to the vector.
   * @param y The y value to add to the vector.
   * @param z The z value to add to the vector.
   */
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

  /**
   * Add two vectors and return the result as a new vector.
   * @param a A vector.
   * @param b A vector.
   */
  static add (a:PVec, b:PVec):PVec
  /**
   * Add two vectors and set target to the resulting vector.
   * @param a A vector.
   * @param b A vector.
   * @param target A vector to be set.
   */
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
   * Returns a cross-product vector from two vectors.
   * @param v A vector.
   */
  cross (v:PVec):PVec
  /**
   * Sets a given target vector as a cross-product vector from two vectors.
   * @param v A vector.
   * @param target A vector be set as the resulting cross-product vector.
   */
  cross (v:PVec, target:PVec):PVec
  cross (v:PVec, target?:PVec):PVec {
    let x = this.y * v.z - v.y * this.z
    let y = this.z * v.x - v.z * this.x
    let z = this.x * v.y - v.x * this.y
    if (target !== undefined) {
      target.set(x, y, z)
    } else {
      target = new PVec(x, y, z)
    }
    return target
  }

  /**
   * Returns a cross-product vector from two vectors.
   * @param a A vector.
   * @param b A Vector.
   */
  static cross (a:PVec, b:PVec):PVec
  /**
   * Sets a given target vector as a cross-product vector from two vectors.
   * @param a A vector.
   * @param b A vector.
   * @param target A vector be set as the resulting cross-product vector.
   */
  static cross (a:PVec, b:PVec, target:PVec):PVec
  static cross (a:PVec, b:PVec, target?:PVec):PVec {
    if (target !== undefined) {
      a.cross(b, target)
    } else {
      target = a.cross(b)
    }
    return target
  }

  /**
   * Returns the distance between two vectors.
   * @param v A vector.
   */
  dist (v:PVec):number {
    return Math.sqrt(this.distSq(v))
  }

  /**
   * Returns the distance between two vectors.
   * @param a A vector.
   * @param b A vector.
   */
  static dist (a:PVec, b:PVec):number {
    return a.dist(b)
  }

  /**
   * Returns the distance^2 between two vectors. Avoids a Math.sqrt
   * call if absolute distance not required.
   * @param v A vector.
   */
  distSq (v:PVec):number {
    let dx = this.x - v.x
    let dy = this.y - v.y
    let dz = this.z - v.z
    return Math.pow(dx, 2) + Math.pow(dy, 2) + Math.pow(dz, 2)
  }

  /**
   * Returns the distance^2 between two vectors. Avoids a Math.sqrt
   * call if absolute distance not required.
   * @param a A vector.
   * @param b A vector.
   */
  static distSq (a:PVec, b:PVec):number {
    return a.distSq(b)
  }

  /**
   * Divides this vector by a given vector.
   * @param v A vector.
   */
  div (v:PVec):PVec
  /**
   * Divides this vector by a given scalar.
   * @param n A scalar.
   */
  div (n:number):PVec
  div (a:PVec|number):PVec {
    if (typeof a === 'object') {
      this.x /= a.x
      this.y /= a.y
      this.z /= a.z
    } else {
      this.x /= a
      this.y /= a
      this.z /= a
    }
    return this
  }

  /**
   * Returns a vector of the division between a given vector by a given scalar.
   * @param v A vector.
   * @param n A scalar.
   */
  static div (v:PVec, n:number):PVec
  /**
   * Sets a given target vector as a the division between a given vector by a given scalar.
   * @param v A vector.
   * @param n A scalar.
   * @param target A vector be set as the resulting division vector.
   */
  static div (v:PVec, n:number, target:PVec):PVec
  static div (v:PVec, n:number, target?:PVec):PVec {
    if (target !== undefined) {
      target.set(v)
    } else {
      target = v.copy()
    }
    target.div(n)
    return target
  }

  /**
   * Returns the dot-product between this vector and a given vector.
   * @param v A vector.
   */
  dot (v:PVec):number
  /**
   * Returns the dot-product between this vector and three scalars.
   * @param x A scalar.
   * @param y A scalar.
   * @param z A scalar.
   */
  dot (x:number, y:number, z:number):number
  dot (x:PVec|number, y?:number, z?:number):number {
    if (typeof x === 'object') {
      return this.x * x.x + this.y * x.y + this.z + x.z
    } else {
      return this.x * x + this.y * y + this.z * z
    }
  }

  /**
   * Returns the dot-product between two given vectors.
   * @param a A vector.
   * @param b A vector.
   */
  static dot (a:PVec, b:PVec):number {
    return a.dot(b)
  }

  /**
   * Creates a unit vector from a given angle (in radians).
   * @param angle The angle to generate a vector from (in radians).
   */
  static fromAngle(angle:number):PVec
  /**
   * Sets an existing vector to a unit vector with a given angle (in radians).
   * @param angle The angle to set the vector to (in radians).
   * @param target A vector be set as the resulting angled vector.
   */
  static fromAngle(angle:number, target:PVec):PVec
  static fromAngle(angle:number, target?:PVec):PVec {
    let x:number = Math.cos(angle)
    let y:number = Math.sin(angle)
    if (target !== undefined) {
      target.set(x, y, 0)
    } else {
      target = new PVec(x, y, 0)
    }
    return target
  }

  /**
   * Calculates the magnitude (length) of the vector and returns the result
   * as a number.
   */
  mag ():number {
    return Math.sqrt(this.magSq())
  }

  /**
   * Calculates the square of the magnitude (length^2). Avoids a Math.sqrt call
   * if absolute magnitude value not needed.
   */
  magSq ():number {
    return Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2)
  }

  /**
   * Multiplies this vector by a given vector.
   * @param v A vector.
   */
  mult (v:PVec):PVec
  /**
   * Multiplies this vector by a given scalar.
   * @param n A scalar.
   */
  mult (n:number):PVec
  mult (a:PVec|number):PVec {
    if (typeof a === 'object') {
      this.x *= a.x
      this.y *= a.y
      this.z *= a.z
    } else {
      this.x *= a
      this.y *= a
      this.z *= a
    }
    return this
  }

  /**
   * Returns a vector of the multiplication between a given vector and given scalar.
   * @param v A vector.
   * @param n A scalar.
   */
  static mult (v:PVec, n:number):PVec
  /**
   * 
   * @param v A vector.
   * @param n A scalar.
   * @param target A vector be set as the resulting multiplication vector.
   */
  static mult (v:PVec, n:number, target:PVec):PVec
  static mult (v:PVec, n:number, target?:PVec):PVec {
    if (target !== undefined) {
      target.set(v)
    } else {
      target = v.copy()
    }
    target.mult(n)
    return target
  }

  /**
   * Normalize this vector into a unit vector (Magnitude of 1).
   */
  normalize ():PVec
  /**
   * Returns a normalized version of this vector.
   * @param target A vector be set as the resulting normalized unit vector.
   */
  normalize (target:PVec):PVec
  normalize (target?:PVec):PVec {
    let m = this.mag()
    if (target !== undefined) {
      if (m > 0) {
        target.set(this.x / m, this.y / m, this.z / m)
      } else {
        target.set(this)
      }
      return target
    } else {
      if (m !== 0 && m !== 1) {
        this.div(m)
      }
      return this
    }
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

  /**
   * Subtracts the vector by a given vector.
   * @param v The subtracting vector.
   */
  sub (v:PVec):PVec
  /**
   * Subtract the vector by the given values.
   * @param x The x value to subtract from the vector.
   */
  sub (x:number):PVec
  /**
   * Subtract the vector by the given values.
   * @param x The x value to subtract from the vector.
   * @param y The y value to subtract from the vector.
   */
  sub (x:number, y:number):PVec
  /**
   * Subtract the vector by the given values.
   * @param x The x value to subtract from the vector.
   * @param y The y value to subtract from the vector.
   * @param z The z value to subtract from the vector.
   */
  sub (x:number, y:number, z:number):PVec
  sub (x:PVec|number, y?:number, z?:number):PVec {
    if (typeof x === 'object') {
      this.x -= x.x
      this.y -= x.y
      this.z -= x.z
    } else {
      this.x -= x || 0
      this.y -= y || 0
      this.z -= z || 0
    }
    return this
  }

  /**
   * Return a vector of the resulting subtraction between two vectors (a-b).
   * @param a A vector.
   * @param b A vector.
   */
  static sub (a:PVec, b:PVec):PVec
  /**
   * Set a vector to the resulting subtraction between two vectors (a-b).
   * @param a A vector.
   * @param b A vector.
   * @param target A vector to set as the resulting subtraction vector.
   */
  static sub (a:PVec, b:PVec, target:PVec):PVec
  static sub (a:PVec, b:PVec, target?:PVec):PVec {
    if (target !== undefined) {
      target.set(a)
    } else {
      target = a.copy()
    }
    target.sub(b)
    return target
  }
}



export default PVec
