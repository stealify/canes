//=> Stream of Single Prop => Stream that Combines Props of Streams => render inital template 

//=> returns template => bind template props to dom =>

var singlePropStream;
var CombinedStreamOfProps;
var templateStreamThatReturnsHTMLandModifyAbleDataStream;


templateStreamThatReturnsHTMLandModifyAbleDataStream.CombinedStreamOfProps;
templateStreamThatReturnsHTMLandModifyAbleDataStream.Template;

// Will Modify The Template
StreamFromDOMChanges.into(templateStreamThatReturnsHTMLandModifyAbleDataStream.CombinedStreamOfProps);

var PropertyDefinition = {
  src: "", //DOM,SERVICE,CODE ******
  name: "name",
  value: "Frank",
  allowUpdates: "*", //DOM,SERVICE,CODE ******
};
// Read Property Names and Values 
var StreamThatTranslatesObjectToPropertyDefinition;
var StreamThatTranslatesPropertyToPropertyDefinition;


var Component = {
  data: {
    "name": "value"
  },
  html: `
        <html></html>
    `,
  connectedCallback: (component) => {
    //component.data
    //component.html
  }
}; // Returns function that Renders the Component.html
// with Components.data via cheerio



