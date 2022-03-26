import React, { useState } from "react";
import Dashboard from "./Dash/Dashboard";
function SignIn({ signUP, setSignUp }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [daseboard, setDaseboard] = useState(false);

  // function to update state of name with
  // value enter by user in form
  const handleChange = (e) => {
    setName(e.target.value);
  };

  // function to update state of password with
  // value enter by user in form
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // below function will be called when user
  // click on submit button .
  const handleSubmit = (e) => {
    //     if (password !== confPassword) {
    //       // if 'password' and 'confirm password'
    //       // does not match.
    //       alert("password Not Match");
    //     } else {
    // display alert box with user
    // 'name' and 'email' details .
    //  alert(
    //    'A form was submitted with Name :"' +
    //      name +
    //      '" , and Email :"' +
    //      email +
    //      '"'
    //  );

    //     }
    e.preventDefault();
    setDaseboard(true);
  };
  const handleCreateAcc = (e) => {
    e.preventDefault();
    setSignUp(!signUP);
  };
  return !daseboard ? (
    <div className="App">
      <header className="App-header">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h2>Blockchain based E-Acution system</h2>
          <h3> Sign-In </h3>
          <label>User name:</label>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <br />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            required
            onChange={(e) => {
              handlePasswordChange(e);
            }}
          />
          <br />

          <input type="submit" value="Submit" />
          <button onClick={(e) => handleCreateAcc(e)}>
            Create the new Account??
          </button>
        </form>
      </header>
    </div>
  ) : (
    <Dashboard />
  );
}

export default SignIn;
