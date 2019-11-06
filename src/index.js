import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import SignUpForm from "./ValidatedLoginForm";

function App() {
  return (
    <div className="App">
      <h1>Signup Form</h1>
      <SignUpForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
