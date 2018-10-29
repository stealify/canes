## Stamdart way to observe attributes in WebComponents
This is good for a small component
```html
<script type="text/javascript">
const most = require('most')
class HelloElement extends HTMLElement {

  // Monitor the 'name' attribute for changes.
  static get observedAttributes() {return ['name']; }

  // Respond to attribute changes.
  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr == 'name') {
      this.textContent = `Hello, ${newValue}`;
    }
  }

}

// Define the new element
customElements.define('hello-element', HelloElement);
</script>
```

## Nils WebCompnent with Observation of attributes using MutationObserver + CustomEvent
This is the way to go to let your CustomLement dispatch a CustomEvent on change

```html
<script type="text/javascript">
const most = require('most')
class HelloElement extends HTMLElement {
  /* Nils WebCompnent Method */
  constructor(){
    super()
    var MutationObserver = window.MutationObserver
    || window.WebKitMutationObserver
    || window.MozMutationObserver;

    // Dispatch Events on a Component
    var mutationHandler = new MutationObserver(function(mutationRecordsArray) {
      this.dispatchEvent(new CustomEvent('build', mutationRecordsArray))
    }.bind(this))

    // Listen to Events on a Component
    this.addEventListener('build', function eventHandler(e) {
      console.log('The time is: ' + e.detail);
    }, false);

    // Parsing MutationRecords
    // https://github.com/rafaelw/mutation-summary/blob/master/src/mutation-summary.js

    // Select what to Handle
    mutationHandler.observe(this, {
        attributes: true,
        //childList: true,
        //characterData: true
    });
    // mutationHandler === auto garbage collected if target is away
    // mutationHandler.disconnect();  // later, you can stop observing
  }
}

// Define the new element
customElements.define('hello-element', HelloElement);
</script>
```html

## Nils WebCompnent with Observation of Attributes
This is the way to go for the Most customElements

```html
<script type="text/javascript">
const most = require('most')
class HelloElement extends HTMLElement {
  /* Nils WebCompnent Method */
  constructor(){
    super()
    var window.MutationObserver = window.MutationObserver
    || window.WebKitMutationObserver
    || window.MozMutationObserver;

    var mutationHandler = new MutationObserver(function(mutationRecordsArray) {
      //most.from(mutationRecordsArray)
    }.bind(this))

    // Parsing MutationRecords
    // https://github.com/rafaelw/mutation-summary/blob/master/src/mutation-summary.js

    mutationHandler.observe(this, {
        attributes: true,
        //childList: true,
        //characterData: true
    });
    // mutationHandler === auto garbage collected if target is away
    // mutationHandler.disconnect();  // later, you can stop observing
  }
}

// Define the new element
customElements.define('hello-element', HelloElement);
</script>
```html
