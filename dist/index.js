"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=u(function(G,l){
var R=require("path").resolve,W=require('@stdlib/fs-read-wasm/dist').sync,A=W(R(__dirname,"..","src","main.wasm"));l.exports=A
});var d=u(function(H,m){
var O=require('@stdlib/assert-is-wasm-memory/dist'),y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),S=require('@stdlib/utils-inherit/dist'),q=require('@stdlib/wasm-module-wrapper/dist'),g=require('@stdlib/error-tools-fmtprodmsg/dist'),j=c();function n(e){if(!(this instanceof n))return new n(e);if(!O(e))throw new TypeError(g('nullH0',e));return q.call(this,j,e,{env:{memory:e}}),this}S(n,q);y(n.prototype,"main",function(r,i,t){return this._instance.exports.stdlib_strided_dnansumpw(r,i,t)});y(n.prototype,"ndarray",function(r,i,t,o){return this._instance.exports.stdlib_strided_dnansumpw_ndarray(r,i,t,o)});m.exports=n
});var h=u(function(I,w){
var f=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=require('@stdlib/utils-inherit/dist'),B=require('@stdlib/strided-base-stride2offset/dist'),E=require('@stdlib/wasm-memory/dist'),T=require('@stdlib/wasm-base-arrays2ptrs/dist'),V=require('@stdlib/wasm-base-strided2object/dist'),p=d();function a(){return this instanceof a?(p.call(this,new E({initial:0})),this):new a}z(a,p);f(a.prototype,"main",function(r,i,t){return this.ndarray(r,i,t,B(r,t))});f(a.prototype,"ndarray",function(r,i,t,o){var v,s;return v=T(this,[V(r,i,t,o)]),s=v[0],p.prototype.ndarray.call(this,r,s.ptr,s.stride,s.offset)});w.exports=a
});var b=u(function(J,_){
var k=h(),M=new k;M.initializeSync();_.exports=M
});var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=b(),D=d();C(x,"Module",D);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
