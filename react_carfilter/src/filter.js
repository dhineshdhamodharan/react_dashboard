import React from "react"
function Filter(props)
{
    let brands=["ASTON MARTIN","Jaguar","Maserati","Rolls-Royce","Toyota","Mercedes-Benz","BMW"];
    let colors=["Gray","Red","Green","White","Yellow","Blue"];
    return(
        <div className="card">
            <article class="card-group-item">
              <header class="card-header">
                <h6 class="title">Brands </h6>
              </header>
              <div class="filter-content">
                <div class="card-body">
                  <form>
                    {
                        brands.map((brand)=>{
                            return <label class="form-check">
                             <input  class="form-check-input" onChange={()=>{props.handleChange(brand)}} type="checkbox" value=""/>
                             <span class="form-check-label">{brand}</span>
                    </label>
                        })
                    }
                  </form>
                </div>
              </div>
            </article>
            <article class="card-group-item">
              <header class="card-header">
                <h6 class="title">Choose type </h6>
              </header>
              <div class="filter-content">
                <div class="card-body">
                    {
                    colors.map((color)=>{
                    return <label class="form-check">
                    <input
                      class="form-check-input" type="radio" name="exampleRadio" value=""/>
                    <span class="form-check-label">{color}</span>
                  </label>    
                    })
                    }
                </div>
              </div>
            </article>
          </div>
    )
}
export default Filter;