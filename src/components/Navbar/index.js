import React from "react";

function NavBar(props) {
  return (
    <nav className="navbar">
      <h1>Shrek Clicky</h1>
      <h3 className="message">{props.message}</h3>
      <h3>
        Score: {props.score} | Top Score: {props.topScore}
      </h3>
    </nav>
  );
}

export default NavBar;
