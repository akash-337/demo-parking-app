import React from "react";
import currentmap from "./Pictures/currentmap.png";
import gpsicon from "./Pictures/gpsicon.png";
import Footor from "./Footor";
import { useHistory } from "react-router-dom";
import Searchbar from "./Searchbar";
import frequentvisiticon from "./Pictures/frequentvisiticon.png";

const css = {
  body: {
    position: "absolute",
    display: "grid",
    width: "100%",
    // height: "100%",
    left: "0",
    top: "0px",
  },
  top: {
    background: "#F2F4FF",
    borderRadius: "0px",
    paddingBottom: "30px",
  },
  main: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "8%",
    position: "inherit",
    marginRight: "128px",
  },
  maintxt: {
    fontFamily: "Comfortaa",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "30px",
    letterSpacing: "-0.015em",
    color: "#5D5C60",
  },
  inputbox: {
    display: "flex",
    justifyContent: "center",
    marginTop: " 12px",
  },

  list: {
    display: "grid",
    justifyContent: "center",
    gridGap: "10px",
    paddingTop: "30px",
    marginRight: "10px",
  },
  heading: {
    position: "inherit",
    paddingLeft: "10px",
  },
  headingtxt: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "24px",
    color: "#5D5C60",
    letterSpacing: "1px",
  },
  headbox: {
    position: "sticky",
    width: "341px",
    height: "78px",
    background: "rgba(242, 244, 255, 0.6)",
    borderRadius: "8px",
  },
  head: {
    position: "absolute",
    left: "calc(50% - 143.5px/2 - 87.75px)",
    top: "calc(50% - 24px/2 - 15px)",
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#303032",
    marginLeft: "40px",
  },
  events: {
    position: "absolute",
    left: "calc(50% - 143.5px/2 - 87.75px)",
    top: "calc(50% - 24px/2 + 12px)",
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "24px",
    fontFeatureSettings: "'tnum' on, 'lnum' on",
    color: "#89888D",
    background: "transparent",
    border: "none",
    marginLeft: "40px",
  },
  nearbybox: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "30px",
    marginRight: "158px",
  },
  nearby: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "24px",
    color: "#5D5C60",
    letterSpacing: "1px",
  },

  locators: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
  gpsicon: {
    position: "absolute",
    alignSelf: "center",
  },
};

const Search = () => {
  const history = useHistory();
  return (
    <div style={css.body}>
      <div style={css.top}>
        <div style={css.main}>
          <h1 style={css.maintxt}>
            Where are you going
            <br /> today?
          </h1>
        </div>

        <div style={css.inputbox}>
          <Searchbar />
        </div>
      </div>

      <div style={css.list}>
        <div style={css.heading}>
          <h1 style={css.headingtxt}>Frequent Visits</h1>
        </div>
        <div style={css.headbox}>
          <img
            src={frequentvisiticon}
            alt="error"
            style={{ marginTop: "15px", marginLeft: "18px" }}
          />
          <h2 style={css.head}>Ambience Mall Basement Par...</h2>
          <p style={css.events}>8 visits</p>
        </div>
        <div style={css.headbox}>
          <img
            src={frequentvisiticon}
            alt="error"
            style={{ marginTop: "15px", marginLeft: "18px" }}
          />
          <h2 style={css.head}>Ardee Mall Ground</h2>
          <p style={css.events}>3 visits</p>
        </div>
      </div>

      <div style={css.nearbybox}>
        <h1 style={css.nearby}>Nearby Parkings</h1>
      </div>

      <div style={css.locators}>
        <img
          src={currentmap}
          alt="error"
          style={css.currentmap}
          onClick={() => history.push("/map")}
        />
        <img src={gpsicon} alt="error" style={css.gpsicon} />
      </div>

      <Footor />
    </div>
  );
};

export default Search;
