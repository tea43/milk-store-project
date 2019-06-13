import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";
import { setSearchFiled, requestData } from "../actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchData.searchField,
    Data: state.requestData.Data,
    isPending: state.requestData.isPending,
    error: state.requestData.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchFiled(event.target.value)),
    onRequestData: () => dispatch(requestData())
  };
};

class App extends Component {
  
  componentDidMount() {
    this.props.onRequestData();
  }

  render() {
    const { searchField, onSearchChange, Data, isPending } = this.props;
    const filteredProducts = Data.filter(Data => {
      return Data.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (isPending) {
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
