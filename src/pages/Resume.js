import React from "react";
import CV from "./CV";
import Pdf from "../assets/documents/CV.pdf";
import "../styles/styles.css";
const Resume = () => {
  return (
    <div className="App">
      <div className="all-page-container">
        <CV pdf={Pdf} />
      </div>
      <hr />
    </div>
  );
};
export default Resume;
