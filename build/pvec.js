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
            this.x = x || this.x || 0;
            this.y = y || this.y || 0;
            this.z = z || this.z || 0;
        }
    };
    return PVec;
}());
// Hello!
export default PVec;
