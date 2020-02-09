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
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
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
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
