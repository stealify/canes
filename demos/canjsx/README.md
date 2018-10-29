<<<<<<< HEAD
# nils-canjs
=======
# canjsx (DEPRECATED)
This should be a Contribution to the Core CanJS Project Original but the Community is not Really Responsiv 
so we decided do release it only as nils https://github.com/direktspeed/nils https://github.com/at-nikolaus https://github.com/direktspeed-nils


>>>>>>> e551fabe872b5ae2efb9c82b866dadbf4511de2a
This is a CanJS Version X for Stream It aims to be the defacto Framework of Frameworks based on direktspeed-nils

# What is Nils?
Nils is the short form of Nikolaos (Santa Claus) it is composed from the greek words Nike and Laos
- > Nike = Winner
- > Laos = Public
- = Winner of the Public!
It offers DOM Diffing, Streams, Workflows for WebDevelopment


# Guides
- TODO MVC
- PWA
- CHAT GUIDE
- ATM GUIDE

## Working elements
- example-can-done-components / using nativ CanJS way to Render usin Nils Style Architecture
  - Can use <nils-import>comp-name.html.. innerHTML </nils-import> Element to attach
  - will later use nils-can-component Element that can render can-components as Element
- can-stache-element (Simply put Stache in and Works)
- can-webcomponent a complet canjs component as Element

# Small First example Streaming ViewModels
This shows how nils-canjs Improves existing CanJS can-define/map Objects
- We can Update the viewModel Reactive
- can-connect is not needed any more
- works with Any data source
```javascript
const Nils = require('@nikolaus/nils')
const defineMap = require('can-define/map/map')
const Component = require('can-component')
const view = require('index.stache')

const app = new Nils()

const viewModel = defineMap.extend({sealed: false},{})


// Init ViewModel
// could be also a defineMap->Stream
app.stream.of({
  inputX: '',
  inputY: ''
})
// Observe DOM Elements
// return { update, assign }
.combineArray((observed)=>observed,[
  app.fromInput(document.querySelector('input.x'))
  .map((val)=>{
  return { inputX: val }
  }),
  app.fromInput(document.querySelector('input.y'))
  .map((val)=>{
    return { inputY: val }
  })
])
// Returns the ViewModelUpdating State aka can-x-connect :)
// This can also be a complet Can Component
// its only for demo
.loop(function applyVM(lastSetVal, setVal){
  let seed = lastSetVal.viewModel.updateDeep(setVal)
  return return { seed, value: seed };
},Component.extend({
  tag: 'kasse-login',
  ViewModel,
  view
}))
// Acticvate the Stream All gets executed as sideEffect
.map((comp)=>comp.render())
.drain()
```

# Feature List
- Full Reactiv Programing flow using DIREKTSPEED Nils wich is a Extended version of Most Streams.
- Streaming WebComponents with live bindings.
- Works out of the box with any Template language and partial paradigm
- Works with any HTML, Data Producer.
- Compatible with all Framworks and Coding Styles:
  - A+ Promises, Streams, Values, Functions, Symbols
  - fast adoption of libs like transducers or other 2020 Standarts for JavaScript
  - Ultra Fast Loading in Steal with Development Mode
  - Better Stack Traces.
  - Better debuging
  - Better Testing
  - up to n X Faster then normal CanJS n == Number of elements
  - Allows workign with Data Streams and BigData Data Sience Scenarios
- To much more to write now because i am a single person :)




# IMPORTENT MOTES
- https://github.com/webcomponents/webcomponentsjs/issues/438
- http://jsbin.com/qeremozuqi/edit?html,js,output
- http://jsbin.com/fakeme/edit?html,js,output


## Minimum
"can-component": "^3.3.6",
"can-connect": "^1.5.10",
"can-define": "^1.5.4",
"can-stache": "^3.13.1",
"can-view-autorender": "^3.1.2",
"can-zone": "^0.6.14",
"steal": "^1.5.15",
"steal-less": "^1.2.0",
"steal-stache": "^3.1.2",
## Dev
"steal-tools": "^1.9.1"



## Extra
"bootstrap": "^3.3.7",
"can-connect-feathers": "^3.7.0",
"can-make-rest": "^0.1.2",
"can-route": "^3.0.8",
"can-route-pushstate": "^3.0.3",
"can-set": "^1.1.0",
"os": "^0.1.1",
"crypto": "^1.0.1"


## This Aims to Show how to Work with CanJS


### Canjsx Issues
- Nils Method Names to Match CanJS #1
```js
    .loop === .connect === .update ?
    .just === .of === .init
```

- First Goals #9
- > Create a tag that requires a component and defines a new custom element tag for it
  - Current Solution is create js file define element based on can-ssr-webcomponent
    - Load that with Steal script tag and have steal configured right befor that!


##TODO
- lib/canjsx.js
  - detect when loaded from node_modules and auto load package.json
  - offer basic can-ssr-element (stache render self replace)
  - offer steal-import // Should later use global steal one import or not?
    - needs more 

Full Example WebComponent that can be link rel imported
mycomponent.html
```html
<link rel="import" href="node_modules/@nikolaus/nils-canjs/can-component-element.html">
<can-component from="~/my-component/"></can-component>
<my-component></my-component>
```

index.html
```html
<head>
<link rel="import" href="mycomponent.html">
</head>
<body>
<my-component></my-component>
</body>
```
so placing the link tag to mycomponent.html and your done

## TodoMVC

```js
let todoAlgebra = new can.set.Algebra(
    set.props.boolean("complete"),
    set.props.id("id"),
    set.props.sort("sort")
);

let todoStore = can.fixture.store([{
        name: "mow lawn",
        complete: false,
        id: 5
    },
    {
        name: "dishes",
        complete: true,
        id: 6
    },
    {
        name: "learn canjs",
        complete: false,
        id: 7
    }
], todoAlgebra);

can.fixture("/api/todos", todoStore);
can.fixture.delay = 1000;

class Todo extends can.Object {
    constructor(props) {
        super(props);
        if (!this.hasOwnProperty("complete")) {
            this.complete = false;
        }
    }
}

class TodoList extends can.Array {
    get active() {
        return this.filter(function(todo) {
            return todo.complete === false;
        });
    }
    get complete() {
        return this.filter(function(todo) {
            return todo.complete === true;
        });
    }
    get allComplete() {
        return this.length === this.complete.length;
    }
    get saving() {
        return this.filter(function(todo) {
            return todo.isSaving();
        });
    }
    updateCompleteTo(value) {
        this.forEach(function(todo) {
            todo.complete = value;
            todo.save();
        });
    }
    destroyComplete() {
        this.complete.forEach(function(todo) {
            todo.destroy();
        });
    }
}

can.connect.baseMap({
    url: "/api/todos",
    Map: Todo,
    List: TodoList,
    name: "todo",
    algebra: todoAlgebra
});

can.element({
	tag: "todo-create",
	
	view: `
	  <input id="new-todo"
	    placeholder="What needs to be done?"
	    value:bind="todo.name"
	    on:enter="createTodo()"/>
	`,
	
	data: {
		todo: () => new Todo()	
	},
	
	methods: {
		createTodo() {
			this.todo = new Todo();
		}
	}
});

can.element({
	tag: "todo-list",
	
	view: `
		<ul id="todo-list">
		  {{#each(todos)}}
			<li class="todo {{#if(./complete)}}completed{{/if}}
			  {{#if( isDestroying() )}}destroying{{/if}}
			  {{#if(../isEditing(this))}}editing{{/if}}">
			  <div class="view">
				<input class="toggle" type="checkbox" checked:bind="complete">
				<label on:dblclick="../edit(this)">{{name}}</label>
				<button class="destroy" on:click="destroy()"></button>
			  </div>
			  <input class="edit" type="text"
				value:bind="name"
				on:enter="../updateName()"
				focused:from="../isEditing(this)"
				on:blur="../cancelEdit()"/>
			</li>
		  {{/each}}
		</ul>
	`,
	
	methods: {
		isEditing(todo) {
			return todo === this.editing;
		}
		edit(todo) {
			this.backupName = todo.name;
			this.editing = todo;
		}
		cancelEdit() {
			if (this.editing) {
				this.editing.name = this.backupName;
			}
			this.editing = null;
		}
		updateName() {
			this.editing.save();
			this.editing = null;
		}
	}
});

let TodoMVC = can.element({
	tag: "todo-mvc",
	
	props: {
		todoList: {
			enumerable: false,
			value: null,
			configurable: true,
			writable: true
		}
	},
	
	view: `
		<section id="todoapp">
			<header id="header">
				<h1>todos</h1>
				<todo-create/>
			</header>
			<section id="main" class="">
				<input id="toggle-all" type="checkbox"
				  checked:bind="allChecked"
				  disabled:from="todosList.saving.length"/>
				<label for="toggle-all">Mark all as complete</label>
				<todo-list todos:from="todosPromise.value"/>
			</section>
			<footer id="footer" class="">
				<span id="todo-count">
					<strong>{{todosPromise.value.active.length}}</strong> items left
				</span>
				<ul id="filters">
					<li>
						<a href="{{routeUrl(filter=undefined)}}"
							{{#routeCurrent(filter=undefined)}}class='selected'{{/routeCurrent}}>All</a>
					</li>
					<li>
						<a href="{{routeUrl(filter='active')}}"
							{{#routeCurrent(filter='active')}}class='selected'{{/routeCurrent}}>Active</a>
					</li>
					<li>
						<a href="{{routeUrl(filter='complete')}}"
							{{#routeCurrent(filter='complete')}}class='selected'{{/routeCurrent}}>Completed</a>
					</li>
				</ul>
				<button id="clear-completed"
					on:click="todosList.destroyComplete()">
					Clear completed ({{todosPromise.value.complete.length}})
				</button>
			</footer>
		</section>
	`,
	
	computed: {
		todosPromise() {
			console.log("todosPromise");
			if (!this.filter) {
			    return Todo.getList({});
			} else {
			    return Todo.getList({
				complete: this.filter === "complete"
			    });
			}
		},
		allChecked() {
			return this.todosList && this.todosList.allComplete;
		},
		allChecked(newVal) {
			this.todosList && this.todosList.updateCompleteTo(newVal);
		}
	},
	
	lifecycle: {
		connected() {
			this.listenTo("todosPromise", (promise) => {
			    promise.then((todos) => {
				this.todosList = todos;
			    });
			});
			this.todosPromise.then((todos) => {
			    console.log(JSON.stringify(todos));
			    this.todosList = todos;
			});
			return this.stopListening.bind(this);	
		}
	}
});

let app = new TodoMVC();

route.data = app;
route("{filter}");
route.start();

document.body.appendChild(app);
```
# tabs
```js
import element from "can-element";
import stache from "can-stache";
import util from "./util";
import tabsStache from "./tabs.stache";
import panelStache from "./panel.stache";

element({
  tag: "bit-panel",
  
  view: panelStache,
  
  data: {
    active: false
  },
  
  lifecycle: {
    connected: function(){
      this.element.parentNode.addPanel(this);
    },
    disconnected: function(){
      this.element.parentNode.removePanel(this);
    }
  }
  
});

element({
  tag: "bit-tabs",
  
  view: tabsStache,
  
  data: {
    panels: [],
    tabsClass: ""
  },
  
  methods: {
    addPanel(panel){
      // If this is the first panel, activate it.
      if( this.panels.length === 0 ) {
        this.makeActive(panel);
      }
      this.panels.push(panel);
    },

    removePanel(panel){
      let panels = this.panels;
      panels.splice(panels.indexOf(panel), 1);
      
      if(panel === this.active) {
        if(panels.length){
          this.makeActive(panels[0]);
        } else {
          delete this.active;
        }
      }
    },
    
    makeActive(panel){
      this.active = panel;
      
      this.panels.forEach(panel => {
        panel.active = false;
      });
      
      panel.active = true;
    },
    
    isActive(panel) {
      return this.active === panel;
    }
  }
});
```

# Markdown Editor
```js
can.element({
  tag: "markdown-editor",
  data: {
    value: 'Type some *markdown* here'
  },
  computed: {
    raw() {
      const md = new Remarkable();
      return md.render(this.value);
    }
  },
  template: `<div class="MarkdownEditor">
  <h3>Input</h3>
  <textarea value:bind="value">
  <h3>Output</h3>
  <div class="content">{{raw}}</div>
</div>`
});
```

# Stripe Integration
```js
Stripe.setPublishableKey('pk_test_zCC2JrO3KSMeh7BB5x9OUe2U');

var creditCardView = can.stache.from("cc-view");

can.element({
  tag: "credit-card",
  
  view: creditCardView,
  
  data: {
    amount: 9.99
  },
  
  computed: {
    cardNumber() {
      return this.userCardNumber ? this.userCardNumber.replace(/-/g,""): null;
    },
    
    cardError() {
      if( this.cardNumber && !Stripe.card.validateCardNumber(this.cardNumber) ) {
        return "Invalid card number (ex: 4242-4242-4242).";
      }
    },
            
    cardError() {
      if( this.cardNumber && !Stripe.card.validateCardNumber(this.cardNumber) ) {
        return "Invalid card number (ex: 4242-4242-4242).";
      }
    },
      
    expiryParts() {
      if(this.userExpiry) {
        return this.userExpiry.split("-").map(function(p){
          return parseInt(p,10);
        })
      }
    },
    
    expiryMonth() {
      return this.expiryParts && this.expiryParts[0];
    },
    
    expiryYear() {
      return this.expiryParts && this.expiryParts[1];
    },
    
    expiryError() {
      if( (this.expiryMonth || this.expiryYear) && 
         !Stripe.card.validateExpiry(this.expiryMonth, this.expiryYear) ) {
        return "Invalid expiration date (ex: 01-22).";
      }
    },
  
    cvc(){
      return this.userCVC ?
        parseInt(this.userCVC,10) : null;
    },
    
    
    cvcError() {
      if(this.cvc && !Stripe.card.validateCVC(this.cvc)) {
        return "Invalid CVC (ex: 123).";
      }
    },
      
    isCardValid(){
      return Stripe.card.validateCardNumber(this.cardNumber) && 
        Stripe.card.validateExpiry(this.expiryMonth, this.expiryYear) &&
        Stripe.card.validateCVC(this.cvc);
    },
      
    isCardInvalid(){
      return !this.isCardValid;
    },

    errorMessage(){
      return this.cardError || this.expiryError || this.cvcError;
    }
  },
    
  methods: {
    pay: function(event){
      event.preventDefault();

      Stripe.card.createToken({
        number: this.cardNumber,
        cvc: this.cvc,
        exp_month: this.expiryMonth,
        exp_year: this.expiryYear
      }, function(status, response){
        if(status === 200) {
          alert("Token: "+response.id);
          // stripe.charges.create({
          //   amount: this.amount,
          //   currency: "usd",
          //   description: "Example charge",
          //   source: response.id,
          // })
        } else {
          alert("Error: "+response.error.message);
        }
      });
    },
    template: `<form on:submit="pay(%event)">
  {{#if errorMessage}}
     <div class="message">{{errorMessage}}</div>
  {{/if}}
  <input type='text' name='number' placeholder='Card Number'
    {{#if cardError}}class='is-error'{{/if}}
    value:bind="userCardNumber"/>
  <input type='text' name='expiry' placeholder='MM-YY'
    {{#if expiryError}}class='is-error'{{/if}}
    value:bind="userExpiry"/>
  <input type='text' name='cvc' placeholder='CVC'
    {{#if cvcError}}class='is-error'{{/if}}
    value:bind="userCVC"/>
  <button disabled:from="isCardInvalid">Pay ${{amount}}</button>
</form>`
  }
});
```

- Example can-element merged out smartned. #8
```javascript
// can-webcomponent 
//import deepmerge from 'deepmerge'
import assign from "can-util/js/assign/assign";
import domData from "can-util/dom/data/data";
import domMutate from "can-util/dom/mutate/mutate";
import getChildNodes from "can-util/dom/child-nodes/child-nodes";
import nodeLists from "can-view-nodelist";
import Scope from "can-view-scope";
import stache from 'can-stache'
import DefineMap from 'can-define/map/'
import 'can-stache-bindings'
function BabelHTMLElement(){
  const newTarget = this.__proto__.constructor;
  return Reflect.construct(HTMLElement, [], newTarget);
}
Object.setPrototypeOf(BabelHTMLElement, HTMLElement);
Object.setPrototypeOf(BabelHTMLElement.prototype, HTMLElement.prototype);



export default class loginElement extends BabelHTMLElement {
  constructor(){
    super();
    // Design Notes I don't think that this

    this.observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type == "attributes") {
          console.log("attributes changed")
        }
      });
    });

    this.observer.observe(element, {
      attributes: true //configure it to listen to attribute changes
    });
    // can also be new define-map! or can-define propertys
    this.viewModel = new DefineMap.extend({
      token: 'any',
      page: 'any'
    })({});

    /* should be set on view Model :) and is for the attributes mixin of can-element
    this.observedAttributes = {
  		get: function(){
  			return this._observedAttributes || [];
  		}
  	}
    */
    this._rendered = false;
		//this.attachShadow({ mode: "open" });

		// Mark the element's viewModel for
		// binding purposes inside of can-stache
		let existingViewModel = domData.get.call(this, "viewModel");
		if(existingViewModel) {
			assign(this, existingViewModel.get());
		}
		domData.set.call(this, "viewModel", this.viewModel);
  }
  attributeChangedCallback(attr, oldVal, newVal) {
  	this.viewModel[attr] = newVal;
  }
  disconnectedCallback() {
		nodeLists.unregister(this._nodeList);
	}
  connectedCallback() {
    //use innerHTML as name because it gives code highlighting
    let viewModel = this.viewModel
    let innerHTML = `
        {{token}}
        <div class="login-form">
        <form on:submit="createSession(%event)" action="">
          <h2 class="text-center">Anmelden</h2>
          <div class="form-group" id="here">
            <input id="user-name"
              class="form-control"
              placeholder="apiToken"
              value:bind="./token"
              required="required"
              autocomplete="off"
              style="background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC'); background-repeat: no-repeat;
              background-attachment: scroll;
              background-size: 16px 18px;
              background-position: 98% 50%;">
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block btn-lg">Anmelden</button>
          </div>
          <div class="clearfix">
          <!--  <a href="#" class="pull-right">Forgot Password?</a> -->
          </div>
      </form>
      </div>
    `
    // My Rendering Method
    this.appendChild(stache(innerHTML)(viewModel))

    /* Can-Element Rendering Method
    // What is the root from which we render?
    let root = this.shadowRoot || this;
    // We only want to render once but connectedCallback gets called
    // any time the element is inserted which could be N number of times.
    if(!this._rendered) {
      // setup our nodeList
      this._nodeList = nodeLists.register([], null, true, false);
      this._nodeList.expression = "<" + this.localName + ">";
      // Append the resulting document fragment to the element
      domMutate.appendChild.call(root, stache(innerHTML)(new Scope(this.viewModel), null, this._nodeList));
      this._rendered = true;
    }
    // update the nodeList with the new children so the mapping gets applied
    nodeLists.update(this._nodeList, getChildNodes(root));
    */
  }
};

customElements.define('login-element', loginElement);
```

- Apply that changes from DoneJS
https://github.com/donejs/cli/issues/63 <- here are the main disccusion about that concepts of the change

also related:
- https://github.com/donejs/donejs/issues/540 - A discussion about moving functions to generators
- https://github.com/donejs/donejs/pull/892 - a pull to rename donejs (in workdir)
- https://github.com/donejs/donejs/issues/979 - a other PR that only is about merging donejs and done-cli

# Conclusion
1. make donejs binary be a real yo generator
  - functions that it needs to handle
    - can find current Project
    - can run binarys localToProject
    - can run generators localToProject (if not found global and found local else install new global)
    - can run global generators
    - can installIfMissing localToProject
    - can installIfMissingGlobal Global
    - can run npm scripts localToProject
    - can install/detect stealjs/stealjs version 
      - Only braking change in donejs tooling was StealJS 0.x -> 1.x can be handled via codemods
    - can install/detect canjs/canjs/package.json versions
      - The donejs tooling should be always newst versions
    - can install/detect documentjs/bit-docs and offer optional install

**IMPORTANT NOTE GENERAL**: Yeoman generators are made to be installed Global! and designed to get updated via a internal auto update function of Yeoman

- so donejs still don't needs to get reinstalled global often.

# More Deep Toughts
At Present: all relativ from github.com:
donejs/donejs does handle donejs add via global bin
-> it calls a internal init function that creates a dir and does installation of the donejs/cli
-> then it fires the current installed donejs/cli
-> the donejs-cli will installIfMissing the generator and
-> fire the generator.

MyProposal:
donejs/donejs installs a global yoman generator called generator-donejs
-> that gets used via yo donejs add
-> that can be then used also via donejs/donejs add translated to yo donejs add
-> the generator will create the project dir and install choosed donejs-cli in project and finish all the rest

so all configuration about the project goes into the generators

hope that makes sense

- the main change is to strip out donejs-cli out of the process of creating donejs-projects.
because it is simply a optional dependency at present donejs-cli's package.json gets used for adding dependencys thats realy bad i think we realy should move that to the generator.

- this way also any yoman user can do run: yo and install donejs generator via the yo installer and then do
yo donejs i think thats realy importent

it also enables and fixes path issus:
- donejs add app bla/project relativ will work
- donejs add app /home/bla/project absolute will work
also with all plugins and components and that

- it also enables updateing the generator to detect yarn or npm and use the right as also give config flat for that without the need to add yarn support to donejs-cli only donejs/donejs and the generator would install packages.

- then all generators get package named generator-donejs-cordova and so on this way we can make all accessible to yoman community and more comfortable to the donejs community

- the generators all get a versions folder with the definitions for every version we can also put migration into that if you like.

- Imagin automigrating from donejs 2.3 to 3 via codmods excuted via the generator

- yoman offers auto update for generators so they will always have the newst versions.

```
donejs-cli offers:
- using node_modules/.bin/* via donejs // this can easy be done via global donejs
- using generators via yeoman-environment relativ to project/node_modules/ // can easy be done via global donejs but should be depricated because its agains Yeoman usage Best Practice
- It has a list of packages and versions right we can move that to the generator and so enable it to get installed global and it works like a charm also update able via Yeoman autoupgrade and i do version pining via a extra fild in package.json i store all my donejs settings in it in a { donejs: {} } Object
- installIfMissing // can be replaced by simply run yarn install or npm install as both will only update if aviable or will detect already installed packages so can be deprecated.


i would propose to:
do a inidpendent generator-donejs that loads version related sub modules with custom repos so we end up
the generator-donejs can list all versions and let the user choose as also offer default.
it can detect also if there is donejs-cli in project directory and what version it has.

Repos:
generator-donejs
donejs-migration-1.x-2.x
donejs-version-1.1.0
this way we can even update with the semver style the projects.!
```

# Information
This proposal is more updated then the one in https://github.com/donejs/cli/issues/63 and also puts in the new concept of making that depend on a choose able upgrade able canjs version based on canjs/canjs/package.json that will allow inrange updates and upgrades via the canjs releases in a upgrade situation will also use codemods

- Example: steal-loader WebComponent #5
```html
<html>
<head>
</head>
<body>
     <script src="/node_modules/steal/steal.js" main="@empty" id="data-source">
    // Attach to Existing <component-tag> exported from can component
    require('~/components/report/list/') // this only works here because
//of its export i think when we do attachTag.bind(window) it could help
    function attachTag(tag,component){
      require(component)
      //TODO: get the tag from the component.
      var elements = document.querySelectorAll(tag)
      if (elements.length === 0) {
          var element = '<'+tag+'></'+tag+'>'
          var elementTemplate = require('can-stache')(element);
          windows.body.append(elementTemplate({}))
      } else {
        elements.forEach(function (currentValue, currentIndex, listObj) {
          var element = document.querySelectorAll(tag)[currentIndex].outerHTML // <tag></tag>
          var elementTemplate = require('can-stache')(element);
          document.querySelectorAll(tag)[currentIndex].parentNode.replaceChild(elementTemplate({}),document.querySelectorAll(tag)[currentIndex])
        })
      }
    }
    attachTag('report-list','~/components/report/list/')
    </script>
</body>
</html>
```


```html
  <script src="/node_modules/steal/steal.js" main="@empty" id="data-source">
    require('~/components/report/list/')
    class myElement extends HTMLElement {
      //TODO: To Work as a dome-component loader element
      constructor() {
          super();
      }
      connectedCallback() {
        if (!this.getAttribute('attached')) {
          this.setAttribute('attached',true)
          var template = require('can-stache')(this.outerHTML);
          console.log(Object.keys(template({})),this.outerHTML, template({}))
          this.parentNode.replaceChild(template({}),this)
        }
      }
    }
    customElements.define('report-list', myElement);
    </script>
```

- Import issues from donejs #4
  - https://github.com/donejs/donejs/issues/created_by/frank-dspeed
  - https://github.com/canjs/canjs/issues/created_by/frank-dspeed
  - https://github.com/donejs/donejs/issues/997

Current Planned Examples:

- Component with ViewModel, View, Tag that autorenders. using canjs 3.x
- Component with ViewModel, View, Tag that autorenders. using canjsX
- Showing CanJSx SSR
- Showing Incremental Rendering of Nested Components