/*
  The Nils Loader is a Stream of web components that get async attached to the dom
  >The Nils Loader Supports dom diffing to dynamicly update a already loaded component.
  >This is usefull when you render out all webcomponents inital state already via ssr
  >if a node is not there no dom diffing happens and the component
  >gets registered as and inserted or only inserted
  async preLoading of components can happen also you control the flow of your page Loading

  <script src="nils-loader.js" defer>
  // Your Loading Algo Here
  nils.stream.of([
    comp, comp, comp // components with same dependencies
  ]).loop(lastSetVal, setValue=>{
    // Wait for all components to be loaded and do something
  })

  .combine((bundle1))

  </script>

Network Interactive Logic Services
Neuronal Interactiv Logic Services
New Intellegent Layer Services
Nice Interoperable Level So
Needless Internet Logic superframework


Component selectors to sync


 */
