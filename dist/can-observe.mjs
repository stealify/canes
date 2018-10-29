import{a as canSymbol}from"./chunk-b37d91a1.mjs";import{a as process$1}from"./chunk-bacf0c54.mjs";import{a as commonjsGlobal,b as commonjsRequire,c as unwrapExports,d as createCommonjsModule}from"./chunk-eae5b219.mjs";import"./chunk-7dfeb1df.mjs";import"./chunk-fa6b878a.mjs";import"./chunk-f8a6947c.mjs";import"./chunk-5f1245ff.mjs";import{a as Observation}from"./chunk-c1d5d21e.mjs";import{a as ObservationRecorder}from"./chunk-8811d387.mjs";import{a as mapEventBindings}from"./chunk-910f3205.mjs";import{a as canReflect}from"./chunk-7e0220de.mjs";import{a as addTypeEvents}from"./chunk-b2e1c1d8.mjs";import"./chunk-862b179d.mjs";import{a as queues}from"./chunk-12ed728f.mjs";import{a as AsyncObservable,b as ResolverObservable}from"./chunk-8f9d5c6d.mjs";import"./chunk-805ffcb4.mjs";import"./chunk-3b4c7b38.mjs";import"./chunk-585d4076.mjs";import"./chunk-79943599.mjs";import"./chunk-2c9f11a8.mjs";import"./chunk-b1806013.mjs";import"./chunk-a9b254be.mjs";import"./chunk-8d049599.mjs";import"./chunk-d2889630.mjs";import"./chunk-825526fa.mjs";import"./chunk-037c51df.mjs";import"./chunk-14877182.mjs";import"./chunk-cc1f8896.mjs";import"./chunk-e7f43bec.mjs";import"./chunk-cb75b84f.mjs";import"./chunk-bd824939.mjs";import"./chunk-75bea8d8.mjs";import"./chunk-660b4975.mjs";import"./chunk-576d20b1.mjs";import"./chunk-65b62c71.mjs";var Symbols={metaSymbol:canSymbol.for("can.meta"),patchesSymbol:"can.patches",keysSymbol:"can.keys"},ObservableStore={proxiedObjects:new WeakMap,proxies:new WeakSet},metaSymbol=canSymbol.for("can.meta"),classTest=/^\s*class\s+/,helpers={assignEverything:function(e,t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e},isBuiltInButNotArrayOrPlainObject:function(e){if(Array.isArray(e))return!1;if("function"==typeof e)return e.toString().indexOf("[native code]")>0;var t=Object.prototype.toString.call(e);return"[object Object]"!==t&&-1!==t.indexOf("[object ")},inheritsFromArray:function(e){var t=e;do{if(Array.isArray(t))return!0;t=Object.getPrototypeOf(t)}while(t);return!1},isClass:function(e){return"function"==typeof e&&classTest.test(e.toString())},supportsClass:function(){try{return eval('"use strict"; class A{};'),!0}catch(e){return!1}}(),makeSimpleExtender:function(e){return function(t,r,n){var o=function(){var t=e.apply(this,arguments);return this.init&&(t[metaSymbol].preventSideEffects++,this.init.apply(t,arguments),t[metaSymbol].preventSideEffects--),t};return helpers.assignEverything(o,e),helpers.assignEverything(o,r||{}),o.extend=helpers.makeSimpleExtender(o),o.prototype=Object.create(e.prototype),helpers.assignEverything(o.prototype,n||{}),o.prototype.constructor=o,"production"!==process$1.env.NODE_ENV&&Object.defineProperty(o,"name",{value:t}),o}},assignNonEnumerable:function(e,t,r){return Object.defineProperty(e,t,{enumerable:!1,writable:!0,configurable:!0,value:r})}},Helpers=helpers,ComputedHelpers=createCommonjsModule(function(e){var t=canSymbol.for("can.meta"),r=canSymbol.for("can.computedPropertyDefinitions"),n=canSymbol.for("can.onKeyValue"),o=canSymbol.for("can.offKeyValue");function s(e,t,r){this.instance=e,this.prop=t,this.observation=r,this.forward=this.forward.bind(this)}function i(e,n){var o=e[t],i=o.target[r];if(void 0!==i){var a=i[n];if(void 0!==a)return void 0===o.computedKeys[n]&&(o.computedKeys[n]=new s(e,n,a(e,n))),o.computedKeys[n]}}s.prototype.bind=function(){this.bindingCount++,1===this.bindingCount&&this.observation.on(this.forward,"notify")},s.prototype.unbind=function(){this.bindingCount--,0===this.bindingCount&&this.observation.off(this.forward,"notify")},s.prototype.forward=function(e,t){mapEventBindings.dispatch.call(this.instance,{type:this.prop,target:this.instance},[e,t])},s.prototype.bindingCount=0;var a=e.exports={get:function(e,t){var r=i(e,t);if(void 0!==r)return ObservationRecorder.add(e,t.toString()),0===r.bindingCount&&ObservationRecorder.isRecording()&&Observation.temporarilyBind(r.observation),{value:canReflect.getValue(r.observation)}},set:function(e,t,r){var n=i(e,t);if(void 0===n)return!1;if("production"!==process$1.env.NODE_ENV&&void 0===n.observation[canSymbol.for("can.setValue")])throw new Error('Cannot set "'+t+'" on '+canReflect.getName(e));return canReflect.setValue(n.observation,r),!0},bind:function(e,t){var r=i(e,t);void 0!==r&&r.bind()},unbind:function(e,t){var r=i(e,t);void 0!==r&&r.unbind()},addKeyDependencies:function(e){var t=e[n],r=e[o];canReflect.assignSymbols(e,{"can.onKeyValue":function(e,r,n){return a.bind(this,e),t.apply(this,arguments)},"can.offKeyValue":function(e,t,n){return a.unbind(this,e),r.apply(this,arguments)},"can.getKeyDependencies":function(e){var t=i(this,e);if(void 0!==t)return{valueDependencies:new Set([t.observation])}}})},addMethodsAndSymbols:function(e){e.prototype.addEventListener=function(e,t,r){return a.bind(this,e),mapEventBindings.addEventListener.call(this,e,t,r)},e.prototype.removeEventListener=function(e,t,r){return a.unbind(this,e),mapEventBindings.removeEventListener.call(this,e,t,r)}},ensureDefinition:function(e){if(!e.hasOwnProperty(r)){var t=e[r],n=e[r]=Object.create(t||null);Object.getOwnPropertyNames(e).forEach(function(t){if("constructor"!==t){var r=Object.getOwnPropertyDescriptor(e,t);if(void 0!==r.get){var o=r.get;n[t]=function(e,t){return new Observation(o,e)}}}})}return e[r]}}}),ComputedHelpers_1=ComputedHelpers.get,ComputedHelpers_2=ComputedHelpers.set,ComputedHelpers_3=ComputedHelpers.bind,ComputedHelpers_4=ComputedHelpers.unbind,ComputedHelpers_5=ComputedHelpers.addKeyDependencies,ComputedHelpers_6=ComputedHelpers.addMethodsAndSymbols,ComputedHelpers_7=ComputedHelpers.ensureDefinition,hasOwn=Object.prototype.hasOwnProperty,isSymbolLike=canReflect.isSymbolLike,proxyKeys=Object.create(null);Object.getOwnPropertySymbols(mapEventBindings).forEach(function(e){Helpers.assignNonEnumerable(proxyKeys,e,mapEventBindings[e])}),ComputedHelpers.addKeyDependencies(proxyKeys);var makeObject={observable:function(e,t){void 0===t.shouldRecordObservation&&(t.shouldRecordObservation=makeObject.shouldRecordObservationOnOwnAndMissingKeys);var r={target:e,proxyKeys:void 0!==t.proxyKeys?t.proxyKeys:Object.create(makeObject.proxyKeys()),computedKeys:Object.create(null),options:t,preventSideEffects:0};Helpers.assignNonEnumerable(r.proxyKeys,Symbols.metaSymbol,r);var n={get:makeObject.get.bind(r),set:makeObject.set.bind(r),ownKeys:makeObject.ownKeys.bind(r),deleteProperty:makeObject.deleteProperty.bind(r),getOwnPropertyDescriptor:makeObject.getOwnPropertyDescriptor.bind(r),meta:r};return t.getPrototypeOf&&(n.getPrototypeOf=t.getPrototypeOf),r.proxy=new Proxy(e,n),mapEventBindings.addHandlers(r.proxy,r),r.proxy},proxyKeys:function(){return proxyKeys},get:function(e,t,r){var n=this.proxyKeys[t];if(void 0!==n)return n;if(isSymbolLike(t))return e[t];var o=ComputedHelpers.get(r,t);if(void 0!==o)return o.value;var s=makeObject.getKeyInfo(e,t,r,this),i=s.targetValue;return s.valueIsInvariant||(i=makeObject.getValueFromStore(t,i,this)),this.options.shouldRecordObservation(s,this)&&ObservationRecorder.add(this.proxy,t.toString()),s.parentObservableGetCalledOn&&ObservationRecorder.add(s.parentObservableGetCalledOn,t.toString()),i},set:function(e,t,r,n){return n!==this.proxy?makeObject.setKey(n,t,r,this):!0===ComputedHelpers.set(n,t,r)||(r=makeObject.getValueToSet(t,r,this),makeObject.setValueAndOnChange(t,r,this,function(e,t,r,n,o){var s=[canReflect.getName(r.proxy)+" set",e,"to",t],i={type:e,patches:[{key:e,type:n?"set":"add",value:t}],keyChanged:n?void 0:e};"production"!==process$1.env.NODE_ENV&&(i.reasonLog=s),mapEventBindings.dispatch.call(r.proxy,i,[t,o])}),!0)},deleteProperty:function(e,t){var r=this.target[t],n=delete this.target[t];if(n&&0===this.preventSideEffects&&void 0!==r){var o=[canReflect.getName(this.proxy)+" deleted",t],s={type:t,patches:[{key:t,type:"delete"}],keyChanged:t};"production"!==process$1.env.NODE_ENV&&(s.reasonLog=o),mapEventBindings.dispatch.call(this.proxy,s,[void 0,r])}return n},ownKeys:function(e,t){return ObservationRecorder.add(this.proxy,Symbols.keysSymbol),Object.getOwnPropertyNames(this.target).concat(Object.getOwnPropertySymbols(this.target)).concat(Object.getOwnPropertySymbols(this.proxyKeys))},getOwnPropertyDescriptor:function(e,t){var r=Object.getOwnPropertyDescriptor(e,t);return!r&&t in this.proxyKeys?Object.getOwnPropertyDescriptor(this.proxyKeys,t):r},getKeyInfo:function(e,t,r,n){var o=Object.getOwnPropertyDescriptor(e,t),s={key:t,descriptor:o,targetHasOwnKey:Boolean(o),getCalledOnParent:r!==n.proxy,protoHasKey:!1,valueIsInvariant:!1,targetValue:void 0,isAccessor:!1};return!0===s.getCalledOnParent&&(s.parentObservableGetCalledOn=ObservableStore.proxiedObjects.get(r)),void 0!==o?(s.valueIsInvariant=!1===o.writable,void 0!==o.get?(s.targetValue=o.get.call(s.parentObservableGetCalledOn||r),s.isAccessor=!0):s.targetValue=o.value):(s.targetValue=n.target[t],s.protoHasKey=void 0!==s.targetValue||t in e),s},shouldRecordObservationOnOwnAndMissingKeys:function(e,t){return 0===t.preventSideEffects&&!e.isAccessor&&(e.targetHasOwnKey||!e.protoHasKey&&!Object.isSealed(t.target))},setKey:function(e,t,r){return Object.defineProperty(e,t,{value:r,configurable:!0,enumerable:!0,writable:!0}),!0},getValueToSet:function(e,t,r){return!canReflect.isSymbolLike(e)&&r.handlers.getNode([e])?makeObject.getValueFromStore(e,t,r):t},getValueFromStore:function(e,t,r){return canReflect.isPrimitive(t)||canReflect.isObservableLike(t)||ObservableStore.proxies.has(t)||(ObservableStore.proxiedObjects.has(t)?t=ObservableStore.proxiedObjects.get(t):Helpers.isBuiltInButNotArrayOrPlainObject(t)||(t=r.options.observe(t))),t},setValueAndOnChange:function(e,t,r,n){var o,s=hasOwn.call(r.target,e),i=Object.getOwnPropertyDescriptor(r.target,e);i&&i.set?i.set.call(r.proxy,t):(o=r.target[e])!==t&&(r.target[e]=t,0===r.preventSideEffects&&n(e,t,r,s,o))}},MakeObject=makeObject,isSymbolLike$1=canReflect.isSymbolLike,isInteger=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e};function didLengthChangeCauseDeletions(e,t,r){return"length"===e&&t<r}var mutateMethods={push:function(e,t){return[{index:e.length-t.length,deleteCount:0,insert:t,type:"splice"}]},pop:function(e){return[{index:e.length,deleteCount:1,insert:[],type:"splice"}]},shift:function(){return[{index:0,deleteCount:1,insert:[],type:"splice"}]},unshift:function(e,t){return[{index:0,deleteCount:0,insert:t,type:"splice"}]},splice:function(e,t){return[{index:t[0],deleteCount:t[1],insert:t.slice(2),type:"splice"}]},sort:function(e){return[{index:0,deleteCount:e.length,insert:e,type:"splice"}]},reverse:function(e,t,r){return[{index:0,deleteCount:e.length,insert:e,type:"splice"}]}};canReflect.eachKey(mutateMethods,function(e,t){var r=Array.prototype[t],n=function(){var n=this[Symbols.metaSymbol],o=0===n.preventSideEffects,s=n.target.length;n.preventSideEffects++;var i=r.apply(n.target,arguments),a=e(n.target,Array.from(arguments),s);if(!0===o){var c=[canReflect.getName(n.proxy)+"."+t+" called with",arguments],p={type:"length",patches:a};"production"!==process$1.env.NODE_ENV&&(p.reasonLog=c),mapEventBindings.dispatch.call(n.proxy,p,[n.target.length,s])}return n.preventSideEffects--,i};"production"!==process$1.env.NODE_ENV&&Object.defineProperty(n,"name",{value:t}),ObservableStore.proxiedObjects.set(r,n),ObservableStore.proxies.add(n)}),Object.getOwnPropertyNames(Array.prototype).forEach(function(e){var t=Array.prototype[e];if(!ObservableStore.proxiedObjects.has(t)&&"constructor"!==e&&"function"==typeof t){var r=function(){ObservationRecorder.add(this,Symbols.patchesSymbol);var e=this[Symbols.metaSymbol];e.preventSideEffects++;var r=t.apply(this,arguments);return e.preventSideEffects--,e.options.observe(r)};"production"!==process$1.env.NODE_ENV&&Object.defineProperty(r,"name",{value:e}),ObservableStore.proxiedObjects.set(t,r),ObservableStore.proxies.add(r)}});var proxyKeys$1=Helpers.assignEverything(Object.create(null),MakeObject.proxyKeys()),makeArray={observable:function(e,t){void 0===t.shouldRecordObservation&&(t.shouldRecordObservation=MakeObject.shouldRecordObservationOnOwnAndMissingKeys);var r={target:e,proxyKeys:void 0!==t.proxyKeys?t.proxyKeys:Object.create(makeArray.proxyKeys()),computedKeys:Object.create(null),options:t,preventSideEffects:0};return r.proxyKeys[Symbols.metaSymbol]=r,r.proxy=new Proxy(e,{get:MakeObject.get.bind(r),set:makeArray.set.bind(r),ownKeys:MakeObject.ownKeys.bind(r),deleteProperty:MakeObject.deleteProperty.bind(r),meta:r}),mapEventBindings.addHandlers(r.proxy,r),r.proxy},proxyKeys:function(){return proxyKeys$1},set:function(e,t,r,n){if(n!==this.proxy)return MakeObject.setKey(n,t,r,this);if(!0===ComputedHelpers.set(n,t,r))return!0;r=MakeObject.getValueToSet(t,r,this);var o=e.length;return MakeObject.setValueAndOnChange(t,r,this,function(t,r,n,s,i){var a=[{key:t,type:s?"set":"add",value:r}],c=!isSymbolLike$1(t)&&+t;isInteger(c)&&(!s&&c>o?a.push({index:o,deleteCount:0,insert:e.slice(o),type:"splice"}):a.push.apply(a,mutateMethods.splice(e,[c,1,r]))),didLengthChangeCauseDeletions(t,r,i,n)&&a.push({index:r,deleteCount:i-r,insert:[],type:"splice"});var p=[canReflect.getName(n.proxy)+" set",t,"to",r],d={type:t,patches:a,keyChanged:s?void 0:t};"production"!==process$1.env.NODE_ENV&&(d.reasonLog=p),mapEventBindings.dispatch.call(n.proxy,d,[r,i])}),!0}},MakeArray=makeArray,makeObserve={observe:function(e){if(canReflect.isPrimitive(e))return e;var t=ObservableStore.proxiedObjects.get(e);return t||(ObservableStore.proxies.has(e)?e:Helpers.isBuiltInButNotArrayOrPlainObject(e)?e:(t="function"==typeof e?makeObserve.function(e):Helpers.inheritsFromArray(e)?makeObserve.array(e):makeObserve.object(e),ObservableStore.proxiedObjects.set(e,t),ObservableStore.proxies.add(t),t))},object:null,array:null,function:null},MakeObserve=makeObserve,proxyKeys$2=Helpers.assignEverything(Object.create(null),MakeObject.proxyKeys());addTypeEvents(proxyKeys$2),canReflect.assignSymbols(proxyKeys$2,{"can.defineInstanceKey":function(e,t){this[Symbols.metaSymbol].definitions[e]=t}});var makeFunction={observable:function(e,t){void 0===t.shouldRecordObservation&&(t.shouldRecordObservation=MakeObject.shouldRecordObservationOnOwnAndMissingKeys);var r=Object.create(makeFunction.proxyKeys()),n={target:e,proxyKeys:r,computedKeys:Object.create(null),options:t,definitions:{},isClass:Helpers.isClass(e),preventSideEffects:0};if(r[Symbols.metaSymbol]=n,n.proxy=new Proxy(e,{get:MakeObject.get.bind(n),set:MakeObject.set.bind(n),ownKeys:MakeObject.ownKeys.bind(n),deleteProperty:MakeObject.deleteProperty.bind(n),construct:makeFunction.construct.bind(n),apply:makeFunction.apply.bind(n),meta:n}),mapEventBindings.addHandlers(n.proxy,n),addTypeEvents.addHandlers(n.proxy,n),ObservableStore.proxiedObjects.set(e,n.proxy),ObservableStore.proxies.add(n.proxy),n.target.prototype&&n.target.prototype.constructor===n.target){var o=MakeObject.observable(n.target.prototype,{getPrototypeOf:function(){return n.target.prototype},observe:MakeObserve.observe});ObservableStore.proxiedObjects.set(n.target.prototype,o),ObservableStore.proxies.add(o),n.proxy.prototype.constructor=n.proxy}return n.proxy},construct:function(e,t,r){var n,o;if(this.isClass){for(o in n=Reflect.construct(e,t,r),this.definitions)Object.defineProperty(n,o,this.definitions[o]);return this.options.observe(n)}for(o in n=Object.create(this.proxy.prototype),this.definitions)Object.defineProperty(n,o,this.definitions[o]);var s=this.options.observe(n);s[Symbols.metaSymbol].preventSideEffects++;var i=e.apply(s,t);return s[Symbols.metaSymbol].preventSideEffects--,i||s},apply:function(e,t,r){var n=this.target.apply(t,r);return this.options.observe(n)},proxyKeys:function(){return proxyKeys$2}},MakeFunction=makeFunction,TypeHelpers=createCommonjsModule(function(e){var t=canSymbol.for("can.meta"),r=canSymbol.for("can.typeDefinitions"),n=e.exports={ensureDefinition:function(e){var t=e[r];if(!t){var n=e[r];t=e[r]=Object.create(n||null)}return t},addMethodsAndSymbols:function(e){canReflect.assignSymbols(e,{"can.defineInstanceKey":function(e,t){n.ensureDefinition(this.prototype)[e]=t},"can.dispatchInstanceBoundChange":function(e,r){var n=this[t];if(n){var o=n.lifecycleHandlers;o&&queues.enqueueByQueue(o.getNode([]),this,[e,r])}}})},shouldRecordObservationOnAllKeysExceptFunctionsOnProto:function(e,t){return 0===t.preventSideEffects&&!e.isAccessor&&(e.targetHasOwnKey||!e.protoHasKey&&!Object.isSealed(t.target)||e.protoHasKey&&"function"!=typeof targetValue)}}}),TypeHelpers_1=TypeHelpers.ensureDefinition,TypeHelpers_2=TypeHelpers.addMethodsAndSymbols,TypeHelpers_3=TypeHelpers.shouldRecordObservationOnAllKeysExceptFunctionsOnProto,definitionsSymbol=canSymbol.for("can.typeDefinitions"),proxyKeys$3=Helpers.assignEverything({},MakeObject.proxyKeys());ComputedHelpers.addKeyDependencies(proxyKeys$3);var ObserveObject=function(e){var t=Object.getPrototypeOf(this);ComputedHelpers.ensureDefinition(t),TypeHelpers.ensureDefinition(t);var r=t[definitionsSymbol]||{};for(var n in r)Object.defineProperty(this,n,r[n]);void 0!==e&&canReflect.assign(this,e);var o=Object.create(proxyKeys$3);o.constructor=this.constructor;var s=MakeObject.observable(this,{observe:MakeObserve.observe,proxyKeys:o,shouldRecordObservation:TypeHelpers.shouldRecordObservationOnAllKeysExceptFunctionsOnProto});return ObservableStore.proxiedObjects.set(this,s),ObservableStore.proxies.add(s),s};mapEventBindings(ObserveObject.prototype),addTypeEvents(ObserveObject),ComputedHelpers.addMethodsAndSymbols(ObserveObject),TypeHelpers.addMethodsAndSymbols(ObserveObject),ObserveObject.extend=Helpers.makeSimpleExtender(ObserveObject);var object=ObserveObject,definitionsSymbol$1=canSymbol.for("can.typeDefinitions"),proxyKeys$4=Helpers.assignEverything({},MakeArray.proxyKeys()),ObserveArray,ObserveArray=function(e){var t=Object.getPrototypeOf(this);ComputedHelpers.ensureDefinition(t),TypeHelpers.ensureDefinition(t);var r=t[definitionsSymbol$1]||{};for(var n in r)Object.defineProperty(this,n,r[n]);this.push.apply(this,e||[]);var o=Object.create(proxyKeys$4);o.constructor=this.constructor;var s=MakeArray.observable(this,{observe:MakeObserve.observe,proxyKeys:o,shouldRecordObservation:TypeHelpers.shouldRecordObservationOnAllKeysExceptFunctionsOnProto});return ObservableStore.proxiedObjects.set(this,s),ObservableStore.proxies.add(s),s};ObserveArray.prototype=Object.create(Array.prototype),mapEventBindings(ObserveArray.prototype),addTypeEvents(ObserveArray),ComputedHelpers.addMethodsAndSymbols(ObserveArray),TypeHelpers.addMethodsAndSymbols(ObserveArray),ObserveArray.extend=Helpers.makeSimpleExtender(ObserveArray);var array=ObserveArray;function defineProperty(e,t,r){ComputedHelpers.ensureDefinition(e)[t]=r}function asyncBase(e){return function(t,r,n){if(void 0!==n.get){var o=n.get;if("production"!==process$1.env.NODE_ENV&&0!==o.length)throw new Error("async decorated "+r+" on "+canReflect.getName(t)+": getters should take no arguments.");return defineProperty(t,r,function(n,s){function i(n,s){if(!s)return e.default;var i=o.call(this,!0);if(canReflect.isPromise(i))return i.then(s),e.default;if(void 0!==i&&"production"!==process$1.env.NODE_ENV)throw new Error("async decorated "+r+" on "+canReflect.getName(t)+": getters must return undefined or a promise.")}return"production"!==process$1.env.NODE_ENV&&canReflect.assignSymbols(i,{"can.getName":function(){return canReflect.getName(o)}}),new AsyncObservable(i,n,e.default)})}if(void 0!==n.value){var s=n.value;if("production"!==process$1.env.NODE_ENV&&1!==s.length)throw new Error("async decorated "+r+" on "+canReflect.getName(t)+": methods should take 1 argument (resolve).");return defineProperty(t,r,function(t,r){return new AsyncObservable(function(e,t){return s.call(this,t)},t,e.default)})}if("production"!==process$1.env.NODE_ENV)throw new Error("async decorated "+r+" on "+canReflect.getName(t)+": Unrecognized descriptor.")}}function resolverBase(e){return function(e,t,r){if(void 0!==r.value){var n=r.value;if("production"!==process$1.env.NODE_ENV&&1!==n.length)throw new Error("resolver decorated "+t+" on "+canReflect.getName(e)+": methods should take 1 argument (value).");return defineProperty(e,t,function(e,t){return new ResolverObservable(n,e)})}if("production"!==process$1.env.NODE_ENV)throw new Error("resolver decorated "+t+" on "+canReflect.getName(e)+": Unrecognized descriptor.")}}function optionalConfig(e){function t(t){return 3===arguments.length?e({}).apply(null,arguments):e(t)}return"production"!==process$1.env.NODE_ENV&&Object.defineProperty(t,"name",{value:canReflect.getName(e.name)}),t}var decorators={async:optionalConfig(asyncBase),resolver:optionalConfig(resolverBase)},canObserve=createCommonjsModule(function(e){for(var t in MakeObserve.object=function(e){return MakeObject.observable(e,MakeObserve)},MakeObserve.array=function(e){return MakeArray.observable(e,MakeObserve)},MakeObserve.function=function(e){return MakeFunction.observable(e,MakeObserve)},MakeObserve.observe.Object=object,MakeObserve.observe.Array=array,e.exports=MakeObserve.observe,e.exports.defineProperty=function(e,t,r){ComputedHelpers.ensureDefinition(e)[t]=r},decorators)e.exports[t]=decorators[t]}),canObserve_1=canObserve.defineProperty;export default canObserve;
//# sourceMappingURL=can-observe.js.map
