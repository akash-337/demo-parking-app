import blueshaderight from "./Pictures/blueshaderight.png";
import blueshadeleft from "./Pictures/blueshadeleft.png";
import parkingimg from "./Pictures/parkingimg.png";
import { useHistory } from "react-router-dom";

const css = {
  body: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: "0px",
    top: "0px",
    background:
      "linear-gradient(346.67deg, rgba(67, 135, 253, 0.85) -8.77%, #5A76FB 86.12%)",
  },

  heading: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },

  headingtext: {
    position: "absolute",
    left: "6.67%",
    right: "6.93%",
    top: "4.69%",
    bottom: "89.58%",
    color: "#F2F4FF",
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "44px",
  },

  boxblueshaderight: {
    display: "flex",
    justifyContent: "flex-end",
  },

  blueshaderight: {
    position: "absolute",
  },

  boxblueshadeleft: {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: "106px",
  },

  blueshadeleft: {
    position: "absolute",
  },
  boxparkingimg: {
    display: "flex",
    justifyContent: "center",
    marginTop: "159px",
  },

  parkingimg: {
    position: "absolute",
  },
  line: {
    position: "absolute",
    left: "6.67%",
    right: "6.93%",
    top: "53.12%",
    bottom: "35.42%",
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "36px",
    lineHeight: "44px",
    color: "#FFFFFF",
  },
  tag: {
    position: "absolute",
    left: "8.8%",
    right: "9.07%",
    top: "66.67%",
    bottom: "26.56%",
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "26px",
    color: "#FFFFFF",
  },

  boxbtn: {
    display: "flex",
    justifyContent: "center",
  },

  btn: {
    width: "356px",
    height: "71px",
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "24px",
    color: "rgb(255, 255, 255)",
    background: "transparent",
    border: "2px solid white",
    borderRadius: "8px",
    position: "absolute",
    bottom: "10%",
    cursor: "pointer",
  },
  ".btn": { backgroundPosition: "center", transition: "background 0.8s" },
  ".btn:hover": {
    background:
      "#47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%",
  },
  ".btn:active": {
    backgroundColor: "#6eb9f7",
    backgroundSize: "100%",
    transition: "background 0s",
  },
};

const Getstart = () => {
  const history = useHistory();
  return (
    <>
      <div style={css.body}>
        <div style={css.boxblueshaderight}>
          <img src={blueshaderight} alt="error" style={css.blueshaderight} />
        </div>
        <div style={css.boxparkingimg}>
          <img src={parkingimg} alt="error" style={css.parkingimg} />
        </div>
        <div style={css.boxblueshadeleft}>
          <img src={blueshadeleft} alt="error" style={css.blueshadeleft} />
        </div>
        <div style={css.heading}>
          <h1 style={css.headingtext}>ParkEasy</h1>
        </div>
        <div style={css.heading}>
          <h1 style={css.line}>The best parking experience</h1>
        </div>
        <div style={css.heading}>
          <p style={css.tag}>
            Book a parking spot easily without wasting any time
          </p>
        </div>
        <div style={css.boxbtn}>
          <button style={css.btn} onClick={() => history.push("/signin")}>
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};
export default Getstart;
