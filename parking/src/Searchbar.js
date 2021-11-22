import searchicon from "./Pictures/searchicon.png";
import settings from "./Pictures/settings.png";

const css={
    input: {
        height: "48px",
        width: "282px",
        borderRadius: "8px",
        marginRight: "12px",
        background: "#FFFFFF",
        boxShadow: "0px 4px 14px -8px #B2B8DA",
        border: "none",
        outline: "none",
        fontFamily: "Comfortaa",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "24px",
        color: "#BDBDBD",
        paddingLeft: "48px",
      },
    
      searchbtn: {
        height: "48px",
        width: "48px",
        background: "#5A76FB",
        boxShadow: "0px 4px 14px -8px #B2B8DA",
        borderRadius: "8px",
        border: "none",
      },
      searchicon: {
        marginLeft: "16px",
        position: "absolute",
        marginTop: "15px",
      },
}


const Searchbar = () => {
  return (
    <form>
      <div>
        <img src={searchicon} alt="error" style={css.searchicon} />
      </div>
      <input
        type="text"
        id="address-input"
        placeholder="Search Parking"
        style={css.input}
      ></input>
      <button style={css.searchbtn}>
        <img src={settings} alt="error" />
      </button>
    </form>
  );
};
export default Searchbar