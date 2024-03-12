import React from "react";
import  ReactDOM  from "react-dom";
const parent =  [ React.createElement("h1",{id:"heading"},"Incrediants Fruits"),
      React.createElement("div",{id:"parent"},[
        React.createElement("ol",{},[
         React.createElement("li",{},"apple"),
         React.createElement("li",{},"mango",[
          React.createElement("li",{},"Juice"),
         ]),
         React.createElement("li",{},"orange"),
        ]),
      ]),
]
const heading = React.createElement("h1", {id:"heading",xyz:"abc"},"Hello world from react");
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);