(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.pvec = factory());
}(this, (function () { 'use strict';

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
    PVec.prototype.cross = function (v, target) {
        var x = this.y * v.z - v.y * this.z;
        var y = this.z * v.x - v.z * this.x;
        var z = this.x * v.y - v.x * this.y;
        if (target !== undefined) {
            target.set(x, y, z);
        }
        else {
            target = new PVec(x, y, z);
        }
        return target;
    };
    PVec.cross = function (a, b, target) {
        if (target !== undefined) {
            a.cross(b, target);
        }
        else {
            target = a.cross(b);
        }
        return target;
    };
    /**
     * Returns the distance between two vectors.
     * @param v A vector.
     */
    PVec.prototype.dist = function (v) {
        return Math.sqrt(this.distSq(v));
    };
    /**
     * Returns the distance between two vectors.
     * @param a A vector.
     * @param b A vector.
     */
    PVec.dist = function (a, b) {
        return a.dist(b);
    };
    /**
     * Returns the distance^2 between two vectors. Avoids a Math.sqrt
     * call if absolute distance not required.
     * @param v A vector.
     */
    PVec.prototype.distSq = function (v) {
        var dx = this.x - v.x;
        var dy = this.y - v.y;
        var dz = this.z - v.z;
        return Math.pow(dx, 2) + Math.pow(dy, 2) + Math.pow(dz, 2);
    };
    /**
     * Returns the distance^2 between two vectors. Avoids a Math.sqrt
     * call if absolute distance not required.
     * @param a A vector.
     * @param b A vector.
     */
    PVec.distSq = function (a, b) {
        return a.distSq(b);
    };
    PVec.prototype.div = function (a) {
        if (typeof a === 'object') {
            this.x /= a.x;
            this.y /= a.y;
            this.z /= a.z;
        }
        else {
            this.x /= a;
            this.y /= a;
            this.z /= a;
        }
        return this;
    };
    PVec.div = function (v, n, target) {
        if (target !== undefined) {
            target.set(v);
        }
        else {
            target = v.copy();
        }
        target.div(n);
        return target;
    };
    PVec.prototype.dot = function (x, y, z) {
        if (typeof x === 'object') {
            return this.x * x.x + this.y * x.y + this.z * x.z;
        }
        else {
            return this.x * x + this.y * y + this.z * z;
        }
    };
    /**
     * Returns the dot-product between two given vectors.
     * @param a A vector.
     * @param b A vector.
     */
    PVec.dot = function (a, b) {
        return a.dot(b);
    };
    PVec.fromAngle = function (angle, target) {
        var x = Math.cos(angle);
        var y = Math.sin(angle);
        if (target !== undefined) {
            target.set(x, y, 0);
        }
        else {
            target = new PVec(x, y, 0);
        }
        return target;
    };
    PVec.prototype.heading = function () {
        return Math.atan2(this.y, this.x);
    };
    PVec.prototype.lerp = function (a, b, c, d) {
        if (typeof a === 'object') {
            var dv = PVec.sub(a, this);
            dv.mult(b);
            this.add(dv);
            return this;
        }
        else {
            var v = void 0, t = void 0;
            if (d !== undefined) {
                v = new PVec(a, b, c);
                t = d;
            }
            else if (c !== undefined) {
                v = new PVec(a, b, this.z);
                t = c;
            }
            else if (b !== undefined) {
                v = new PVec(a, this.y, this.z);
                t = b;
            }
            var dv = PVec.sub(v, this);
            dv.mult(t);
            this.add(dv);
            return this;
        }
    };
    PVec.prototype.limit = function (max) {
        if (this.magSq() > max * max) {
            this.setMag(max);
        }
        return this;
    };
    /**
     * Calculates the magnitude (length) of the vector and returns the result
     * as a number.
     */
    PVec.prototype.mag = function () {
        return Math.sqrt(this.magSq());
    };
    /**
     * Calculates the square of the magnitude (length^2). Avoids a Math.sqrt call
     * if absolute magnitude value not needed.
     */
    PVec.prototype.magSq = function () {
        return Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2);
    };
    PVec.prototype.mult = function (a) {
        if (typeof a === 'object') {
            this.x *= a.x;
            this.y *= a.y;
            this.z *= a.z;
        }
        else {
            this.x *= a;
            this.y *= a;
            this.z *= a;
        }
        return this;
    };
    PVec.mult = function (v, n, target) {
        if (target !== undefined) {
            target.set(v);
        }
        else {
            target = v.copy();
        }
        target.mult(n);
        return target;
    };
    PVec.prototype.normalize = function (target) {
        var m = this.mag();
        if (target !== undefined) {
            if (m > 0) {
                target.set(this.x / m, this.y / m, this.z / m);
            }
            else {
                target.set(this);
            }
            return target;
        }
        else {
            if (m !== 0 && m !== 1) {
                this.div(m);
            }
            return this;
        }
    };
    PVec.prototype.rotate = function (theta) {
        var t = this.x;
        this.x = this.x * Math.cos(theta) - this.y * Math.sin(theta);
        this.y = t * Math.sin(theta) - this.y * Math.cos(theta);
        return this;
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
    PVec.prototype.setMag = function (a, b) {
        if (typeof a === 'object') {
            a = this.normalize(a);
            a.mult(b);
            return a;
        }
        else {
            this.normalize();
            this.mult(a);
            return this;
        }
    };
    PVec.prototype.sub = function (x, y, z) {
        if (typeof x === 'object') {
            this.x -= x.x;
            this.y -= x.y;
            this.z -= x.z;
        }
        else {
            this.x -= x || 0;
            this.y -= y || 0;
            this.z -= z || 0;
        }
        return this;
    };
    PVec.sub = function (a, b, target) {
        if (target !== undefined) {
            target.set(a);
        }
        else {
            target = a.copy();
        }
        target.sub(b);
        return target;
    };
    return PVec;
}());

return PVec;

})));
