import React from "react";
import Links from "../data/user.js;

function About({ bio, links}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>props.bio</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

export default About;
