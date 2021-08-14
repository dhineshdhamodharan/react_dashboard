import React from "react"
function Card(props){
    return(
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div class="product-chooser-item">
              <img src={props.carobj.img} class="img-rounded col-xs-4 col-sm-4 col-md-12 col-lg-12" alt="Car"/>
              <div class="col-xs-8 col-sm-8 col-md-12 col-lg-12">
                <div>
                  <h5>{props.carobj.Model}</h5>
                  <p>₹.{props.carobj.price}</p>
                </div>
              </div>
            </div>
          </div> 
    )
}
export default Card;