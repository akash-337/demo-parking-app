import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const css = {
  body: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: "0px",
    top: "0px",
    textAlign: "center",
    background:
      "repeating-linear-gradient(\n45deg\n, rgb(90 118 251 / 10%), transparent 182px)",
  },
  heading: {
    display: "flex",
    justifyContent: "center",
    marginTop: "65px",
  },
  h1: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "36px",
    lineHeight: "44px",
    color: "#5A76FB",
  },
  input: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "21px",
    color: "#333333",
    height: "50px",
    width: "80%",
    paddingLeft: "10px",
    outline: "none",
    background:
      "linear-gradient(rgb(90 118 251), rgb(90 118 251)) center bottom 5px / calc(100% - 10px) 2px no-repeat",
    border: "none",
  },
  inputbox: {
    display: "flex",
    justifyContent: "center",
    marginTop: "55px",
  },
  form: {
    display: "grid",
    gap: "21px",
  },
  btn: {
    fontFamily: '"SF Pro Text"',
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    color: "rgb(255, 255, 255)",
    background: "rgb(90, 118, 251)",
    border: "none",
    width: "180px",
    height: "50px",
    boxShadow: "rgb(90 118 251 / 62%) 2px 10px 10px",
    position: "absolute",
    borderRadius: "5px",
  },
  signupbox: {
    display: "flex",
    justifyContent: "center",
    marginTop: "100px",
  },
  signup: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "21px",
    color: "#333333",
  },
  signupspam: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "21px",
    color: "rgb(90 118 251)",
  },
};

const Signup = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleform = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { username, email, phone, password, cpassword } = user;

    const res = await fetch("/app/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        phone,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("Registration unsuccessfull");
      console.log("Registration unsuccessfull");
    } else {
      window.alert("Registration successfull");
      console.log("Registration successfull");
      history.push("/signin");
    }
  };
  return (
    <div style={css.body}>
      <div style={css.heading}>
        <h1 style={css.h1}>Register</h1>
      </div>
      <form id="signupform" method="POST" style={css.form}>
        <div style={css.inputbox}>
          <input
            style={css.input}
            placeholder="Username"
            type="name"
            id="username"
            name="username"
            value={user.username}
            onChange={handleform}
          ></input>
        </div>
        <div>
          <input
            style={css.input}
            placeholder="Email"
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleform}
          ></input>
        </div>
        <div>
          <input
            style={css.input}
            placeholder="Phone"
            type="number"
            id="phone"
            name="phone"
            value={user.phone}
            onChange={handleform}
          ></input>
        </div>
        <div>
          <input
            style={css.input}
            placeholder="Password"
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleform}
          ></input>
        </div>
        <div>
          <input
            style={css.input}
            placeholder="Confirm Password"
            type="password"
            id="cpassword"
            name="cpassword"
            value={user.cpassword}
            onChange={handleform}
          ></input>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <input
            type="submit"
            id="signup"
            name="signup"
            value="Sign Up"
            onClick={postData}
            style={css.btn}
          ></input>
        </div>
      </form>
      <div style={css.signupbox}>
        <h1 style={css.signup}>
          I'am already a member !
          <span style={css.signupspam} onClick={() => history.push("/signin")}>
            &nbsp;Sign in
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Signup;
