class PVec {
  x:number
  y:number
  z:number

  constructor(x?:number, y?:number, z?:number) {
    this.set(x || 0, y || 0, z || 0)
  }

  copy ():PVec {
    return new PVec(this.x, this.y, this.z)
  }

  static copy (v:PVec):PVec {
    return v.copy()
  }

  set (x:number, y?:number, z?:number) {
    this.x = x || this.x
    this.y = y || this.y
    this.z = z || this.z
  }
}

// Hello!
export default PVec
