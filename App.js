
// If we have to create nested structure like this
// <div id="parent">
//     <div id="child">
//         <h1>I'm h1 tag</h1>
//          <h2>I'm h2 tag</h2>
//     </div>
//     <div id="child">
//         <h1>I'm h1 tag</h1>
//          <h2>I'm h2 tag</h2>
//     </div>
// </div>
//
//ReactElement(Object) => HTML (Browser Understands)

const parent = React.createElement(
    "div", 
    {id: "parent"}, 
    [React.createElement( 
        "div", 
        {id: "child1"},
        [React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag")] // can also do without using array
    ),
    React.createElement(
        "div", 
        {id: "child2"},
        [React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag")] // can also do without using array
    )]
)

//const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!");

console.log(parent) //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
