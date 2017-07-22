# PVec

A utility that can be used to describe a geometric vector in up to three dimensions (3D). Typically used to define components of a element or entity, usually being used to describe position, velocity, acceleration, etc.

## Fields
All vector components default to `0` if not initially set.
### `x`
The _x_ component of the vector.
### `y`
The _y_ component of the vector.
### `z`
The _z_ component of the vector.

## Methods
### [_add_](_)
Adds individual `x`, `y` and/or `z` components to a defined `PVec`, adds one defined `PVec` to another, or creates a new `PVec` from the addition of two defined `PVec`'s.
### [_angleBetween_](_)
Calculates the angle (in radians) between two defined `PVec`'s.
### [_array_](_)
Returns an `array` representation of the `PVec`.
### [_copy_](_)
Creates an indepent `PVec` from another `PVec`.
### [_cross_](_)
Calculates the cross-product of two `PVec`'s.
### [_dist_](_)
Calculates the distance between two `PVec`'s.
### [_div_](_)
Divides a `PVec` by a scalar value.
### [_dot_](_)
Calculates the dot-product of two `PVec`'s.
### [_fromAngle_](_)
Returns a 2-dimensional normalized `PVec` from a given angle (in radians).
### [_heading_](_)
Calculates the heading as an angle (in radians) from the 2-dimensional components of a `PVec`.
### [_lerp_](_)
Linearly interpolates a `PVec` to another `PVec`.
### [_limit_](_)
Limits a `PVec`'s magnitude.
### [_mag_](_)
Calculates the magnitude of a `PVec`.
### [_magSq_](_)
Calculates the magnitude squared (mag^2) of a `PVec`.
### [_mult_](_)
Multiplies a `PVec` by a scalar value.
### [_normalize_](_)
Normalizes a `PVec`, resulting in a magnitude of `1`.
### [_random2D_](_)
Generates a normalized 2-dimensional `PVec` with a random direction.
### [_random3D_](_)
Generates a normalized 3-dimensional `PVec` with a random direction.
### [_rotate_](_)
Rotates a 2-dimensional `PVec` by a given angle (in radians).
### [_set_](_)
Sets the components of a `PVec`.
### [_setMag_](_)
Sets the magnitude of a `PVec`.
### [_sub_](_)
Subtracts individual `x`, `y` and/or `z` components to a defined `PVec`, subtracts one defined `PVec` from another, or creates a new `PVec` from the subtraction of two defined `PVec`'s.
