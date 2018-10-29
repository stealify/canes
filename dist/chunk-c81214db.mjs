import{b as canKeyUtils,a as get}from"./chunk-b09dcf0e.mjs";import"./chunk-5f1245ff.mjs";import{a as deleteKey}from"./chunk-849fe8d8.mjs";import{a as canReflect}from"./chunk-7e0220de.mjs";import{b as SET}from"./chunk-0826a8c3.mjs";import{a as QueryLogic}from"./chunk-723b8216.mjs";import"./chunk-f81ff71d.mjs";import{a as memoryStore}from"./chunk-d7d8317e.mjs";import{a as process$1}from"./chunk-bacf0c54.mjs";import{a as commonjsGlobal,b as commonjsRequire,c as unwrapExports,d as createCommonjsModule}from"./chunk-eae5b219.mjs";import{a as canLog}from"./chunk-a661b1ce.mjs";import{a as dev}from"./chunk-585d4076.mjs";var sub=function(e,t,r){var n=[];return e=e||"",n.push(e.replace(canKeyUtils.strReplacer,function(e,a){var i=get(t,a);return!0===r&&deleteKey(t,a),null==i?(n=null,""):!canReflect.isPrimitive(i)&&n?(n.push(i),""):""+i})),null===n?n:n.length<=1?n[0]:n},replacer=/\{([^\}]+)\}/g,dataFromUrl=function(e,t){if(!e)return{};var r=[],n=e.replace(".","\\.").replace("?","\\?"),a=new RegExp(n.replace(replacer,function(e,t){return r.push(t),"([^/]+)"})+"$").exec(t),i={};return a?(a.shift(),r.forEach(function(e){i[e]=a.shift()}),i):null};function deepMatches(e,t){if(e===t)return!0;if(Array.isArray(e)&&Array.isArray(t))return e.every(function(e,r){return deepMatches(e,t[r])});if(e&&t&&canReflect.isPlainObject(e)&&canReflect.isPlainObject(t)){for(var r in e){if(!t.hasOwnProperty(r))return!1;if(!deepMatches(e[r],t[r]))return!1}return!0}return!1}function removeFixtureAndXHR(e){if(e.fixture||e.xhr||e.data){var t=canReflect.serialize(e);return delete t.fixture,delete t.xhr,delete t.data,t}return e}function identityIntersection(e,t){return e.value===t.value?e:SET.EMPTY}function identityDifference(e,t){return e.value===t.value?SET.EMPTY:e}function identityUnion(e,t){return e.value===t.value?e:SET.UNDEFINABLE}var identityComparitor={intersection:identityIntersection,difference:identityDifference,union:identityUnion};function makeComparatorType(e){var t=function(){},r=function(e){this.value=e};return r.prototype.isMember=function(t,r,n){return e(this.value,t,r,n)},canReflect.assignSymbols(t,{"can.SetType":r}),SET.defineComparison(r,r,identityComparitor),SET.defineComparison(SET.UNIVERSAL,r,{difference:function(){return SET.UNDEFINABLE}}),t}function quickEqual(e,t){var r=e.data,n=t.data;if(r&&n&&!deepMatches(r,n))return!1;var a=new QueryLogic.KeysAnd(removeFixtureAndXHR(e)),i=new QueryLogic.KeysAnd(removeFixtureAndXHR(t));return SET.isEqual(a,i)}function quickSubset(e,t){return SET.isSubset(new QueryLogic.KeysAnd(e),new QueryLogic.KeysAnd(t))}var types={};canReflect.eachKey({IsEmptyOrNull:function(e,t){return null==e&&0===canReflect.size(t)||(null==t&&0===canReflect.size(e)||quickEqual(e,t))},isEmptyOrSubset:function(e,t){return null==e&&0===canReflect.size(t)||(null==t&&0===canReflect.size(e)||quickSubset(e,t))},TemplateUrl:function(e,t){return!!dataFromUrl(e,t)},StringIgnoreCase:function(e,t){return t&&e?e.toLowerCase()===t.toLowerCase():t===e},Ignore:function(){return!0}},function(e,t){types[t]=makeComparatorType(e)});var schema={identity:["id"],keys:{url:types.TemplateUrl,fixture:types.Ignore,xhr:types.Ignore,type:types.StringIgnoreCase,method:types.StringIgnoreCase,helpers:types.Ignore,headers:types.IsEmptyOrNull,data:types.IsEmptyOrSubset}},query=new QueryLogic(schema),matches={fixture:quickEqual,request:function(e,t){return query.isMember({filter:t},e)},matches:function(e,t,r){return r?this.fixture(e,t):this.request(e,t)},makeComparatorType:makeComparatorType},connectToConnection=function(e,t){return function(r,n){this.connection[e](t.call(this,r.data)).then(function(e){n(e)},function(e){n(parseInt(e.status,10),e)})}},makeMakeItems=function(e,t){return function(){var r=[],n=0;return e.forEach(function(e){r.push(canReflect.serialize(e)),n=Math.max(e[t],n)}),{maxId:n,items:r}}},stringToAny=function(e){switch(e){case"NaN":case"Infinity":return+e;case"null":return null;case"undefined":return;case"true":case"false":return"true"===e;default:var t=+e;return isNaN(t)?e:t}},Store=function(e,t,r){var n=e.queryLogic.schema,a=n.identity[0],i=n.keys;for(var o in i&&i[a]||console.warn("No type specified for identity key. Going to convert strings to reasonable type."),this.connection=e,this.makeItems=t,this.idProp=r,this.reset(),Store.prototype)this[o]=this[o].bind(this)},doNotConvert=function(e){return e};function typeConvert(e){var t=this.connection.queryLogic.schema,r=t.identity[0],n=t.keys;n&&n[r]||((n={})[r]=function(e){return"string"==typeof e?stringToAny(e):e});var a={};return canReflect.eachKey(e,function(e,t){n[t]?a[t]=canReflect.convert(e,n[t]):a[t]=e}),a}function looksLikeAQueryLogic(e){return e&&"identityKeys"in e}canReflect.assignMap(Store.prototype,{getListData:connectToConnection("getListData",doNotConvert),getData:connectToConnection("getData",typeConvert),createData:function(e,t){var r=this.idProp;e.data[r]=++this.maxId,this.connection.createData(typeConvert.call(this,e.data)).then(function(e){t(e)},function(e){t(403,e)})},createInstance:function(e){var t=this.idProp;return t in e||(e[t]=++this.maxId),this.connection.createData(e)},updateData:connectToConnection("updateData",typeConvert),updateInstance:function(e){return this.connection.updateData(e)},destroyInstance:function(e){return this.connection.destroyData(e)},destroyData:connectToConnection("destroyData",typeConvert),reset:function(e){e&&(this.makeItems=makeMakeItems(e,this.idProp));var t=this.makeItems();this.maxId=t.maxId,this.connection.updateListData(t.items,{})},get:function(e){var t=this.connection.queryLogic.memberIdentity(e);return this.connection.getRecord(t)},getList:function(e){return this.connection.getListDataSync(e)}}),Store.make=function(e,t,r){var n,a;"number"==typeof e?(r?looksLikeAQueryLogic(r)||(r=new QueryLogic(r)):r=new QueryLogic({}),a=r.identityKeys()[0]||"id",n=function(){for(var r=[],n=0,i=0;i<e;i++){var o=t(i,r);o[a]||(o[a]=i),n=Math.max(o[a],n),r.push(o)}return{maxId:n,items:r}}):Array.isArray(e)&&((r=t)?looksLikeAQueryLogic(r)||(r=new QueryLogic(r)):r=new QueryLogic({}),a=r.identityKeys()[0]||"id",n=makeMakeItems(e,a));var i=memoryStore({queryLogic:r,errorOnMissingRecord:!0});return new Store(i,n,a)};var store=Store,core=createCommonjsModule(function(e,t){var r=[];t.fixtures=r;var n={item:{GET:"getData",PUT:"updateData",DELETE:"destroyData"},list:{GET:"getListData",POST:"createData"}};function a(e){var t=e.match(/(GET|POST|PUT|DELETE|PATCH) (.+)/i);return t?[t[1],t[2]]:[void 0,e]}function i(e,t){var r={},i=a(e),o=i[0],c=function(e,t){if(!(t=t||function(e){var t=e.match(/\{(.*)\}/);if(t&&2===t.length)return t[1]}(e)))return[void 0,e];var r=new RegExp("\\/\\{"+t+"\\}.*"),n=r.test(e),a=n?e.replace(r,""):e;return[n?e:e.trim()+"/{"+t+"}",a]}(i[1],t.idProp),s=c[0],u=c[1];if(o){var f=['fixture("'+e+'", fixture) must use a store method, not a store directly.'];if(s){var l=n.item[o];if(l){r[o+" "+s]=t[l];var d='Replace with fixture("'+o+" "+s+'", fixture.'+l+") for items.";f.push(d)}}var p=n.list[o];if(p){r[o+" "+u]=t[p];var y='Replace with fixture("'+o+" "+u+'", fixture.'+p+") for lists.";f.push(y)}var m=f.join(" ");dev.warn(m)}else{var h=n.item;for(var v in h){var g=h[v];r[v+" "+s]=t[g]}var x=n.list;for(var E in x){var k=x[E];r[E+" "+u]=t[k]}}return r}t.add=function(e,n){if(void 0!==n){if(function(e){return e&&(e.getData||e.getListData)}(n))return e=i(e,n),void t.add(e);var o,c,s;"string"==typeof e&&(o=a(e),c=o[0],s=o[1],e=c?{type:c,url:s}:{url:s}),function(e,n,a){var i=t.index(n,!0);if(i>-1&&r.splice(i,1),null!=a){if("object"==typeof a){var o=a;a=function(){return o}}n.fixture=a,r.unshift(n)}}(0,e,n)}else canReflect.eachKey(e,function(e,r){t.add(r,e)})};var o=t.add;function c(e,t){this.statusCode=t[0],this.responseBody=t[1],this.headers=t[2],this.statusText=t[3],this.fixture=e}o.on=!0,o.delay=10,t.callDynamicFixture=function(e,r,n){if(e.data=r.data,"production"!==process$1.env.NODE_ENV){var a=JSON.stringify(e.data);canLog.log(e.type.toUpperCase()+" "+e.url+" "+a.substr(0,50)+" -> handler(req,res)")}var i=function(){var a=t.extractResponse.apply(e,arguments);return canLog.log("can-fixture: "+e.type.toUpperCase()+" "+e.url+" ",e.data," => ",new c(r.fixture,a)),n.apply(this,a)},s=function(){var t=r.fixture(e,i,e.headers,r);void 0!==t&&i(200,t)};return e.async?setTimeout(s,o.delay):(s(),null)},t.index=function(e,t){for(var n=0;n<r.length;n++)if(matches.matches(e,r[n],t))return n;return-1},t.get=function(e){if(o.on){var n=t.index(e,!0);-1===n&&(n=t.index(e,!1));var a=n>=0?canReflect.assignMap({},r[n]):void 0;if(a){var i=a.fixture,c=dataFromUrl(a.url,e.url);if("string"==typeof a.fixture)c&&(i=sub(i,c)),a.url=i,a.data=null,a.type="GET",a.error||(a.error=function(e,t,r){throw"fixtures.js Error "+t+" "+r});else if(canReflect.isPlainObject(e.data)||null==e.data){var s=canReflect.assignMap({},e.data||{});a.data=canReflect.assignMap(s,c)}else a.data=e.data}return a}},t.matches=matches,t.extractResponse=function(e,t,r,n){return"number"!=typeof e&&(r=t,t=e,e=200),"string"==typeof r&&(n=r,r={}),[e,t,r,n]}}),core_1=core.fixtures,core_2=core.add,core_3=core.callDynamicFixture,core_4=core.index,core_5=core.get,core_6=core.matches,core_7=core.extractResponse;export{core as a,store as b};
//# sourceMappingURL=chunk-c81214db.js.map
