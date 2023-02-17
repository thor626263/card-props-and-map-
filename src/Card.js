import React from "react";
import './Card.css';


function Card(props){
    // const city = props.city;
    // const name = props.name;
    
    return ( <div class="bdr">
        <div class="ins">
    <img class="hover_effect" src={props.image} alt="abc"/>
    <h3 class="name">Name : {props.name}</h3>
    <h3 class="city">City : {props.city}</h3>
    </div>
    </div>);
    
}

export default Card;