import React from "react";
import home from "./Pictures/home.png";
import profile from "./Pictures/profile.png";
import recent from "./Pictures/recent.png";
import { NavLink } from "react-router-dom";
import "./Footor.css"

const css = {
  footer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
    position: "relative",
    gap: "15%",
    marginBottom: "20px"
  },
  activebtn: {
    border: "none",
    width: "100px",
    height: "40px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#F2F4FF",
    textDecoration: 'none',
    gap: "5px",
    marginTop: "-8px",
  },
 
  btn: {
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    
  },
}

const Footor = () => {
  return (
    <div style={css.footer}>
      <NavLink exact activeStyle={css.activebtn} style={css.activetext} to="/search">
        <img src={home} alt="error" />
        <h1 className="text">Home</h1>
      </NavLink>
      <NavLink exact activeStyle={css.activebtn} to="/register">
        <img src={recent} alt="error" style={css.btn} />
        <h1 className="text" >Recent</h1>
      </NavLink>
      <NavLink exact activeStyle={css.activebtn} to="/register">
        <img src={profile} alt="error" style={css.btn}/>
        <h1 className="text">Profile</h1>
      </NavLink>
    </div>
  );
};

export default Footor;