import React, { Component } from "react";
import { CardList } from "./component/card-list/card-list.component";
import "./App.css";
import { SearchBox } from "./component/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }
  
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <SearchBox
          placeholder="search monster"
          handleChange={e => {
            this.setState({ searchField: e.target.value }, () => {
              console.log(this.state);
            });
          }}
        />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
