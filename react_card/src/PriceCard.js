import React from "react";
export default function PriceCard(props)
{
    return <div>
        <h1 style={{color:props.color}}>Price - {props.currency} {props.price}</h1>
    </div>
}