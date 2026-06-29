"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var l=v(function(w,c){
var o=require('@stdlib/slice-base-normalize-slice/dist'),d=require('@stdlib/slice-base-length/dist'),g=require('@stdlib/array-base-zeros/dist'),q=require('@stdlib/array-dtype/dist'),f=require('@stdlib/blas-base-gcopy/dist').ndarray,p=require('@stdlib/error-tools-fmtprodmsg/dist');function y(e,r,u){var t,i,a,s,n;if(i=e.length,a=o(r,i,!0),a.code){if(u)throw new RangeError(p('1rJFS',i));a=o(r,i,!1)}return n=d(a),s=q(e),s==="generic"||s===null?t=g(n):t=new e.constructor(n),f(n,e,a.step,a.start,t,1,0),t}c.exports=y
});var h=l();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
