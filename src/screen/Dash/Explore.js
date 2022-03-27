import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "react-table/react-table.css";
// import "./style.css";
import "./Explore.css";
import Popup from "./Popup";
export class Explore extends Component {
  state = {
    isOpen: false,
    newBidValue: "",
  };

  togglePopup() {
    // setIsOpen(!isOpen);
    console.log("called", this.state.isOpen);
    this.setState({ isOpen: !this.state.isOpen });
  }
  confirmCallbacks(){
       console.log("called");
  }
  render() {
    const data = [
      { name: "Anom", age: 19, gender: "Male" },
      { name: "Megha", age: 19, gender: "Female" },
      { name: "Subham", age: 25, gender: "Male" },
    ];
    return (
      <div>
        <table>
          <tr>
            <th>Product</th>
            <th>Current Bid</th>
            <th>Your Bid</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.gender}</td>
                <td>
                  <button onClick={() => this.togglePopup()}>Bid</button>
                </td>
              </tr>
            );
          })}
        </table>
        {this.state.isOpen && (
          <Popup
            content={
              <>
                <b>Enter your Bid</b>  <br />
                
                <input
                  type="text"
                  value={this.state.newBidValue}
                  required
                  onChange={(e) => {
                    this.setState({ newBidValue: e.target.value });
                  }}
                />
                <br />
                <button onClick={(e) => this.confirmCallbacks(e)}>OK</button>
              </>
            }
            handleClose={()=>this.togglePopup()}
          />
        )}
      </div>
    );
  }
}

export default Explore;
