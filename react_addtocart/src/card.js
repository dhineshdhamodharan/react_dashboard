import React from "react";
function Card(props)
{
    return(
        <div className="col-lg-10 mt-4">
        <div class="card">
          <img src={props.data.img} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">{props.data.model}</h5>
             <p class="card-text">
               {props.data.description}
            </p> 
            <p class="price">₹{props.data.price}</p>
            <a href="#" class="btn btn-primary" onClick={()=>{props.handleCart(props.data.id)}}>
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    )
}
export default Card;