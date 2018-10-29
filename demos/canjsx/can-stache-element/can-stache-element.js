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
    /* TODO: Style Support
    if (!document.getElementById(stylePath)) {
      import { source } from 'stylePath'
      var css = source,
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.getElementById(stylePath) || document.createElement('style');
      style['asset-id'] = stylePath;
      style.id = stylePath;
      style.type = 'text/css';
      if (style.styleSheet){
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
      head.appendChild(style);
    } else {
      console.log('oh');
    }
    */
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
    /*
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
    */
    this.innerText = `
      var stache = require("can-stache");
      document.querySelectorAll('`+getComponentName()`+').forEach(function (currentValue, currentIndex, listObj) {
        var template = stache(document.querySelectorAll('`+getComponentName()`+')[currentIndex].outerHTML);
        document.querySelectorAll('`+getComponentName()`+')[currentIndex].parentNode.replaceChild(template({}),document.querySelectorAll('`+getComponentName()`+')[currentIndex])
      })
    `

  }
}

customElements.define('steal-loader', myElement);
