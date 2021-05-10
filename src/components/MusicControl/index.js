import React from "react";
import playImg from "../../Images/play.png";

const MusicControl = ({ handleMusic }) => {
  return (
    <div className="pause-button">
      <a onClick={handleMusic}>
        <img src={playImg} alt="pause button" />
      </a>
    </div>
  );
};

export default MusicControl;
