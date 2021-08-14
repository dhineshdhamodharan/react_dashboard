import axios from 'axios';
import React from 'react'
import { useState } from "react";
import { useHistory } from 'react-router-dom';

function Createproduct(props) {
  const history=useHistory()
    const [productName,setProductName]=useState("");
    const [price,setPrice]=useState("");
    const [manufactureDate,setManufactureDate]=useState("");
    const [expirDate,setExpirDate]=useState("");
    const [productType,setProductType]=useState("");

  const [isLoading,setLoading]=useState(false)
    

    let handleSubmit=async(e)=>{
      e.preventDefault();
      try {
        setLoading(true);
        await axios.post("https://60f1550c38ecdf0017b0fbac.mockapi.io/Product",{productName,price,manufactureDate,expirDate,productType}) 
        setLoading(false);
      } catch (error) {
        console.log("Error");
        setLoading(false);
        
      }
      history.push("/products")
    }

    return (
        <div>
             <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Create product</h1>
                    </div>
              <div className="container">
                  <form onSubmit={handleSubmit}>
                      <div className="row">
                          <div className="col-lg-6">
                            <label>Product Name</label>
                          <input type="text" value={productName} onChange={(e)=>{setProductName(e.target.value)}} className="form-control"/>
                          </div>
                          <div className="col-lg-6">
                            <label>Price</label>
                          <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} className="form-control"/>
                          </div>
                          <div className="col-lg-6">
                            <label>Manufature Date</label>
                          <input type="date" value={manufactureDate} onChange={(e)=>{setManufactureDate(e.target.value)}} className="form-control"/>
                          </div>
                          <div className="col-lg-6">
                            <label>Expiry Date</label>
                          <input type="date" value={expirDate} onChange={(e)=>{setExpirDate(e.target.value)}} className="form-control"/>
                          </div>
                          <div className="col-lg-6">
                            <label>Product Type</label>
                          <input type="text" value={productType} onChange={(e)=>{setProductType(e.target.value)}} className="form-control"/>
                          </div>
                          <div className="col-lg-12 mt-3">     
                          <input type="submit" value="Submit" className="btn btn-primary" disabled={isLoading}/>
                          </div>
                      </div>
                  </form>
                  </div>      
        </div>
    )

}

export default Createproduct;


