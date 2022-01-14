import React from "react";
import Navbars from "./components/Navbar";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbars />
        <h1>Hello React</h1>
      </div>
    );
  }
}
