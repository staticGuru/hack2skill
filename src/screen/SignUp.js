import React, { useState } from "react";
import SignIn from "./SignIn";
import Signup2 from "./Signup2";

function SignUp() {
  //
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confPassword, setConfPassword] = useState("");
  const [signUP, setSignUp] = useState(false);
  // const [SignInName, setSignInName] = useState("");
  // const [SignInPassword, setSignInPassword] = useState("");
  // // function to update state of name with
  // // value enter by user in form
  // const handleChange = (e) => {
  //   setName(e.target.value);
  // };

  // // function to update state of email with value
  // // enter by user in form
  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };
  // // function to update state of password with
  // // value enter by user in form
  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };
  // // function to update state of confirm password
  // // with value enter by user in form
  // const handleConfPasswordChange = (e) => {
  //   setConfPassword(e.target.value);
  // };
  // // below function will be called when user
  // // click on submit button .
  // const handleSubmit = (e) => {
  //   if (password !== confPassword) {
  //     // if 'password' and 'confirm password'
  //     // does not match.
  //     alert("password Not Match");
  //   } else {
  //     // display alert box with user
  //     // 'name' and 'email' details .
  //     // alert(
  //     //   'A form was submitted with Name :"' +
  //     //     name +
  //     //     '" , and Email :"' +
  //     //     email +
  //     //     '"'
  //     // );
  //     setSignUp(signUP);
  //   }
  //   e.preventDefault();
  // };
  // const handleSignInUserNameChange = (e) => {
  //   setSignInName(e.target.value);
  // };
  // const handleSignInPasswordChange = (e) => {
  //   setSignInPassword(e.target.value);
  // };
  // const SignUpCallbacks = (e) => {
  //   setSignUp(!signUP);
  // };
  // const handleSignInSubmit = (e) => {
  //   console.log("called");
  // };
  return signUP ? (
    <div className="App">
       
      <Signup2  signUp={signUP} setSignUp={setSignUp}/>
    </div>
  ) : (
    <div className="App">
    
       <SignIn signUp={signUP} setSignUp={setSignUp}/>
   
  </div>
  );
}

export default SignUp;
