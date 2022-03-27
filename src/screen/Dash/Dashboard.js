import React from "react";
import { Link } from "react-router-dom";
class Dashboard extends React.Component {
    
  render() {
    return (
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div id="react-logo" />
        <h2>Choose Your Choice</h2>
        <div>
          <div style={{ padding: "5px", border: "2px solid green" }}>
            <Link to="/explore">Explore to biding</Link>
          </div>

          <br />
          <div style={{ padding: "5px", border: "2px solid green" }}>
            <Link to="/createbiding">Create a biding</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
