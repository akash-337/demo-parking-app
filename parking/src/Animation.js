import React from "react";
import { motion } from "framer-motion";
import animationicon from "./Pictures/animationicon.png";

const containerStyle1 = {
  position: "absolute",
  width: "320px",
  height: "320px",
  boxSizing: "border-box",
};

const circleStyle1 = {
  display: "block",
  width: "320px",
  height: "320px",
  border: "50px solid #ffffff",
  borderTop: "50px solid #a5b4fa",
  borderRadius: "50%",
  position: "absolute",
  boxSizing: "border-box",
  // top: 0,
  // left: 0,
};

const spinTransition1 = {
  loop: Infinity,
  ease: "linear",
  duration: 1,
};

const containerStyle2 = {
  position: "absolute",
  width: "290px",
  height: "290px",
  boxSizing: "border-box",
};

const circleStyle2 = {
  display: "block",
  width: "290px",
  height: "290px",
  border: "30px solid #ffffff",
  borderTop: "30px solid #bfc9fb",
  borderRadius: "50%",
  position: "absolute",
  boxSizing: "border-box",
  // top: 0,
  // left: 0,
};

const spinTransition2 = {
  loop: Infinity,
  ease: "linear",
  duration: 2,
};

const containerStyle3 = {
  position: "absolute",
  width: "260px",
  height: "260px",
  boxSizing: "border-box",
};

const circleStyle3 = {
  display: "block",
  width: "260px",
  height: "260px",
  border: "30px solid #ffffff",
  borderTop: "30px solid #e0e6ff",
  borderRadius: "50%",
  position: "absolute",
  boxSizing: "border-box",
  // top: 0,
  // left: 0,
};

const spinTransition3 = {
  loop: Infinity,
  ease: "linear",
  duration: 3,
};

export default function Animation() {
  return (
    <div
      style={{
        display: "flex",
        width: "320px",
        height: "335px",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={containerStyle1}>
        <motion.span
          style={circleStyle1}
          animate={{ rotate: 360 }}
          transition={spinTransition1}
        />
      </div>
      <div style={containerStyle2}>
        <motion.span
          style={circleStyle2}
          animate={{ rotate: 360 }}
          transition={spinTransition2}
        />
      </div>
      <div style={containerStyle3}>
        <motion.span
          style={circleStyle3}
          animate={{ rotate: 360 }}
          transition={spinTransition3}
        />
      </div>
      <img src={animationicon} alt="error" />
    </div>
  );
}
