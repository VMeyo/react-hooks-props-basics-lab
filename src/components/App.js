import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";
import user from "../data/user.js";
//import { name, city } from "../data/user.js";

// pass this data down as props to the child component(s) that need it!



function App() {
  return (
    <div>
      <NavBar />
      <Home name= {user.name} city= {user.city} />
      <About bio= {user.bio}  links={{ github : "https://github.com/liza", linkedin : "https://www.linkedin.com/in/liza/" }} />
      
    </div>
  );
}

export default App;
