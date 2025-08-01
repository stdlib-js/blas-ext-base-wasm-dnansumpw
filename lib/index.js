/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* WebAssembly routine to compute the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation.
*
* @module @stdlib/blas-ext-base-wasm-dnansumpw
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
* var dnansumpw = require( '@stdlib/blas-ext-base-wasm-dnansumpw' );
*
* // Define a strided array:
* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
*
* // Perform operation:
* var v = dnansumpw.main( x.length, x, 1 );
* // returns 1.0
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
* var dnansumpw = require( '@stdlib/blas-ext-base-wasm-dnansumpw' );
*
* // Define a strided array:
* var x = new Float64Array( [ 2.0, 1.0, NaN, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* // Perform operation:
* var v = dnansumpw.ndarray( 4, x, 2, 1 );
* // returns 5.0
*
* @example
* var Memory = require( '@stdlib/wasm-memory' );
* var oneTo = require( '@stdlib/array-one-to' );
* var zeros = require( '@stdlib/array-zeros' );
* var dnansumpw = require( '@stdlib/blas-ext-base-wasm-dnansumpw' );
*
* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
* var mem = new Memory({
*     'initial': 10,
*     'maximum': 100
* });
*
* // Create a BLAS routine:
* var mod = new dnansumpw.Module( mem );
* // returns <Module>
*
* // Initialize the routine:
* mod.initializeSync();
*
* // Define a vector data type:
* var dtype = 'float64';
*
* // Specify a vector length:
* var N = 3;
*
* // Define a pointer (i.e., byte offset) for storing the input vector:
* var xptr = 0;
*
* // Write vector values to module memory:
* mod.write( xptr, oneTo( N, dtype ) );
*
* // Perform computation:
* var v = mod.main( N, xptr, 1 );
* // returns 6.0
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var Module = require( './module.js' );


// MAIN //

setReadOnly( main, 'Module', Module );


// EXPORTS //

module.exports = main;

// exports: { "Module": "main.Module" }
