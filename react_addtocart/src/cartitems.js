import React from 'react';
function Cartitems(props)
{
    return(
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
      <div class="fw-bold">{props.data.model}</div>
      ₹{props.data.price}
    </div>
    <span onClick={()=>{props.handleRemove(props.data.id)}} style={{cursor:'pointer'}} class="badge bg-primary rounded-pill">X</span>
  </li>
    )
}
export default Cartitems;