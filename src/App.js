import React, { Component } from "react";
import Chart from "./Chart.js";
import Legend from "./Legend.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Cooking Seasonal Vegetables</h1>
        <Legend />
        <Chart />
      </div>
    );
  }
}

export default App;
