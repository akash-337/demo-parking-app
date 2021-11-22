import React from "react";
import map from "./Pictures/map.png";
import Searchbar from "./Searchbar";
import parksample from "./Pictures/parksample.png";
import Sheet from "react-modal-sheet";
import handicapped from "./Pictures/handicapped.png";
import valet from "./Pictures/valet.png";
import Stylebtn from "./Stylebtn";
import locationicon from "./Pictures/locationicon.png";
import teleicon from "./Pictures/teleicon.png";
import timingicon from "./Pictures/timingicon.png";
import { useHistory } from "react-router-dom";

const css = {
  body: {
    display: "grid",
    position: "absolute",
    width: "100%",
    height: "100%",
    left: "0px",
    top: "0px",
  },
  background: {
    backgroundImage: `url(${map})`,
    height: "inherit",
    width: "auto",
  },
  inputbox: {
    display: "flex",
    justifyContent: "center",
    marginTop: "24px",
  },
  cardbox: {
    position: "fixed",
    left: "50%",
    bottom: "-20px",
    transform: "translate(-50%, -50%)",
    margin: "0 auto",
  },
  card: {
    display: "flex",
    width: "326.03px",
    height: "105.81px",
    background: "#FFFFFF",
    boxShadow: "0px 4.92118px 24.6059px rgba(32, 32, 32, 0.06)",
    borderRadius: "15.9938px",
  },
  img: {
    alignSelf: "center",
    height: "73px",
    width: "79px",
    marginLeft: "12px",
  },
  headingbox: {
    display: "grid",
    gridTemplateRows: "61px 43px",
    width: "174px",
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
    right: "15px",
    top: "20px",
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
  bottomsheet: {
    display: "flex",
  },
  faciheadingbox: {
    marginLeft: "12px",
  },
  faciheading: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "12px",
    lineHeight: "100.3%",
    display: "flex",
    alignItems: "center",
    color: "#303032",
  },
  facalities_title: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "10px",
    lineHeight: "12px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#89888D",
  },
  facalities: {
    display: "flex",
    gap: "20px",
    marginTop: "10px",
    marginLeft: "12px",
  },
  facalitiesbox: {
    display: "grid",
    width: "40px",
    height: "40px",
  },

  locationtimebox: {
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-start",
    marginTop: "50px",
    marginLeft: "12px",
    gap: "30px",
  },
  locationbox: {
    display: "-webkit-inline-box",
    gap: "10px",
  },
  timingbox: {
    display: "-webkit-inline-box",
    gap: "10px",
  },
  telebox: {
    display: "flex",
    gap: "10px",
  },
  infobox: {
    display: "grid",
    marginTop: "10px",
    gap: "10px",
  },

  location_txt: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#303032",
    width: "300px",
  },
  timingicon: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "14px",
    color: "#6FCF97",
  },
  teleicon: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#3190FC",
  },
  info: {
    fontFamily: "Comfortaa",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "10px",
    lineHeight: "11px",
    color: "#828282",
  },
  infopara: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "20px",
    color: "#303032",
  },
};

const Map = () => {
  const history = useHistory();
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div style={css.body}>
      <div style={css.background}>
        <div style={css.inputbox}>
          <Searchbar />
        </div>
        <div style={css.cardbox} onClick={() => setOpen(true)}>
          <div style={css.card}>
            <img src={parksample} alt="error" style={css.img} />
            <div style={css.headingbox}>
              <h1 style={css.heading}>Ambience Mall Basement Parking</h1>
              <h2 style={css.time}>
                <span style={css.eta}>ETA: </span> 16 min
              </h2>
            </div>
            <div style={css.costbox}>
              <h1 style={css.cost}>₹40</h1>
              <span style={css.costp}>per hour</span>
            </div>

            <>
              <Sheet
                isOpen={isOpen}
                initialSnap={1}
                snapPoints={[620, 250, 0]}
                onClose={() => setOpen(false)}
              >
                <Sheet.Container>
                  <Sheet.Header />
                  <Sheet.Content>
                    {
                      <>
                        <div style={css.bottomsheet}>
                          <img src={parksample} alt="error" style={css.img} />

                          <div style={css.headingbox}>
                            <h1 style={css.heading}>
                              Ambience Mall Basement Parking
                            </h1>
                            <h2 style={css.time}>
                              <span style={css.eta}>2.5 km &nbsp;</span> • 16
                              min
                            </h2>
                          </div>
                          <div style={css.costbox}>
                            <h1 style={css.cost}>₹40</h1>
                            <span style={css.costp}>per hour</span>
                          </div>
                        </div>
                        <div style={css.faciheadingbox}>
                          <h1 style={css.faciheading}>Facilities</h1>
                        </div>
                        <div style={css.facalities}>
                          <div style={css.facalitiesbox}>
                            <img src={handicapped} alt="error" />
                            <p style={css.facalities_title}>Handi-capped</p>
                          </div>
                          <div style={css.facalitiesbox}>
                            <img src={valet} alt="error" />
                            <p style={css.facalities_title}>Valet</p>
                          </div>
                        </div>

                        <div>
                          <div style={css.locationtimebox}>
                            <div style={css.locationbox}>
                              <img src={locationicon} alt="error" />
                              <h1 style={css.location_txt}>
                                Basement 1,2,3 & Open park, Ambience Mall
                                Gurgaon
                              </h1>
                            </div>
                            <div style={css.timingbox}>
                              <img src={timingicon} alt="error" />
                              <div>
                                <h1 style={css.location_txt}>
                                  09:00am - 11:00pm
                                </h1>
                                <p style={css.timingicon}>Open Now</p>
                              </div>
                            </div>

                            <div style={css.telebox}>
                              <img src={teleicon} alt="error" />
                              <h1 style={css.teleicon}>08860202202</h1>
                            </div>
                            <div style={css.infobox}>
                              <h1 style={css.info}>Information</h1>
                              <p style={css.infopara}>
                                Other utilities at Ambience Mall include around
                                76 escalators and elevators, CCTV's, dog squads
                                and strict security. It opens and closes at 10am
                                and 11pm respectively.
                              </p>
                            </div>
                          </div>
                          <div >
                            <Stylebtn
                              onclick={() => history.push("/confirmbooking")}
                            >
                              Book Slot
                            </Stylebtn>
                          </div>
                        </div>
                      </>
                    }
                  </Sheet.Content>
                </Sheet.Container>

                <Sheet.Backdrop />
              </Sheet>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
