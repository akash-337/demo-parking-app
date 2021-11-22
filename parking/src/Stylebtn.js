const css = {
  btn: {
    display: "flex",
    justifyContent: "center",
    marginTop: '20px',
  },

  btntxt: {
    fontFamily: "SF Pro Text",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    color: "rgb(255, 255, 255)",
    background: "rgb(90, 118, 251)",
    border: "none",
    width: "341px",
    height: "57px",
    boxShadow: "2px 10px 10px rgba(90, 118, 251, 0.3)",
    position: "absolute",
    borderRadius: "10px",
    marginBottom: "12px",
  },
};

const Stylebtn = ({ children, onclick ,value }) => {
  return (
    <div style={css.btn}>
      <button style={css.btntxt} onClick={onclick}>
        {children}
      </button>
    </div>
  );
};

export default Stylebtn;
