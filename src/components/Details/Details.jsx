import React from "react";
import "./details.css";
import Btn from "../btn/btn";
const Details = () => {
  return (
    <div className="Maindetails">
      <h1>ILbETS</h1>
      <h2>בואו לשחק עם החבר'ה </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quam
        molestias molestiae necessitatibus eum amet nihil culpa! Officiis
        pariatur facere sit sunt dicta. Soluta dignissimos optio, illo quaerat
        saepe quod?
      </p>
      <div className="btn-container">
        <Btn link="/Login" text="לחץ כאן להתחברות" />
      </div>
    </div>
  );
};

export default Details;
