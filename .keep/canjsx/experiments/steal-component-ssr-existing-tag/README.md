# can-component-element
Is a WebCompnent that automatic loads steal



## Example code


```html
<html>
<head></head>
<body>

<script src="../../node_modules/steal/steal.js" main="@empty" id="data-source">
/* External Component */
require('~/kasse-nfc/')
/* Use this if the importing document got your component-tag is a customElement pollyfil  :)
it replaces the parent with this fragment complet*/
// Attach to Existing <component-tag>
document.querySelectorAll('kasse-nfc').forEach(function (currentValue, currentIndex, listObj) {
  var template = stache(document.querySelectorAll('kasse-nfc')[currentIndex].outerHTML);
  document.querySelectorAll('kasse-nfc')[currentIndex].parentNode.replaceChild(template({}),document.querySelectorAll('kasse-nfc')[currentIndex])
})

/* Inline Component */

var Component = require("can-component");
var stache = require("can-stache");
var DefineMap = require("can-define/map/map");

var HelloWorldVM = DefineMap.extend({
 text: 'any',
 message: {
   value: "Hello There!"
 },
 visible: {
   value: false
 }
});

// Registers a Component to can-view-callbacks
Component.extend({
 tag: "hello-world",
 view: stache("Hi {{text}} {{#if visible}}{{message}}{{else}}Click me{{/if}}"),
 ViewModel: HelloWorldVM,
 events: {
   click: function() {
     this.viewModel.visible = !this.viewModel.visible;
   }
 }
});

/* Use this if the importing document got your component-tag and your browser supports it*/
class myElement extends HTMLElement {
  //TODO: To Work as a dome-component loader element
  constructor() {
      super();
      // Using a Existing tag as stache template makes it autorendering
      //var template = stache(this.outerHTML);
      //console.log(Object.keys(template({})))
      //this.parentNode.replaceChild(template({}),this)
      document.querySelectorAll('hello-world').forEach(function (currentValue, currentIndex, listObj) {
        var template = stache(document.querySelectorAll('hello-world')[currentIndex].outerHTML);
        document.querySelectorAll('hello-world')[currentIndex].parentNode.replaceChild(template({}),document.querySelectorAll('hello-world')[currentIndex])
      })

  }
  //static get view() {
    //var template = stache(this.outerHTML);
    //console.log(Object.keys(template({})))
    //this.parentNode.replaceChild(template({}),this)
//    return stache(this.outerHTML)({});
  //}
}

customElements.define('steal-loader', myElement);
//document.body.appendChild(template({}));
</script>

</body>
</html>

```

## can-view-autorender

```html
<script>
var canViewModel = require('../../node_modules/can-view-model');
var camelize = require('../../node_modules/can-util/js/string/string').camelize;
var each = require('../../node_modules/can-util/js/each/each');
var importer = require('../../node_modules/can-util/js/import/import');
var events = require('../../node_modules/can-event');
var namespace = require('../../node_modules/can-util/namespace');

var ignoreAttributesRegExp = /^(dataViewId|class|id|type|src)$/i;

var typeMatch = /\s*text\/(stache)\s*/;

function isIn(element, type) {
  while(element.parentNode) {
    element = element.parentNode;
    if(element.nodeName.toLowerCase() === type.toLowerCase()) {
      return true;
    }
  }
}
function setAttr(el, attr, scope){
  var camelized = camelize(attr);
  if (!ignoreAttributesRegExp.test(camelized) ) {
    var value = el.getAttribute(attr);
    if(scope.attr) {
      scope.attr(camelized, value);
    } else if(scope.set) {
      scope.set(camelized, value);
    } else {
      scope[camelized] = value;
    }
  }
}
function insertAfter(ref, element) {
  if(ref.nextSibling){
    ref.parentNode.insertBefore(element, ref.nextSibling);
  } else {
    ref.parentNode.appendChild(element);
  }
}

function render(renderer, scope, el) {
  var frag = renderer(scope);
  myComp
  if( isIn(el,"template") ) {
    document.body.appendChild(frag);
  } else if( isIn(el,"head") ) {
    document.body.appendChild(frag);
  } else if(el.nodeName.toLowerCase() === "script") {
    insertAfter(el, frag);
  } else {
    insertAfter(el, frag);
    el.parentNode.removeChild(el);
  }
}
function setupScope(el) {
  var scope = canViewModel(el);

  each(el.attributes || [], function(attr) {
    setAttr(el, attr.name, scope);
  });

  events.on.call(el, "attributes", function (ev) {
    setAttr(el, ev.attributeName, scope);
  });

  return scope;
}
//  render(renderer, setupScope(el), el);
//  var frag = renderer(scope);
  var frag = renderer(scope);
var promise = new Promise(function(resolve, reject) {
function autoload(){
  var promises = [];

  each( document.querySelectorAll("[can-autorender]"), function( el, i){
    el.style.display = "none";

    var text = el.innerHTML || el.text,
      typeAttr = el.getAttribute("type"),
      typeInfo = typeAttr.match( typeMatch ),
      type = typeInfo && typeInfo[1],
      typeModule = "can-" + type;

    promises.push(importer(typeModule).then(function(engine){
      if(engine.async) {
        return engine.async(text).then(function(renderer){
          render(renderer, setupScope(el), el);
        });
      } else {
        var renderer = engine(text);
        render(renderer, setupScope(el), el);
      }
    }));

  });

  Promise.all(promises).then(resolve, reject);
}

// Exec after dom Ready
if (document.readyState === 'complete') {
  //autoload();

} else {
  //events.on.call(window, 'load', autoload);
}
});


</script>

```
