import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import car from "./Pictures/car.png";
import Stylebtn from "./Stylebtn";
import Cookies from 'universal-cookie';


const css = {
  body: {
    position: "absolute",
    display: "grid",
    width: "100%",
    // height: "100%",
    left: "0px",
    top: "0px",
  },
  maindiv: {
    display: "grid",
    justifyContent: "center",
    gridGap: "15px",
    marginTop: "25px",
    marginRight: "40px",
  },

  main: {
    position: "inherit",
  },
  maintxt: {
    fontFamily: "Comfortaa",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "28px",
    lineHeight: "31px",
    letterSpacing: "-0.015em",
    color: "#5D5C60",
  },
  para: {
    position: "inherit",
  },
  paratxt: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "19px",
  },
  imgposition: {
    display: "flex",
    justifyContent: "center",
    marginTop: "50.5px",
  },
  img: {
    position: "absolute",
    transform: "matrix(1, 0, 0, 1, 0, 0)",
  },
  heading: {
    position: "inherit",
    marginLeft: "7px",
  },
  headingtxt: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "24px",
    color: "#303032",
  },

  list: {
    display: "grid",
    justifyContent: "center",
    gridGap: "15px",
    marginTop: "200px",
  },

  headbox: {
    position: "sticky",
    width: "341px",
    height: "70px",
    background: "rgba(242, 244, 255, 0.6)",
    borderRadius: "8px",
  },
  head: {
    position: "absolute",
    width: "143.5px",
    height: "24px",
    left: "calc(50% - 143.5px/2 - 87.75px)",
    top: "calc(50% - 24px/2 - 15px)",
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "24px",
    fontFeatureSettings: "'tnum' on, 'lnum' on",
    color: "#89888D",
  },
  dropdown: {
    position: "absolute",
    width: "323px",
    height: "24px",
    left: "calc(50% - 143.5px/2 - 87.75px)",
    top: "calc(50% - 24px/2 + 12px)",
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "24px",
    fontFeatureSettings: "'tnum' on, 'lnum' on",
    color: "#303032",
    background: "transparent",
    border: "none",
    outline: "none",
  },
};

const Register = () => {
  const [userdata,setUserdata] = useState({});
  const [user, setUser] = useState({
    cars: "",
    vehicleNumber: "",
    vehicleName: "",
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };


  const postVehicleData = async (e) => {
    e.preventDefault();
    const cookies = new Cookies();
    const { cars, vehicleNumber, vehicleName } = user;
    const res = await fetch("/vehicleinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jwtoken :cookies.get('jwtoken') ,
        cars,
        vehicleNumber,
        vehicleName,
      }),
    });
    const data = await res.json();
    if (!data) {
      window.alert("Incomplete field");
      console.log("Incomplete field");
    } else {
      window.alert("Vehicle added successfull");
      console.log("Vehicle added successfull");
      history.push("/search");
    }
  };


  const callRegisterPage = async () => {
    const cookies = new Cookies();
    try {
      const res = await fetch("/vehicleregister", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jwtoken :cookies.get('jwtoken') 
        }),
      });
      const data = await res.json();
      setUserdata(data)
      if (!res.status === 200) {
        const error = new Error(res.error)
        throw error;
      }
    } catch (error) {
      console.log(error);
      history.push("/signin");
    }
  };

  
  useEffect(() => {
    callRegisterPage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const history = useHistory();
  if (!userdata) {
    return 'Loading .....'
  }
  return (
    <div style={css.body}>
      <div style={css.maindiv}>
        <form method="GET" id="username">
          <div style={css.main}>
            <h1 style={css.maintxt}>Welcome, {userdata.username}</h1>
          </div>
        </form>
        <div style={css.para}>
          <p style={css.paratxt}>Let’s start by setting up your account! </p>
        </div>
      </div>
      <div style={css.imgposition}>
        <img src={car} alt="error" style={css.img} />
      </div>

      <div style={css.list}>
        <div style={css.heading}>
          <h1 style={css.headingtxt}>Add Your Vehicle</h1>
        </div>
        <form method="POST" id="vehicleinfo" style={{display: "grid" ,gap: "15px"}} >
          <div style={css.headbox}>
            <h2 style={css.head}>Vehicle Type</h2>
            <select
              style={css.dropdown}
              name="cars"
              id="cars"
              value={user.cars}
              onChange={handleInput}
            >
              <option value="SmallCars">Small Cars</option>
              <option value="HatchbackCars">Hatchback Cars</option>
              <option value="SUVCars">SUV Cars</option>
              <option value="Vans&Trucks">Vans & Trucks</option>
            </select>
          </div>
          <div style={css.headbox}>
            <h2 style={css.head}>Vehicle License No.</h2>
            <input
              style={css.dropdown}
              type="text"
              name="vehicleNumber"
              id="vehicleNumber"
              placeholder="XX XX X XXXX"
              value={user.vehicleNumber}
              onChange={handleInput}
            ></input>
          </div>
          <div style={css.headbox}>
            <h2 style={css.head}>Vehicle Name</h2>
            <input
              style={css.dropdown}
              type="text"
              name="vehicleName"
              id="vehicleName"
              value={user.vehicleName}
              onChange={handleInput}
              placeholder="Enter Name"
            ></input>
          </div>
          <Stylebtn value="Get Started" onclick={postVehicleData}>Get Started</Stylebtn>
        </form>
      </div>
    </div>
  );
};
export default Register;
