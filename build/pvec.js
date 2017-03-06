var PVec = (function () {
    function PVec(x, y, z) {
        this.set(x || 0, y || 0, z || 0);
    }
    PVec.prototype.copy = function () {
        return new PVec(this.x, this.y, this.z);
    };
    PVec.copy = function (v) {
        return v.copy();
    };
    PVec.prototype.set = function (x, y, z) {
        if (typeof x === 'object') {
            this.set(x.x, x.y, x.z);
        }
        else {
            this.x = (x !== undefined) ? x : this.x;
            this.y = (y !== undefined) ? y : this.y;
            this.z = (z !== undefined) ? z : this.z;
        }
    };
    return PVec;
}());
// Hello!
export default PVec;
