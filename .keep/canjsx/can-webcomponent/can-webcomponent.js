export class defineMapElement extends HTMLElement {
  constructor(map,view,style) {
    super();
    var map = can.DefineMap.extend(map);
    this.style = style;
    this.map = new map({})
    this.stache = can.stache
    this.view = view(this.map);
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
customElements.define('can-webcomponent', defineMapElement);
export default defineMapElement
