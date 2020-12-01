import React from "react";

class Filter extends React.Component {
  // const filterByYear = () => {};

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(event);
  // };

  filterBy = (property) => {
    console.log(this.props.callback);
    console.log(property);
    this.props.callback(property);
  };
  render() {
    return (
      <div>
        <form>
          <input
            onChange={() => this.filterBy("mass")}
            id="mass"
            value="mass"
            type="checkbox"
            name="mass"
          ></input>
          <label for="mass">Mass</label>
          <input
            onChange={() => this.filterBy("year")}
            id="year"
            value="year"
            type="checkbox"
            name="year"
          ></input>
          <label for="year">Year</label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Filter;
