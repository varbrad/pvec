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

  cross (v:PVec):PVec
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

  static cross (a:PVec, b:PVec):PVec
  static cross (a:PVec, b:PVec, target:PVec):PVec
  static cross (a:PVec, b:PVec, target?:PVec):PVec {
    if (target !== undefined) {
      a.cross(b, target)
    } else {
      target = a.cross(b)
    }
    return target
  }

  dist (v:PVec):number {
    return Math.sqrt(this.distSq(v))
  }

  static dist (a:PVec, b:PVec):number {
    return a.dist(b)
  }

  distSq (v:PVec):number {
    let dx = this.x - v.x
    let dy = this.y - v.y
    let dz = this.z - v.z
    return Math.pow(dx, 2) + Math.pow(dy, 2) + Math.pow(dz, 2)
  }

  static distSq (a:PVec, b:PVec):number {
    return a.distSq(b)
  }

  div (v:PVec):PVec
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

  static div (v:PVec, n:number):PVec
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

  dot (v:PVec):number
  dot (x:number, y:number, z:number):number
  dot (x:PVec|number, y?:number, z?:number):number {
    if (typeof x === 'object') {
      return this.x * x.x + this.y * x.y + this.z + x.z
    } else {
      return this.x * x + this.y * y + this.z * z
    }
  }

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

  /**
   * Calculates the square of the magnitude (length^2). Avoids a Math.sqrt call
   * if absolute magnitude value not needed.
   */
  magSq ():number {
    return Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2)
  }

  mult (v:PVec):PVec
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

  static mult (v:PVec, n:number):PVec
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

  normalize ():PVec
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

  static sub (a:PVec, b:PVec):PVec
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
