import React from "react";
import './cardlist.scss';

import Card from "../cardLayout/cardlayout";
export const CardList = props => {
    return (
        <div className="card-list">
            {props.monsters.map(monster => (
                <Card monster={monster} key={monster.id}/>
            ))
            }
        </div>
    )
}