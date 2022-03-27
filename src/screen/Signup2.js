import React, { useState } from "react";

function Signup2({ signUP, setSignUp }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  // const [signUP, setSignUp] = useState(false);

  // function to update state of name with
  // value enter by user in form
  const handleChange = (e) => {
    setName(e.target.value);
  };

  // function to update state of email with value
  // enter by user in form
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  // function to update state of password with
  // value enter by user in form
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  // function to update state of confirm password
  // with value enter by user in form
  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  };
  // below function will be called when user
  // click on submit button .
  const handleSubmit = (e) => {
    if (password !== confPassword) {
      // if 'password' and 'confirm password'
      // does not match.
      alert("password Not Match");
    } else {
      // display alert box with user
      // 'name' and 'email' details .
      // alert(
      //   'A form was submitted with Name :"' +
      //     name +
      //     '" , and Email :"' +
      //     email +
      //     '"'
      // );
      setSignUp(signUP);
    }
    e.preventDefault();
  };
  return (
    <div style={{color:'black'}}>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h2>Blockchain based E-Acution system</h2>
        <h3> Sign-up Form </h3>
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

        <label>Email:</label>
        <input
          type="email"
          value={email}
          required
          onChange={(e) => {
            handleEmailChange(e);
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

        <label>Confirm Password:</label>
        <input
          type="password"
          value={confPassword}
          required
          onChange={(e) => {
            handleConfPasswordChange(e);
          }}
        />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Signup2;
