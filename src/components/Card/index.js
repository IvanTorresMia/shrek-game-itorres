import React from 'react'
import './style.css'


function Card(props) {

    return (
        <div className = "Card">
            <div className = "img-container col">
            <img  onClick={props.handleClick} id={props.id} src={props.imageURL} className="card-img-top images" alt={props.alt} data-id={props.id}></img>
            </div>
        </div>
    )
}


export default Card