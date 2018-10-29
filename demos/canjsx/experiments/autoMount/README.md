# autoMount
Refering to the last Contributor meeting here are the Solutions

## Loading Existing can-component
```html
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
</script>
```


## Loading Component inside script tag

## register Component as WebComponent

Example Component
```html
<script src="../../node_modules/steal/steal.js" main="@empty" id="data-source">
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

// Registers a Component to can-view-callbacks via converting it to stache.
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
</script>


Example Load it
```html
<script>
class myElement extends HTMLElement {
  constructor() {
    super();
    document.querySelectorAll('hello-world').forEach(function (currentValue, currentIndex, listObj) {
      var template = stache(document.querySelectorAll('hello-world')[currentIndex].outerHTML);
      document.querySelectorAll('hello-world')[currentIndex].parentNode.replaceChild(template({}),document.querySelectorAll('hello-world')[currentIndex])
    })
  }
}

customElements.define('steal-loader', myElement);
</script>
```

## Use the steal-loder WebComponent

```html
<!-- Looks inside the html if the tags exist else append to </body> -->
<script src="../../node_modules/steal-loader/steal-loader" main="@empty" elements="hello-world,other-component" id="data-source"></script>

<script src="../../node_modules/steal/steal.js" main="@empty" id="data-source">
class myElement extends HTMLElement {
  constructor() {
      super();
      document.querySelectorAll('hello-world').forEach(function (currentValue, currentIndex, listObj) {
        var template = stache(document.querySelectorAll('hello-world')[currentIndex].outerHTML);
        document.querySelectorAll('hello-world')[currentIndex].parentNode.replaceChild(template({}),document.querySelectorAll('hello-world')[currentIndex])
      })
  }
}
customElements.define('steal-loader', myElement);
</script>
```
