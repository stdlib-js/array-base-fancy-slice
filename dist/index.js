"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=v(function(w,o){
var s=require('@stdlib/slice-base-normalize-slice/dist'),d=require('@stdlib/slice-base-length/dist'),g=require('@stdlib/array-base-zeros/dist'),q=require('@stdlib/array-dtype/dist'),f=require('@stdlib/blas-base-gcopy/dist').ndarray,p=require('@stdlib/error-tools-fmtprodmsg/dist');function y(e,r,l){var t,i,a,u,n;if(i=e.length,a=s(r,i,!0),a.code){if(l)throw new RangeError(p("invalid argument. Slice exceeds array bounds. Array length: %d.",i));a=s(r,i,!1)}return n=d(a),u=q(e),u==="generic"||u===null?t=g(n):t=new e.constructor(n),f(n,e,a.step,a.start,t,1,0),t}o.exports=y
});var h=c();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
