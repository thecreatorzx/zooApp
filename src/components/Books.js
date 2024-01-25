import React from "react";
import Hero from "./Hero";

const Books = () => {
  return (
    <div className="book-box">
      <div className="book">
        <div className="coverLeft1">
          <Hero />
        </div>
        <div className="coverLeft2"></div>
        <div className="page1Left"></div>
        <div className="page1Right"></div>
        <div className="page2Left"></div>
        <div className="page2Right"></div>
        <div className="page3Left"></div>
        <div className="page3Right"></div>
        <div className="coverRight1"></div>
        <div className="coverRight2">
          <div className="endSide"></div>
          <div className="endBottom"></div>
        </div>
      </div>
    </div>
  );
};

export default Books;
