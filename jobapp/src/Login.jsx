/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./styles/login.css";
// import "firebase/compat/auth";
import { useDispatch } from "react-redux";
import { loginuser } from "./components/userSlice";
import firebase from "firebase/compat/app";
import { auth } from "./firebase"; 
import Home from "./pages/Home";
function Login() {
  const [signup, setSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const register = (e) => {
    e.preventDefault();
    if (!name) {
      return alert("Name is required");
    }
    if (!email) {
      return alert("Email is required");
    }
    if (!password) {
      return alert("Password is required");
    }
     
   auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        auth.user
          .updateProfile({
            displayName: name,
          })
          .then(() => {
            dispatch(
              loginuser({
                email: auth.user.email,
                uid: auth.user.uid,
                displayName: name,
              })
            );
          });
      })
      .catch((error) => alert(error));
    setName("");
    setEmail("");
    setPassword("");
  };

  const signIn = (e) => {
    e.preventDefault();
    if (!email) {
      return alert("Email is required");
    }
    if (!password) {
      return alert("Password is required");
    }
 
    auth.signInWithEmailAndPassword(email, password).then((user) => {

      console.log(user);
       // eslint-disable-next-line no-unused-expressions
       auth.user;
       
    })
    .catch((error)=>{
      alert(error)
    })
    
     
    setEmail("");
    setPassword("");
     
  };

  return (
    <>
      <div className="loginScreen">
       
        <h3>Search Dream Job</h3>
        {signup === true ? (
          <form onSubmit={register}>
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" value="Sign Up" />
            <h4>
              Allready a member ?
              <span onClick={(e) => setSignUp(false)}>Login here</span>
            </h4>
          </form>
        ) : (
          <form onSubmit={signIn}>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" value="signIn" />
            <h4>
              Not a member ?
              <span onClick={(e) => setSignUp(true)}> Register here</span>
            </h4>
          </form>
        )}
      </div>
    </>
  );
}

export default Login;
