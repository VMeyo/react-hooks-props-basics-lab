import React from "react";
//import { name, city } from "../data/user.js";


function Home(props) {
  return (
    <div id ="home">
      <h1>
        {props.name} is a Web Developer from {props.city}
      </h1>
    </div>
  );
}

export default Home;
