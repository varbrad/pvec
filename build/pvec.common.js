'use strict';

var PVec = (function () {
    function PVec(x, y, z) {
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
    }
    return PVec;
}());

module.exports = PVec;
