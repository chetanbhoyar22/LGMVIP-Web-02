
import Users from "./components/cards";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users_data: [], loading: false };
    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({ loading: true });

    setTimeout(
      async function () {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const jsonresponse = await response.json();
        console.log(jsonresponse);
        this.setState({ users_data: jsonresponse["data"], loading: false });
      }.bind(this),
      2500
    );
  }
  
  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navitems">
            <h2><b>User Profile App</b></h2>
            
            <button className="fetchbtn" onClick={this.updateState}>
              <b>Get Users</b>
            </button>
          </div>
        </nav>
        <br/><br/>
        <div className="userdatacontainer">
          <Users loading={this.state.loading} users={this.state.users_data} />
        </div>
        <div class="container my-50">
          
        <br/><br/>
        <footer className="footer">
          Created By &copy; Chetan Bhoyar 
        </footer>
        <footer className="footer">
          LetsGrowMore - WebDev Intern
        </footer>
        <br/><br/>
        </div>
      </>
    );
  }
}
export default App;
