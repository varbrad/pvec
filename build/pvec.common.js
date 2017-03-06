'use strict';

var PVec = (function () {
    function PVec(x, y, z) {
        this.set(x || 0, y || 0, z || 0);
    }
    PVec.prototype.add = function (x, y, z) {
        if (typeof x === 'object') {
            this.x += x.x;
            this.y += x.y;
            this.z += x.z;
        }
        else {
            this.x += x || 0;
            this.y += y || 0;
            this.z += z || 0;
        }
        return this;
    };
    PVec.add = function (a, b, target) {
        if (target !== undefined) {
            target.set(a);
        }
        else {
            target = a.copy();
        }
        target.add(b);
        return target;
    };
    /**
     * Returns a copy of the vector object.
     */
    PVec.prototype.copy = function () {
        return new PVec(this.x, this.y, this.z);
    };
    /**
     * Returns a copy of the given vector object.
     * @param v The vector to copy.
     */
    PVec.copy = function (v) {
        return v.copy();
    };
    /**
     * Sets an existing vector to a unit vector with a given angle (in radians).
     * @param angle The angle to set the vector to (in radians).
     * @param v A vector to modify.
     */
    PVec.fromAngle = function (angle, v) {
        var x = Math.cos(angle);
        var y = Math.sin(angle);
        if (v !== undefined) {
            v.set(x, y, 0);
        }
        else {
            v = new PVec(x, y, 0);
        }
        return v;
    };
    /**
     * Calculates the magnitude (length) of the vector and returns the result
     * as a number.
     */
    PVec.prototype.mag = function () {
        return Math.sqrt(this.magSq());
    };
    PVec.prototype.magSq = function () {
        return Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2);
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

module.exports = PVec;
