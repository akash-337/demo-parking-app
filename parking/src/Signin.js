import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Cookies from 'universal-cookie';

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
    marginTop: "145px",
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
    width: "100%",
    paddingLeft: "10px",
    outline: "none",
    background:
      "linear-gradient(rgb(90 118 251), rgb(90 118 251)) center bottom 5px / calc(100% - 10px) 2px no-repeat",
    border: "none",
  },
  inputbox: {
    display: "flex",
    justifyContent: "center",
    marginTop: "60px",
  },
  form: {
    display: "grid",
    gap: "24px",
    width: "80%",
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
    marginTop: "90px",
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

const Signin = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setLogin({ ...login, [name]: value });
  };

  const loginUser = async (e) => {
    e.preventDefault();

    const { email, password } = login;

    const res = await fetch("http://localhost:5000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid credentials");
    } else {
      window.alert("Login Successfull");
      const cookies =  new Cookies();
      console.log(data);
      
      cookies.set('jwtoken', data.jwtoken);
      console.log(cookies);
      history.push('/register')
    }
  };

  const history = useHistory();
  return (
    <div style={css.body}>
      <div style={css.heading}>
        <h1 style={css.h1}>ParkEasy</h1>
      </div>
      <div style={css.inputbox}>
        <form id="signinform" method="POST" style={css.form}>
          <input
            style={css.input}
            type="email"
            id="email"
            name="email"
            value={login.email}
            placeholder="Email"
            onChange={handleInput}
          ></input>

          <input
            style={css.input}
            id="password"
            name="password"
            type="password"
            value={login.password}
            placeholder="Password"
            onChange={handleInput}
          ></input>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "55px",
            }}
          >
            <input
              type="submit"
              id="signin"
              name="signin"
              value="Log in"
              style={css.btn}
              onClick={loginUser}
            ></input>
          </div>
        </form>
      </div>

      <div style={css.signupbox}>
        <h1 style={css.signup}>
          Don't have an account?
          <span style={css.signupspam} onClick={() => history.push("/signup")}>
            &nbsp;Sign up
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Signin;
