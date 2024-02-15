// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-normalize-slice@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-length@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zeros@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.2.0-esm/index.mjs";import{ndarray as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-gcopy@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function d(d,m,l){var o,a,j,c,h;if(a=d.length,(j=e(m,a,!0)).code){if(l)throw new RangeError(n("invalid argument. Slice exceeds array bounds. Array length: %d.",a));j=e(m,a,!1)}return h=s(j),o="generic"===(c=r(d))||null===c?t(h):new d.constructor(h),i(h,d,j.step,j.start,o,1,0),o}export{d as default};
//# sourceMappingURL=index.mjs.map
