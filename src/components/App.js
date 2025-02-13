import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

const user = {
  name: "Liza",
  city: "New York",
  color: "firebrick",
  bio: "I made this!",
  links: {
    github: "https://github.com/liza",
    linkedin: "https://www.linkedin.com/in/liza/"
  }
};

function App(props) {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user}  links={user.links} />
      
    </div>
  );
}

export default App;
