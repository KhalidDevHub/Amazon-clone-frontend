import React from 'react'
import { GridLoader } from "react-spinners";
const Loader = () => {
  return (
    <div 
    style={{display: "flex", alignItems: "center", justifyContent: "center", height: "50vh"}}>
      <GridLoader />
    </div>
  );
}

export default Loader