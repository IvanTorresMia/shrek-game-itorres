import React from "react";

function Card(props) {
  return (
    <div className="">
      <div className="img-container col">
        <img
          onClick={props.handleClick}
          id={props.id}
          src={props.imageURL}
          className="card-img-top images"
          alt={props.alt}
          data-id={props.id}
        ></img>
      </div>
    </div>
  );
}

export default Card;
