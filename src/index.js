import React from "react";
import ReactDom from "react-dom";
import { render } from "react-dom";
import "./index.css";
import Todolist from "./Todolist";

const App = () => (
  <div>
    <Todolist />
  </div>
);

render(<App />, document.getElementById("container"));
