import React from "react";
import { useHistory } from "react-router";
import backicon from "./Pictures/backicon.png";
import verifiedicon from "./Pictures/verifiedicon.png";
import barcode from "./Pictures/barcode.png";
import parkingslot from "./Pictures/parkingslot.png";
import bookingtime from "./Pictures/bookingtime.png";
import Stylebtn from "./Stylebtn";

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
    marginTop: "24px",
  },
  backbtn: {
    position: "absolute",
    marginLeft: "16px",
    left: "0",
    backgroundColor: "transparent",
    border: "none",
  },
  headerheading: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "21px",
    marginRight: "5px",
  },
  card: {
    background: "rgba(242, 244, 255, 0.4)",
    borderRadius: "8px",
    width: "341px",
    height: "315px",
    justifySelf: "center",
    marginTop: "20px",
    display: "grid",
    justifyItems: "center",
    alignItems: "center",
  },
  heading: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "17px",
    textAlign: "center",
    color: "#9B9BA2",
    width: "270px",
  },
  booking: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "19px",
    textAlign: "center",
    color: "#303032",
  },
  footorheading: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#303032",
  },
  slotdetail: {
    fontFamily: "Comfortaa",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "10px",
    lineHeight: "11px",
    color: "#828282",
  },
  slotdetail_p: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "20px",
    color: "#303032",
  },
  slotbottom: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "20px",
    color: "#303032",
  },
  bottombox: {
    display: "-webkit-box",
    gap: "10px",
    marginTop: "15px",
  },
};

const Confirm = () => {
  const history = useHistory();
  return (
    <div style={css.body}>
      <div style={css.header}>
        <button
          style={css.backbtn}
          onClick={() => history.push("/confirmbooking")}
        >
          <img src={backicon} alt="error" />
        </button>
        <h1 style={css.headerheading}>Booking Confirmed</h1>
        <img src={verifiedicon} alt="error" />
      </div>

      <div style={css.card}>
        <h1 style={css.heading}>Scan this QR code at the parking enterance</h1>
        <img src={barcode} alt="error" />
        <h1 style={css.heading}>
          OR <br />
          Use the booking code
        </h1>
        <h1 style={css.booking}>34FSJ56I</h1>
      </div>

      <div
        style={{
          display: "grid",
          gap: "5px",
          marginTop: "33px",
          justifyContent: "center",
        }}
      >
        <h1 style={css.footorheading}>Booking Details</h1>
        <div style={css.bottombox}>
          <img src={parkingslot} alt="error" />
          <div style={{ display: "grid", gap: "5px" }}>
            <h2 style={css.slotdetail}>Parking Slot</h2>
            <h1 style={css.slotdetail_p}>F22</h1>
            <p style={css.slotbottom}>Basement 1</p>
          </div>
        </div>

        <div style={css.bottombox}>
          <img src={bookingtime} alt="error" />
          <div style={{ display: "grid", gap: "7px" }}>
            <h2 style={css.slotdetail}>Booking Hours</h2>
            <h1 style={css.slotdetail_p}>2:30pm - 5:30pm</h1>
            <form style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <input
                type="checkbox"
                id="alert1"
                name="alert1"
                value="alert"
              ></input>
              <label for="alert1" style={css.slotbottom}>
                Alert me 30 min before the parking ends.
              </label>
            </form>
          </div>
        </div>
        <div style={{ marginTop: "25px" }}>
          <Stylebtn onclick={() => history.push("/findyourslot")}>
            Navigate
          </Stylebtn>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
