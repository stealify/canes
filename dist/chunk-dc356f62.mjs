import{a as canSymbol}from"./chunk-b37d91a1.mjs";import"./chunk-5f1245ff.mjs";import{a as canReflect}from"./chunk-7e0220de.mjs";import{a as define}from"./chunk-707fbcc4.mjs";import"./chunk-862b179d.mjs";import{a as dev}from"./chunk-585d4076.mjs";import{a as queues}from"./chunk-12ed728f.mjs";import{a as process$1}from"./chunk-bacf0c54.mjs";import{a as Construct}from"./chunk-a97d251a.mjs";import"./chunk-fa6b878a.mjs";import"./chunk-805ffcb4.mjs";import{a as canLog}from"./chunk-a661b1ce.mjs";import{a as addTypeEvents}from"./chunk-b2e1c1d8.mjs";import{a as ObservationRecorder}from"./chunk-8811d387.mjs";import{a as namespace}from"./chunk-3b4c7b38.mjs";var ensureMeta=function(e){var t=canSymbol.for("can.meta"),n=e[t];return n||(n={},canReflect.setKeyValue(e,t,n)),n},defineHelpers={defineExpando:define.expando,reflectSerialize:function(e){var t=this._define.definitions,n=this._define.defaultDefinition;return this.forEach(function(i,a){var s=t[a];void 0!==(i=s&&"function"==typeof s.serialize?s.serialize.call(this,i,a):n&&"function"==typeof n.serialize?n.serialize.call(this,i,a):canReflect.serialize(i))&&(e[a]=i)},this),e},reflectUnwrap:function(e){return this.forEach(function(t,n){void 0!==t&&(e[n]=canReflect.unwrap(t))}),e},log:function(e){var t=this,n=function(e){return"string"==typeof e?JSON.stringify(e):e},i=ensureMeta(t),a=i.allowedLogKeysSet||new Set;i.allowedLogKeysSet=a,e&&a.add(e),i._log=function(i,s){var r=i.type;"can.onPatches"===r||e&&!a.has(r)||"can.keys"===r||e&&!a.has(r)||("add"===r||"remove"===r?dev.log(canReflect.getName(t),"\n how   ",n(r),"\n what  ",n(s[0]),"\n index ",n(s[1])):dev.log(canReflect.getName(t),"\n key ",n(r),"\n is  ",n(s[0]),"\n was ",n(s[1])))}},deleteKey:function(e){var t=this._instanceDefinitions;if(t&&Object.prototype.hasOwnProperty.call(t,e)&&!Object.isSealed(this)){delete t[e],queues.batch.start(),this.dispatch({type:"can.keys",target:this});var n=this._data[e];void 0!==n&&(delete this._data[e],this.dispatch({type:e,target:this,patches:[{type:"delete",key:e}]},[void 0,n])),queues.batch.stop()}else this.set(e,void 0);return this}},defineHelpers_1=defineHelpers,keysForDefinition=function(e){var t=[];for(var n in e){var i=e[n];"object"==typeof i&&("serialize"in i?!i.serialize:i.get)||t.push(n)}return t};function assign(e){queues.batch.start(),canReflect.assignMap(this,e||{}),queues.batch.stop()}function update(e){queues.batch.start(),canReflect.updateMap(this,e||{}),queues.batch.stop()}function assignDeep(e){queues.batch.start(),canReflect.assignDeepMap(this,e||{}),queues.batch.stop()}function updateDeep(e){queues.batch.start(),canReflect.updateDeepMap(this,e||{}),queues.batch.stop()}function setKeyValue(e,t){defineHelpers_1.defineExpando(this,e,t)||(this[e]=t)}function getKeyValue(e){var t=this[e];return void 0!==t||e in this||Object.isSealed(this)?t:(ObservationRecorder.add(this,e),this[e])}var getSchemaSymbol=canSymbol.for("can.getSchema");function getSchema(){var e=this.prototype._define,t=e?e.definitions:{};return define.updateSchemaKeys({type:"map",identity:[],keys:{}},t)}var sealedSetup=function(e){define.setup.call(this,e||{},this.constructor.seal)},DefineMap=Construct.extend("DefineMap",{setup:function(e){var t,n=this.prototype;if(DefineMap){var i=define(n,n,e.prototype._define);for(t in define.makeDefineInstanceKey(this,i),addTypeEvents(this),DefineMap.prototype)define.defineConfigurableAndNotEnumerable(n,t,n[t]);n.setup===DefineMap.prototype.setup&&define.defineConfigurableAndNotEnumerable(n,"setup",sealedSetup);var a=Object.getOwnPropertyDescriptor(n,"_computed").get;Object.defineProperty(n,"_computed",{configurable:!0,enumerable:!1,get:function(){if(this!==n)return a.call(this,arguments)}})}else for(t in n)define.defineConfigurableAndNotEnumerable(n,t,n[t]);define.defineConfigurableAndNotEnumerable(n,"constructor",this),this[getSchemaSymbol]=getSchema}},{setup:function(e,t){this._define||(Object.defineProperty(this,"_define",{enumerable:!1,value:{definitions:{}}}),Object.defineProperty(this,"_data",{enumerable:!1,value:{}})),define.setup.call(this,e||{},!0===t)},get:function(e){return e?getKeyValue.call(this,e):canReflect.unwrap(this,Map)},set:function(e,t){return"object"==typeof e?("production"!==process$1.env.NODE_ENV&&dev.warn("can-define/map/map.prototype.set is deprecated; please use can-define/map/map.prototype.assign or can-define/map/map.prototype.update instead"),!0===t?updateDeep.call(this,e):assignDeep.call(this,e)):setKeyValue.call(this,e,t),this},assignDeep:function(e){return assignDeep.call(this,e),this},updateDeep:function(e){return updateDeep.call(this,e),this},assign:function(e){return assign.call(this,e),this},update:function(e){return update.call(this,e),this},serialize:function(){return canReflect.serialize(this,Map)},deleteKey:defineHelpers_1.deleteKey,forEach:function(){var e=function(e,t,n){return canReflect.eachKey(e,t,n)},t=ObservationRecorder.ignore(e);return function(n,i,a){return!1===a?t(this,n,i):e(this,n,i)}}(),"*":{type:define.types.observable}}),defineMapProto={"can.isMapLike":!0,"can.isListLike":!1,"can.isValueLike":!1,"can.getKeyValue":getKeyValue,"can.setKeyValue":setKeyValue,"can.deleteKeyValue":defineHelpers_1.deleteKey,"can.getOwnKeys":function(){var e=canReflect.getOwnEnumerableKeys(this);if(this._computed)for(var t,n=canReflect.getOwnKeys(this._computed),i=0;i<n.length;i++)t=n[i],e.indexOf(t)<0&&e.push(t);return e},"can.getOwnEnumerableKeys":function(){return ObservationRecorder.add(this,"can.keys"),ObservationRecorder.add(Object.getPrototypeOf(this),"can.keys"),keysForDefinition(this._define.definitions).concat(keysForDefinition(this._instanceDefinitions))},"can.hasOwnKey":function(e){return Object.hasOwnProperty.call(this._define.definitions,e)},"can.hasKey":function(e){return!!this._define.definitions[e]},"can.assignDeep":assignDeep,"can.updateDeep":updateDeep,"can.unwrap":defineHelpers_1.reflectUnwrap,"can.serialize":defineHelpers_1.reflectSerialize,"can.keyHasDependencies":function(e){return!!(this._computed&&this._computed[e]&&this._computed[e].compute)},"can.getKeyDependencies":function(e){var t;return this._computed&&this._computed[e]&&this._computed[e].compute&&((t={}).valueDependencies=new Set,t.valueDependencies.add(this._computed[e].compute)),t}};for(var prop in"production"!==process$1.env.NODE_ENV&&(defineMapProto["can.getName"]=function(){return canReflect.getName(this.constructor)+"{}"}),canReflect.assignSymbols(DefineMap.prototype,defineMapProto),canReflect.setKeyValue(DefineMap.prototype,canSymbol.iterator,function(){return new define.Iterator(this)}),define.eventsProto)DefineMap[prop]=define.eventsProto[prop],Object.defineProperty(DefineMap.prototype,prop,{enumerable:!1,value:define.eventsProto[prop],writable:!0});var eventsProtoSymbols="getOwnPropertySymbols"in Object?Object.getOwnPropertySymbols(define.eventsProto):[canSymbol.for("can.onKeyValue"),canSymbol.for("can.offKeyValue")];eventsProtoSymbols.forEach(function(e){Object.defineProperty(DefineMap.prototype,e,{configurable:!0,enumerable:!1,value:define.eventsProto[e],writable:!0})}),"production"!==process$1.env.NODE_ENV&&define.defineConfigurableAndNotEnumerable(DefineMap.prototype,"log",defineHelpers_1.log),define.DefineMap=DefineMap,Object.defineProperty(DefineMap.prototype,"toObject",{enumerable:!1,writable:!0,value:function(){return canLog.warn("Use DefineMap::get instead of DefineMap::toObject"),this.get()}});var map=namespace.DefineMap=DefineMap;export{defineHelpers_1 as a,map as b,map as c};
//# sourceMappingURL=chunk-dc356f62.js.map
