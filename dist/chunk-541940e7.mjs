var canStringToAny=function(n){switch(n){case"NaN":case"Infinity":return+n;case"null":return null;case"undefined":return;case"true":case"false":return"true"===n;default:var a=+n;return isNaN(a)?n:a}};export{canStringToAny as a,canStringToAny as b};
//# sourceMappingURL=chunk-541940e7.js.map
