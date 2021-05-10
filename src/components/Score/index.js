import React from "react";

function Score(props) {
  return (
    <div className="Score">
      <h3 className={props.messageStyle}>{props.message}</h3>
      <h5>
        Score: <span className={props.scoreStyle}>{props.score}</span>  | Top Score: <span className={props.topScoreStyle}>{props.topScore}</span>
      </h5>
    </div>
  );
}

export default Score;
