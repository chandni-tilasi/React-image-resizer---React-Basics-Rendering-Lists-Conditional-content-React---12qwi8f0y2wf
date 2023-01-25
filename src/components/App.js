import React, { useState } from 'react'
import '../styles/App.css';
import imgs from "../image"
const App = () => {
  const [height,setHeight] = useState("320");
  const [width,setWidth] = useState("320");
console.log(imgs)
  function heightFun(e){
    setHeight(e.target.value);
  }
  function widthFun(e){
    setWidth(e.target.value);
  }

  

  return (
    <div id="main">
      {/* <img src='' /> */}
    <input  id="height-slider" type="range" value={height} onChange={heightFun} min={100} max={800} />
    <input id="width-slider" type="range" value={width} onChange={widthFun}  min={100} max={800} />

    </div>
  )
}


export default App;
