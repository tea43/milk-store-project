import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";
import { setSearchFiled } from "../actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchFiled(event.target.value))
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      Data: []
    };
  }

  componentDidMount() {
    fetch("https://my-json-server.typicode.com/tea43/milk-store-project/posts")
      .then(response => response.json())
      .then(posts => this.setState({ Data: posts }));
  }

  render() {
    const { searchField, onSearchChange } = this.props;
    const filteredProducts = this.state.Data.filter(Data => {
      return Data.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });
    if (!this.state.Data.length) {
      return <h1 className="tc">Loading...</h1>;
    }
    return (
      <div className="tc">
        <h1 className="f1">Offensive Milk Store</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList Data={filteredProducts} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
