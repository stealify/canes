import{a as commonjsGlobal,b as commonjsRequire,c as unwrapExports,d as createCommonjsModule}from"./chunk-eae5b219.mjs";import"./chunk-b270b042.mjs";import"./chunk-5f1245ff.mjs";import{a as canLog}from"./chunk-a661b1ce.mjs";import{a as canKey}from"./chunk-442dee42.mjs";import{a as canReflect}from"./chunk-7e0220de.mjs";import"./chunk-b37d91a1.mjs";import"./chunk-805ffcb4.mjs";import"./chunk-3b4c7b38.mjs";import"./chunk-b09dcf0e.mjs";import"./chunk-849fe8d8.mjs";import"./chunk-f0afc07a.mjs";import"./chunk-46f90238.mjs";import"./chunk-bacf0c54.mjs";var canMapCompat=createCommonjsModule(function(t,a){function e(t,a){var e=t.prototype;if("function"==typeof e.attr)return t;var n=!0===a;return e.attr=function(t,a){n&&canLog.warn("can-map-compat is intended for migrating away from can-map. Remove all uses of .attr() to remove this warning.");var e=typeof t,o=arguments.length;return 0===o?canReflect.unwrap(this):"string"!==e&&"number"!==e?(!0===a?canReflect.updateDeep(this,t):canReflect.assignDeep(this,t),this):1===o?canKey.get(this,t):(canKey.set(this,t,a),this)},e.removeAttr=function(t){var a=canReflect.getKeyValue(this,t);return canReflect.deleteKeyValue(this,t),a},t}(t.exports=function(t){return e(t,!0)}).makeCompat=e}),canMapCompat_1=canMapCompat.makeCompat;export default canMapCompat;
//# sourceMappingURL=can-map-compat.js.map
