import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import Header from "components/Navbars/Navbar.js";
// import "assets/css/style.scss";
//import Button from '@material-ui/core/Button';

export function Signup() {
  const info = [false, false, false, false, false, false, false];
  const [firstName, setFirstName] = useState("");
  const firstNameHandleChange = ({ target }) => {
    setFirstName(target.value);
  };

  const [lastName, setLastName] = useState("");
  const lastNameHandleChange = ({ target }) => {
    setLastName(target.value);
  };

  const [mail, setMail] = useState(null);
  const mailHandleChange = ({ target }) => {
    setMail(target.value);
  };

  const [password, setPassword] = useState("");
  const passwordHandleChange = ({ target }) => {
    setPassword(target.value);
  };

  const [confirmPassword, setConfirmPassword] = useState("");
  const confirmHandleChange = ({ target }) => {
    setConfirmPassword(target.value);
  };

  const [role, setRole] = useState("");
  const roleHandleChange = ({ target }) => {
    setRole(target.value);
  };

  const [sex, setSex] = useState("");
  const sexHandleChange = ({ target }) => {
    setSex(target.value);
  };

  const handleSubmit = () => {
    firstName === "" ? alert("please enter First Name") : (info[0] = true);
    lastName === "" ? alert("please enter Last Name") : (info[1] = true);
    mail === "" ? alert("please enter Mail") : (info[2] = true);
    password === "" ? alert("the password is empty") : (info[3] = true);
    confirmPassword !== password
      ? alert("the second password doesn't seem to be right")
      : (info[4] = true);
    role === "" ? alert("please select a role") : (info[5] = true);
    sex === "" ? alert("please select your sex") : (info[6] = true);
    function check(inf) {
      return inf;
    }
    if (info.every(check)) {
      alert("submit this");
    }
  };
  return (
    <>
      <Header color="info" />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="header"> Sign Up</div>
        <div className="content">
          <div className="image">
            <div className="img">
              <img src="logo.png"></img>
            </div>
          </div>
          <div className="form">
            <div className="formGroup">
              <label htmlFor="First Name">First Name</label>
              <input
                type="text"
                name="First Name"
                placeholder="First Name"
                onChange={firstNameHandleChange}
              ></input>
            </div>
            <div className="formGroup">
              <label htmlFor="Last Name">Last Name</label>
              <input
                type="text"
                name="Last Name"
                placeholder="Last Name"
                onChange={lastNameHandleChange}
              ></input>
            </div>
            <div className="formGroup">
              <label htmlFor="Mail">Mail</label>
              <input
                type="email"
                name="Mail"
                placeholder="Mail"
                onChange={mailHandleChange}
              ></input>
            </div>
            <div className="formGroup">
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                name="Password"
                placeholder="Password"
                id="pw"
                onChange={passwordHandleChange}
              ></input>
            </div>
            <div className="formGroup">
              <label htmlFor="Confirm Password">Confirm Password</label>
              <input
                type="password"
                name="Confirm Password"
                placeholder="Password Again"
                onChange={confirmHandleChange}
              ></input>
            </div>
            <div className="formGroup">
              <label htmlFor="Phone">Phone</label>
              <input
                type="number"
                name="Phone"
                placeholder="0123 45 67 89"
                size="10"
              ></input>
            </div>

            <div className="list">
              <select
                name="Type"
                id="Type"
                class="form-select"
                aria-label="Default select example"
                onChange={roleHandleChange}
              >
                <option value="" disabled="disabled" selected="selected">
                  Choose Your Role
                </option>
                <option value="Doctor">Doctor</option>
                <option value="Assistant">Assistant</option>
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
                <option value="Staff">Staff</option>
                <option value="GRH">GRH</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div className="list">
              <select
                name="Type"
                id="Type"
                class="form-select"
                aria-label="Default select example"
                onChange={sexHandleChange}
              >
                <option value="" disabled="disabled" selected="selected">
                  Sex
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <div className="btn">
            <button type="button" onClick={handleSubmit}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
