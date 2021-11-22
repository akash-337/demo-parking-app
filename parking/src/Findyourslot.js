import React from "react";
import Stylebtn from "./Stylebtn";
import Animation from "./Animation";

const css = {
  body: {
    display: "grid",
    position: "absolute",
    width: "100%",
    left: "0px",
    top: "0px",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    marginTop: "35px",
  },
  heading: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "32px",
    lineHeight: "30px",
    color: "#5C5C60",
    textAlign: "center",
  },
  heading_span: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "30px",
    color: "#5C5C60",
  },
  footer: {
    display: "flex",
    justifyContent: "center",
  },
  footerheading: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "21px",
    color: "#333333",
    textAlign: "center",
  },
  footerspan: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "17px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#5D5C60",
    marginTop: "14px",
  },
};

const Findyourslot = () => {
  return (
    <div style={css.body}>
      <div style={css.header}>
        <h1 style={css.heading}>
          F22 <br />
          <span style={css.heading_span}>Basement 1</span>
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "48px",
          marginBottom: "48px",
        }}
      >
        <Animation />
      </div>

      <div style={css.footer}>
        <h1 style={css.footerheading}>
          Find your Slot <br />
          <span style={css.footerspan}>
            Follow the signal to reach your designated <br/> parking slot
          </span>
        </h1>
      </div>
      <div style={{ marginTop: "25px" }}>
        <Stylebtn>Slide to Park</Stylebtn>
      </div>
    </div>
  );
};

export default Findyourslot;
