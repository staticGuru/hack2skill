import React, { Component } from "react";

export class Create extends Component {
  state = {
    productName: "",
    baseValue: "",
  };
  handleChange = (e) => {
    if (e.target.value) {
      this.setState({ productName: e.target.value });
    }
  };
  handleBaseValue = (e) => {
    if (e.tartget.value) {
      this.setState({ baseValue: e.target.value });
    }
  };
  handleSubmit=(e)=>{
       console.log("called");
  }
  render() {
    return (
      <div>
      <h3>Create Your Auction</h3>
        <label>Product Name:</label>
        <input
          type="text"
          value={this.state.productName}
          required
          onChange={(e) => {
            this.handleChange(e);
          }}
        />
        <br />
        <label>Base value:</label>
        <input
          type="text"
          value={this.state.baseValue}
          required
          onChange={(e) => {
            this.handleBaseValue(e);
          }}
        />
        <br />
        <button onClick={() => this.handleSubmit()}>Submit</button>
      </div>
    );
  }
}

export default Create;
