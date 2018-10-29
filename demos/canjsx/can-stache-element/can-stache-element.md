# can-stache-element
Autorenders a Stache Template or can-component


```html
<html><head></head><body>
<!-- Is A Component Loader Late we Place simply can-import outside of stache -->
<template id="append-as-script-2">
  <script src="/node_modules/steal/steal.js" main="example-component" id="data-source" dev-bundle>
  /* External Component */
  // you can set @empty and require('~/example-component')
  var stache = require("can-stache");
  document.querySelectorAll('example-component').forEach(function (currentValue, currentIndex, listObj) {
    var template = stache(document.querySelectorAll('example-component')[currentIndex].outerHTML);
    document.querySelectorAll('example-component')[currentIndex].parentNode.replaceChild(template({}),document.querySelectorAll('example-component')[currentIndex])
  })
  </script>
  <example-component></example-component>


  <script src="/node_modules/steal/steal.js" main="secund-example/" id="data-source" dev-bundle>
  /* External Component */
  // you can set @empty and require('~/secund-example')
  var stache = require("can-stache");
  document.querySelectorAll('secund-example').forEach(function (currentValue, currentIndex, listObj) {
    var template = stache(document.querySelectorAll('secund-example')[currentIndex].outerHTML);
    document.querySelectorAll('secund-example')[currentIndex].parentNode.replaceChild(template({}),document.querySelectorAll('secund-example')[currentIndex])
  })
  </script>
  <secund-example></secund-example>
</template>


<template id="append-as-script-1">
  <script src="/node_modules/steal/steal.js" main="@empty" id="data-source">
    let Report = require('src/components/report/models/')
    let link = document.createElement('link');
    link.rel = 'import';
    link.href = '/can-webcomponent/can-webcomponent.html';
    link.setAttribute('async', '');
    link.onload = function handleLoad(e) {
        console.log('Loaded import: ' + e.target.href);
        //import './can-webcomponent/';
        class myElement extends customElements.get('can-define-map-view') {
          constructor() {
            //var Report = require('src/components/report/report-model')
            super({
                  message: {
                    value: 'This is the report-list component'
                  },
                  reportsPromise: {
                    value: function(){
                      return Report.getList({});
                      return { bo: 'bo'}
                    }
                  },
                  editReport(ev,elem) {

                  }
                },require('src/components/report/list/list.stache'));
          }
        }
        customElements.define('report-list', myElement);
    };
    link.onerror = function handleError(e) {
      console.log('Error loading import: ' + e.target.href);
    };
    document.head.appendChild(link);
  </script>
</template>

<script type="text/javascript">
// Appending a Script tag to the main
(function(window, document, undefined) {
    // Refers to the "importer", which is index.html
    var thatDoc = document;
    // Refers to the "importee", which is vimeo-embed.html
    var thisDoc = thatDoc.currentScript.ownerDocument;
    // Gets content from <template>.
    var template = thisDoc.querySelector( 'template' ).content;
    document.head.appendChild(template)
})(window, document);
</script>
</body></html>
```
