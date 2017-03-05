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
  
  set (x:PVec):void
  set (x:number, y:number, z:number):void
  set (x:PVec|number, y?:number, z?:number):void {
    if (typeof x === 'object') {
      this.set(x.x, x.y, x.z)
    } else {
      this.x = x || this.x || 0
      this.y = y || this.y || 0
      this.z = z || this.z || 0
    }
  }
}

// Hello!
export default PVec
