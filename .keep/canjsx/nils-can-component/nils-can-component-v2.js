export class NilsCanComponentTag extends HTMLElement {
  constructor(map,view,style) {
    super();
    //var map = can.DefineMap.extend(map);
    //this.style = style;
    //this.map = new map({})
    //this.stache = can.stache
    //this.view = view(this.map);
  }
  appendStyleHead(stylePath) {

  }
  shadowDOM() {
    // Append style and HTML to shadowDOM
  }
  attachElement() {
    this.innerHTML = '';
    this.appendChild(this.view);
    if (this.style) {
      this.appendStyleHead(this.style);
    }
  }
  setView() {
    stache(this.innerHTML)
  }
  diffElement() {
    // like attach but using domDiff
  }
  connectedCallback() {
    this.attachElement();
  }
}
customElements.define('can-webcomponent', NilsCanComponentTag);
// Version 2
// Will define a CustomElement that you can directly Place in the HTML
// Version 1
// This writes a Autofilled Script tag to Load your CanJS Component
// you need to have the tag in dom befor loading
class NilsCanComponent extends HTMLScriptElement {
  constructor() {
      super();
      this.setAttribute('type', 'text/javascript'); // text/javascript
      this.setAttribute('src', '/node_modules/steal/steal.js');
      this.setAttribute('dev-bundle')
      this.setAttribute('main','secund-example/')
  }
  getComponentName() {
    // Cleaning the String without path lib
    var main = this.getAttribute('main').split('/').join(' ').trim().split(' ')
    return main[main.length-1]
  }
  connectedCallback() {
    // customElements.get('can-webcomponent')
    // why does require here work? because we are a script tag loading steal :)
    this.innerText = `
    class myElement extends NilsCanComponentTag {
      constructor() {
        super(require('src/components/report/list/list.js',require('src/components/report/list/list.stache'));
      }
    }
    customElements.define('report-list', myElement);
    `
  }
}

customElements.define('steal-loader', myElement);
