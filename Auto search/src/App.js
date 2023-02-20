import React from "react";
import "./App.css";
import Suggestion from "./components/Suggestion";
import Data from "./data.json";
import Tabular from "./components/tabular";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data.data,
      keyword: "",
      results: [],
      showsugg: false,
      showdetails: false,
    };
  }
  matchName = (name, keyword) => {
    let keylen = keyword.length;
    keyword = keyword.toLowerCase();
    name = name.toLowerCase().substring(0, keylen);
    return name === keyword && keylen !== 0;
  };
  onSearch = (value) => {
    let results = this.state.data.filter((item) =>
      this.matchName(item.name, value)
    );
    this.setState({
      results: results,
    });
    console.log(results);
  };
  updatefield = (value) => {
    this.setState({
      keyword: value,
      showsugg: true,
    });
    this.onSearch(value);
  };
  updatetext = (name, id) => {
    let res = this.state.data.filter(
      (item) => item.name === name && item.Emp_id === id
    );
    this.setState({
      keyword: name,
      showsugg: false,
      results: res,
    });
  };
  clear = () => {
    this.setState({
      keyword: "",
      showsugg: false,
      results: [],
    });
  };
  handleClick = () => {
    this.setState({
      showdetails: true,
    });
  };
  closedetails = () => {
    this.setState({
      showdetails: false,
      keyword: "",
      results: [],
    });
  };

  render() {
    return (
      <div className="APP">
        {this.state.showdetails ? (
          <Tabular results={this.state.results} close={this.closedetails} />
        ) : (
          <div className="autocomplete-container">
            <h1 className="main-head">Employee Details </h1>
            <br />
            <br />
            <div className="search-container">
              <div className="input">
                <input
                  className="search-bar"
                  placeholder="search"
                  onChange={(event) => this.updatefield(event.target.value)}
                  value={this.state.keyword}
                />
                {this.state.keyword.length > 0 ? (
                  <div className="button">
                    <button className="clear" onClick={() => this.clear()}>
                      X
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
            {this.state.showsugg && this.state.results.length > 0 ? (
              <div className="suggesstion-container">
                <Suggestion
                  results={this.state.results}
                  update={this.updatetext}
                />
              </div>
            ) : this.state.keyword.length > 0 &&
              this.state.results.length === 0 ? (
              <div className="no-result">
                <h1>No Matched Found for {this.state.keyword}</h1>
              </div>
            ) : null}
            {this.state.results.length === 1 &&
            this.state.keyword.toLowerCase() ===
              this.state.results[0].name.toLowerCase() ? (
              <div className="details">
                <button
                  className="detailsbutton"
                  onClick={() => this.handleClick()}
                >
                  View Details
                </button>
              </div>
            ) : null}
          </div>
        )}
      </div>
    );
  }
}
