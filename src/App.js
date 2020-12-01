import "./App.css";
import React from "react";
import Header from "./Components/Header";
//import List from "./Components/List";
import Map from "./Components/Map";
import * as api from "./api";
import Filter from "./Components/Filter";

class App extends React.Component {
  state = { data: [] };

  componentDidMount() {
    console.log("mounting");
    api.getData().then((data) => {
      this.setState({ data });
    });
  }

  filteringCB = (toFilterBy) => {
    console.log(toFilterBy);
    // this.setState({ [toFilterBy]: true });
    api.getData(toFilterBy).then((data) => {
      this.setState({ data });
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Map data={this.state.data} />
        {/* <List data={this.state.data} /> */}
        <Filter callback={this.filteringCB} />
      </div>
    );
  }
}

export default App;
