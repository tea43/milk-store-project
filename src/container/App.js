import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Data: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    fetch(
      "https://my-json-server.typicode.com/eklyagin/offensive-milk-store/posts"
    )
      .then(response => response.json())
      .then(posts => this.setState({ Data: posts }));
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredProducts = this.state.Data.filter(Data => {
      return Data.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (!this.state.Data.length) {
      return <h1 className="tc">Loading...</h1>;
    }
    return (
      <div className="tc">
        <h1 className="f1">Offensive Milk Store</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList Data={filteredProducts} />
        </Scroll>
      </div>
    );
  }
}

export default App;
