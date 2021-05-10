import React from "react";

import rez from "../img/rez.jpg"

const Home = () => {
  return (
    <div
    style={{
      backgroundImage:`url(${rez})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      height:"100vh",
      width:"100%",
      
      display:"grid",
       marginTop:"10px"
    }}
    >

      <h1
      style={{
        color:"white",
        fontWeight: 1000,
        fontSize:"3em",
        textShadow:"2px 2px 3px teal",
         WebkitTextStroke:"3px",
         WebkitTextStrokeColor:"#107a8b"


        
      
      }}
      >NERD-RESULTS</h1>
      
     
      
    </div>
  );
};

export default Home;
