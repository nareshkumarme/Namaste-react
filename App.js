const heading = React.createElement("h1", {id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"Iam H1 tag"),
        React.createElement("h2",{},"I am H2 tag")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"Iam H3 tag"),
        React.createElement("h2",{},"I am H4 tag")
    ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);