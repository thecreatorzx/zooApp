import React from "react";
import Hero from "./Hero";
import Page1Content from "./Page1Content";
import Page2Content from "./Page2Content";
import Page3Content from "./Page3Content";

const Books = () => {
  const turnLeft = (e) => {
    e.target.classList.toggle("turn");
    e.target.style.zIndex = `8 - ${e.target.style.zIndex}`;
    e.target.nextElementSibling.classList.toggle("turn");
  };
  const turnRight = (e) => {
    e.target.classList.toggle("turn");
    e.target.previousElementSibling.style.zIndex = `8 - ${e.target.previousElementSibling.style.zIndex}`;
    e.target.previousElementSibling.classList.toggle("turn");
  };
  return (
    <div className="book-box">
      <div className="book">
        <div className="coverLeft1 left" onClick={(e) => turnLeft(e)}>
          <Hero />
        </div>
        <div className="coverLeft2" onClick={(e) => turnRight(e)}></div>
        <div className="page1Left" onClick={(e) => turnLeft(e)}>
          <Page1Content />
        </div>
        <div className="page1Right" onClick={(e) => turnRight(e)}></div>
        <div className="page2Left" onClick={(e) => turnLeft(e)}>
          <Page2Content />
        </div>
        <div className="page2Right" onClick={(e) => turnRight(e)}></div>
        <div className="page3Left" onClick={(e) => turnLeft(e)}>
          <Page3Content />
        </div>
        <div className="page3Right" onClick={(e) => turnRight(e)}></div>
        <div className="coverRight1"></div>
        <div className="coverRight2">
          <div className="endSide"></div>
          <div className="endSide2"></div>
        </div>
      </div>
    </div>
  );
};
export default Books;
