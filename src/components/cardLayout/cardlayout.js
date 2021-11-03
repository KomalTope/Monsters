import React from "react";
import './cardlayout.scss';

const Card = props => {
    return (
        <div className="card-container" id={props.monster.id}>
            <img alt={props.monster.name} src={`https://robohash.org/${props.monster.id}?set=set2`} />
            <h2>{props.monster.name}</h2>
            <span>{props.monster.email}</span>
        </div>
    )
}

export default Card;