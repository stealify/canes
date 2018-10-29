import{a as process$1}from"./chunk-bacf0c54.mjs";import{a as commonjsGlobal,b as commonjsRequire,c as unwrapExports,d as createCommonjsModule}from"./chunk-eae5b219.mjs";import"./chunk-7dfeb1df.mjs";import"./chunk-fa6b878a.mjs";import"./chunk-f8a6947c.mjs";import{a as observeReader}from"./chunk-0877ccb7.mjs";import{a as get}from"./chunk-b09dcf0e.mjs";import"./chunk-bd824939.mjs";import{b as getSetReflections}from"./chunk-5f1245ff.mjs";import{a as singleReference}from"./chunk-072ec069.mjs";import{a as Observation}from"./chunk-c1d5d21e.mjs";import{a as ObservationRecorder}from"./chunk-8811d387.mjs";import{a as mapEventBindings}from"./chunk-910f3205.mjs";import{a as assign}from"./chunk-75bea8d8.mjs";import{a as canReflect}from"./chunk-7e0220de.mjs";import"./chunk-805ffcb4.mjs";import{a as canSymbol}from"./chunk-b37d91a1.mjs";import{a as namespace}from"./chunk-3b4c7b38.mjs";var protoCompute=createCommonjsModule(function(e,t){var n=function(e,t,n,s){for(var i=[],a=0,o=arguments.length;a<o;a++)i[a]=arguments[a];var r=typeof i[1];if("function"==typeof i[0])this._setupGetterSetterFn(i[0],i[1],i[2],i[3]);else if(void 0!==i[1])if("string"===r||"number"===r){var c=canReflect.isObservableLike(i[0])&&canReflect.isListLike(i[0]);if(canReflect.isObservableLike(i[0])&&canReflect.isMapLike(i[0])||c){var u=i[0],f=i[1];this._setupGetterSetterFn(function(e){if(!arguments.length)return c&&observeReader.get(u,"length"),observeReader.get(u,""+f);observeReader.set(u,f,e)},i[1],i[2],i[3])}else this._setupProperty(i[0],i[1],i[2])}else"function"===r?this._setupSetter(i[0],i[1],i[2]):i[1]&&i[1].fn?this._setupAsyncCompute(i[0],i[1]):this._setupSettings(i[0],i[1]);else this._setupSimpleValue(i[0]);this._args=i,this._primaryDepth=0,this.isComputed=!0},s=function(e,t,n){var s=new Observation(t,n,e),i=e.updater.bind(e);return"production"!==process$1.env.NODE_ENV&&Object.defineProperty(i,"name",{value:canReflect.getName(e)+".updater"}),e.observation=s,{_on:function(){canReflect.onValue(s,i,"notify"),s.hasOwnProperty("_value")?e.value=s._value:e.value=s.value},_off:function(){canReflect.offValue(s,i,"notify")},getDepth:function(){return s.getDepth()}}};mapEventBindings(n.prototype),assign(n.prototype,{setPrimaryDepth:function(e){this._primaryDepth=e},_setupGetterSetterFn:function(e,t,n){this._set=t?e.bind(t):e,this._get=t?e.bind(t):e,this._canObserve=!1!==n;var i=s(this,e,t||this);assign(this,i)},_setupProperty:function(e,t,n){var s,i=this;s=function(){i.updater(i._get(),i.value)},this._get=function(){return get(e,t)},this._set=function(n){var s=t.split("."),i=s.pop();s.length?get(e,s.join("."))[i]=n:e[t]=n},this._on=function(i){mapEventBindings.on.call(e,n||t,s),this.value=this._get()},this._off=function(){return mapEventBindings.off.call(e,n||t,s)}},_setupSetter:function(e,t,n){this.value=e,this._set=t,assign(this,n)},_setupSettings:function(e,t){if(this.value=e,this._set=t.set||this._set,this._get=t.get||this._get,!t.__selfUpdater){var n=this,s=this.updater;this.updater=function(){s.call(n,n._get(),n.value)}}this._on=t.on?t.on:this._on,this._off=t.off?t.off:this._off},_setupAsyncCompute:function(e,t){var i,a=this,o=t.fn;if(this.value=e,this._setUpdates=!0,this.lastSetValue=new n(e),this._set=function(e){return e===a.lastSetValue.get()?this.value:a.lastSetValue.set(e)},this._get=function(){return o.call(t.context,a.lastSetValue.get())},0===o.length)i=s(this,o,t.context);else if(1===o.length)i=s(this,function(){return o.call(t.context,a.lastSetValue.get())},t);else{var r=this.updater,c=ObservationRecorder.ignore(function(e){r.call(a,e,a.value)});this.updater=function(e){r.call(a,e,a.value)},i=s(this,function(){var e=o.call(t.context,a.lastSetValue.get(),c);return void 0!==e?e:this.value},this)}assign(this,i)},_setupSimpleValue:function(e){this.value=e},_eventSetup:ObservationRecorder.ignore(function(){this.bound=!0,this._on(this.updater)}),_eventTeardown:function(){this._off(this.updater),this.bound=!1},clone:function(e){return e&&"function"==typeof this._args[0]?this._args[1]=e:e&&(this._args[2]=e),new n(this._args[0],this._args[1],this._args[2],this._args[3])},_on:function(){},_off:function(){},get:function(){return ObservationRecorder.isRecording()&&!1!==this._canObserve&&(ObservationRecorder.add(this,"change"),this.bound||n.temporarilyBind(this)),this.bound?this.observation?this.observation.get():this.value:this._get()},_get:function(){return this.value},set:function(e){var t=this.value,n=this._set(e,t);return this._setUpdates?this.value:this.hasDependencies?this._get():(this.updater(void 0===n?this._get():n,t),this.value)},_set:function(e){return this.value=e},updater:function(e,t,n){this.value=e;var s=this.observation;s&&(s.hasOwnProperty("_value")?s._value=e:s.value=e),function(e,t,n,s){t!==n&&(t==t||n==n)&&e.dispatch({type:"change",batchNum:s},[t,n])}(this,e,t,n)},toFunction:function(){return this._computeFn.bind(this)},_computeFn:function(e){return arguments.length?this.set(e):this.get()}}),n.prototype.on=n.prototype.bind=n.prototype.addEventListener,n.prototype.off=n.prototype.unbind=n.prototype.removeEventListener;var i=function(){return this.observation&&this.observation.hasDependencies()};Object.defineProperty(n.prototype,"hasDependencies",{get:i}),n.temporarilyBind=Observation.temporarilyBind,n.async=function(e,t,s){return new n(e,{fn:t,context:s})},n.truthy=function(e){return new n(function(){var t=e.get();return"function"==typeof t&&(t=t.get()),!!t})},canReflect.assignSymbols(n.prototype,{"can.isValueLike":!0,"can.isMapLike":!1,"can.isListLike":!1,"can.setValue":n.prototype.set,"can.getValue":n.prototype.get,"can.valueHasDependencies":i,"can.onValue":function(e,t){function n(t,n,s){e(n,s)}singleReference.set(e,this,n),"production"!==process$1.env.NODE_ENV&&Object.defineProperty(n,"name",{value:canReflect.getName(e)+"::onValue"}),this.addEventListener("change",n,t)},"can.offValue":function(e,t){this.removeEventListener("change",singleReference.getAndDelete(e,this),t)},"can.getValueDependencies":function(){var e;return this.observation&&(e={valueDependencies:new Set([this.observation])}),e}}),e.exports=n}),canOnValueSymbol=canSymbol.for("can.onValue"),canOffValueSymbol=canSymbol.for("can.offValue"),canGetValue=canSymbol.for("can.getValue"),canSetValue=canSymbol.for("can.setValue"),isValueLike=canSymbol.for("can.isValueLike"),isMapLike=canSymbol.for("can.isMapLike"),isListLike=canSymbol.for("can.isListLike"),isFunctionLike=canSymbol.for("can.isFunctionLike"),canValueHasDependencies=canSymbol.for("can.valueHasDependencies"),canGetValueDependencies=canSymbol.for("can.getValueDependencies"),addEventListener=function(e,t){var n,s=this;return t&&(n=function(){t.apply(s,arguments)},singleReference.set(t,this,n)),s.computeInstance.addEventListener(e,n)},removeEventListener=function(e,t){var n=[];return void 0!==e&&(n.push(e),void 0!==t&&n.push(singleReference.getAndDelete(t,this))),this.computeInstance.removeEventListener.apply(this.computeInstance,n)},onValue=function(e,t){return this.computeInstance[canOnValueSymbol](e,t)},offValue=function(e,t){return this.computeInstance[canOffValueSymbol](e,t)},getValue=function(){return this.computeInstance.get()},setValue=function(e){return this.computeInstance.set(e)},hasDependencies=function(){return this.computeInstance.hasDependencies},getDependencies=function(){return this.computeInstance[canGetValueDependencies]()},COMPUTE=function(e,t,n,s){function i(e){return arguments.length?i.computeInstance.set(e):i.computeInstance.get()}return i.computeInstance=new protoCompute(e,t,n,s),i.on=i.bind=i.addEventListener=addEventListener,i.off=i.unbind=i.removeEventListener=removeEventListener,i.isComputed=i.computeInstance.isComputed,i.clone=function(n){return"function"==typeof e&&(t=n),COMPUTE(e,t,n,s)},getSetReflections.set(i,canOnValueSymbol,onValue),getSetReflections.set(i,canOffValueSymbol,offValue),getSetReflections.set(i,canGetValue,getValue),getSetReflections.set(i,canSetValue,setValue),getSetReflections.set(i,isValueLike,!0),getSetReflections.set(i,isMapLike,!1),getSetReflections.set(i,isListLike,!1),getSetReflections.set(i,isFunctionLike,!1),getSetReflections.set(i,canValueHasDependencies,hasDependencies),getSetReflections.set(i,canGetValueDependencies,getDependencies),i};COMPUTE.truthy=function(e){return COMPUTE(function(){return!!e()})},COMPUTE.async=function(e,t,n){return COMPUTE(e,{fn:t,context:n})},COMPUTE.temporarilyBind=protoCompute.temporarilyBind;var canCompute=namespace.compute=COMPUTE;export{canCompute as a,canCompute as b};
//# sourceMappingURL=chunk-ce868a5a.js.map
