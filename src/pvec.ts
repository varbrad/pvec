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
      this.x = (x !== undefined) ? x : this.x
      this.y = (y !== undefined) ? y : this.y
      this.z = (z !== undefined) ? z : this.z
    }
  }
}

// Hello!
export default PVec
