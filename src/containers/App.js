import React, { Component } from "react";
import Cardlist from "../components/Cardlist";
// import { robots } from "./robots";
import Searchbox from "../components/Searchbox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });

    // console.log(filteredRobots);
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

   
      return (
        <div className="tc">
          <h1 className="f1 ">Robofriends</h1>
          <Searchbox searchChange={this.onSearchChange} />

          <Scroll>
            <ErrorBoundry>
              <Cardlist robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    
  }
}

export default App;
