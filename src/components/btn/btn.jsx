import "../btn/btn.css";
import { Link } from "react-router-dom";
import React from "react";

const Btn = ({ text, link = "", classname = "", type = "button" }) => {
  return (
    <Link to={link}>
      <button className={`custom-btn ${classname}`} type={type}>
        {text}
      </button>
    </Link>
  );
};

export default Btn;
