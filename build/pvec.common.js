'use strict';

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
        this.x = x || this.x;
        this.y = y || this.y;
        this.z = z || this.z;
    };
    return PVec;
}());

module.exports = PVec;
