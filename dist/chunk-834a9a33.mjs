function flatten(e){return e.reduce(function(e,t){return e.concat(t)},[])}function makeInterfaceValidator(e){var t=flatten(e);return function(e){var a=t.reduce(function(t,a){return a in e?t:t.concat(a)},[]);return a.length?{message:"missing expected properties",related:a}:void 0}}var canValidateInterface;export{makeInterfaceValidator as a,makeInterfaceValidator as b};
//# sourceMappingURL=chunk-834a9a33.js.map
