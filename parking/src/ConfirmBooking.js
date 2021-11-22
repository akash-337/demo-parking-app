import React, { useState } from "react";
import { useHistory } from "react-router";
import backicon from "./Pictures/backicon.png";
import confirmmap from "./Pictures/confirmmap.png";
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
  confirmmap: {
    display: "flex",
    justifyContent: "center",
    marginTop: "19px",
  },
  headerheading: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "21px",
  },
  headingbox: {
    display: "grid",
    gridTemplateRows: "55px 40px",
    width: "225px",
    marginTop: "10px",
    marginLeft: "25px",
  },
  heading: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "113.8%",
    color: "#303032",
    marginLeft: "8px",
    marginTop: "17px",
  },
  time: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "100.3%",
    display: "flex",
    alignItems: "center",
    color: "#5D5C60",
    marginLeft: "8px",
  },
  eta: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "12px",
    lineHeight: "100.3%",
    display: "flex",
    alignItems: "center",
    color: "#5D5C60",
  },
  costbox: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    right: "35px",
    marginTop: "22px",
  },
  cost: {
    fontFamily: "Comfortaa",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "100.3%",
    color: "#303032",
    position: "absolute",
    right: "0",
  },
  costp: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "10px",
    lineHeight: "14px",
    color: "#BABAC3",

    position: "relative",
    right: "0",
    top: "19px",
  },
  bookingheader: {
    fontFamily: "Comfortaa",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "12px",
    lineHeight: "13px",
    color: "#828282",
    marginBottom: "6px",
  },
  bookingtimehr: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "30px",
    lineHeight: "100.3%",
    color: "#57575B",
    marginLeft: "20px",
  },
  bookingtimespan: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "11px",
    lineHeight: "100.3%",
    color: "#303032",
  },
  bookingtimebox: {
    background: "#F2F4FF",
    borderRadius: "4px",
    width: "158px",
    height: "50px",
  },
  boxstyling: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "25px",
    marginRight: "25px",
    marginTop: "24px",
  },
  innerbox: {
    display: "flex",
    justifyContent: "center",
    height: "48px",
    alignItems: "center",
    gap: "5px",
    letterSpacing: "2px",
  },
  selectbox: {
    display: "flex",
    justifyContent: "center",
  },
  paymentselect: {
    display: "flex",
    width: "100%",
    height: "60px",
    background: "#F2F4FF",
    borderRadius: "4px",
    border: "none",
    marginLeft: "25px",
    marginRight: "25px",
    outline: "none",
  },
  selectheader: {
    display: "flex",
    marginLeft: "25px",
    marginTop: "30px",
  },
  totalbill: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#303032",
  },
  coupon: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "14px",
    color: "#6FCF97",
  },
  amountpay: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "19px",
    color: "#303032",
  },
  payment: {
    display: "flex",
    justifyContent: "space-between",
  },
  payment_style: {
    display: "grid",
    gap: "5px",
    marginLeft: "25px",
    marginRight: "25px",
    marginTop: "35px",
  },
};

const ConfirmBooking = () => {
  const [time, setTime] = useState("00:00");
  const handletime = (e) => {
    setTime(e.target.value);
  };

  const history = useHistory();
  return (
    <div style={css.body}>
      <div style={css.header}>
        <button style={css.backbtn} onClick={() => history.push("/map")}>
          <img src={backicon} alt="error" />
        </button>
        <h1 style={css.headerheading}>Book Slot</h1>
      </div>
      <div style={css.confirmmap}>
        <img src={confirmmap} alt="error" />
      </div>
      <div style={{ display: "contents" }}>
        <div style={css.headingbox}>
          <h1 style={css.heading}>Ambience Mall Basement Parking</h1>
          <h2 style={css.time}>
            <span style={css.eta}>2.5 km &nbsp;</span> • 16 min
          </h2>
          <div style={css.costbox}>
            <h1 style={css.cost}>₹40</h1>
            <span style={css.costp}>per hour</span>
          </div>
        </div>
        <hr
          style={{
            marginLeft: "28px",
            marginRight: "20px",
            border: "0.1px solid #89888D",
          }}
        />
      </div>

      <div>
        <div style={css.boxstyling}>
          <div>
            <h1 style={css.bookingheader}>Time of booking</h1>

            <div style={css.bookingtimebox}>
              <div style={css.innerbox}>
                <h1 style={css.bookingtimehr}>{time}</h1>
                <form>
                  <input
                    style={{
                      width: "28px",
                      height: "50px",
                      background: "none",
                      outline: "none",
                      border: "none",
                    }}
                    type="time"
                    name="appt-time"
                    value="13:30"
                    onChange={handletime}
                  ></input>
                </form>
              </div>
            </div>
          </div>
          <div>
            <h1 style={css.bookingheader}>Book for</h1>

            <div style={css.bookingtimebox}>
              <div style={css.innerbox}>
                <h1 style={css.bookingtimehr}>
                  03<span style={css.bookingtimespan}>hrs.</span>
                  <span style={css.bookingtimemin}>00</span>
                  <span style={css.bookingtimespan}>min.</span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style={css.selectheader}>
            <h1 style={css.bookingheader}>Payment Method</h1>
          </div>
          <div style={css.selectbox}>
            <select
              name="paymentmethod"
              id="paymentmethod"
              style={css.paymentselect}
            >
              <option value="googlepay">Google Pay</option>
              <option value="paytm">Paytm</option>
              <option value="freecharge">Freecharge</option>
              <option value="netbanking">Net Banking</option>
            </select>
          </div>
        </div>
      </div>

      <div style={css.payment_style}>
        <div style={css.payment}>
          <h1 style={css.totalbill}>Est. total amount</h1>
          <p style={css.totalbill}>₹120</p>
        </div>
        <div style={css.payment}>
          <h1 style={css.coupon}>Coupon Discount</h1>
          <p style={css.coupon}>-₹10</p>
        </div>
        <hr
          style={{
            border: "0.1px solid #89888D",
          }}
        />
        <div style={css.payment}>
          <h1 style={css.amountpay}>Est. Amount to be paid</h1>
          <p css={css.amountpay}>₹110</p>
        </div>
      </div>
      <Stylebtn onclick={() => history.push("/confirm")}>
        Confirm Booking
      </Stylebtn>
    </div>
  );
};
export default ConfirmBooking;
