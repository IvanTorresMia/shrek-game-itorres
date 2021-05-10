import React from "react";

function Score(props) {
  return (
    <div className="Score">
      <h3 className="message">{props.message}</h3>
      <h5>
        Score: {props.score} | Top Score: {props.topScore}
      </h5>
    </div>
  );
}

export default Score;
