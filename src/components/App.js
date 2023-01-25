import React, { useState } from "react";
import "../styles/App.css";
import imgs from "../image.jpeg";
const App = () => {
  const [height, setHeight] = useState("320px");
  const [width, setWidth] = useState("320px");
  
  function heightFun(e) {
    setHeight(e.target.value);
  }
  function widthFun(e) {
    setWidth(e.target.value);
  }

  return (
    <div id="main">
      <img id="resizable-image" src={imgs} width={`${width}px`} height={`${height}px`} />
      {/* <h1> {imgs} </h1> */}

      <input
        id="height-slider"
        type="range"
        value={height}
        onChange={heightFun}
        min={100}
        max={800}
      />
      <input
        id="width-slider"
        type="range"
        value={width}
        onChange={widthFun}
        min={100}
        max={800}
      />
    </div>
  );
};

export default App;
