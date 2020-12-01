import "./App.css";
import React from "react";
import Header from "./Components/Header";
//import List from "./Components/List";
import Map from "./Components/Map";
import * as api from "./api";
import Filter from "./Filter"

class App extends React.Component {
  state = { data: [] };

  componentDidMount() {
    api.getData().then((data) => {
      this.setState({ data });
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Map data={this.state.data} />
        {/* <List data={this.state.data} /> */}
        <Filter />
      </div>
    );
  }
}

export default App;
