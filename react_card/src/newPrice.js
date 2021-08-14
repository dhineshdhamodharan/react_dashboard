import React from "react";
export default function Newprice(props)
{
    return <div className="col-lg-4">
    <div class="card">
      <img src="https://placehold.it/200x150" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.productData.title}</h5>
        <p class="card-text">{props.productData.description}</p>
        <button class="btn btn-primary" disabled={!props.productData.instock}>
          Go somewhere
        </button>
        <span style={{textDecoration:!props.productData.instock ? 'line-through' : ''}}>Price:{props.productData.price}</span>
      </div>
    </div>
  </div>
}