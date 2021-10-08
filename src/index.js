import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <Router>
//     <Switch>
//       <Route exact path="/" component={App} />
//       <Route exact path="/recent" component={App} />
//     </Switch>
//   </Router>,
//   document.getElementById("root")
// );
