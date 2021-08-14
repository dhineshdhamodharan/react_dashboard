import React from 'react'
import react, { useState } from 'react'
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ProductContext from "./productcontext"

function Createproduct(props) {
    const [userName,setuserName]=useState("");
    const [position,setPosition]=useState("");
    const [office,setOffice]=useState("");
    const [age,setAge]=useState("");
    const [startdate,setStartdate]=useState("");
    const [salary,setSalary]=useState("");

    const productContext = useContext(ProductContext);
    const history=useHistory()

    let handleSubmit=(e)=>
    {
      e.preventDefault();
      console.log(userName,position,office,age,startdate,salary);

      setuserName("");
      setPosition("");
      setOffice("");
      setAge("");
      setStartdate("");
      setSalary("");

      let productData={userName,position,office,age,startdate,salary};
      productContext.setProductList([...productContext.productList,productData])
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
                            <label>Username</label>
                          <input type="text" value={userName} onChange={(e)=>{setuserName(e.target.value)}} className="form-control"/>
                          </div>
                          <div className="col-lg-6">
                            <label>Postion</label>
                          <input type="text" value={position} onChange={(e)=>{setPosition(e.target.value)}} className="form-control"/>
                          </div>
                          <div className="col-lg-6">
                            <label>Office</label>
                          <input type="text" value={office} onChange={(e)=>{setOffice(e.target.value)}} className="form-control"/>
                          </div>
                          <div className="col-lg-6">
                            <label>Age</label>
                          <input type="text" value={age} onChange={(e)=>{setAge(e.target.value)}} className="form-control"/>
                          </div>
                          <div className="col-lg-6">
                            <label>Startdate</label>
                          <input type="date" value={startdate} onChange={(e)=>{setStartdate(e.target.value)}} className="form-control"/>
                          </div>
                          <div className="col-lg-6">
                            <label>Salary</label>
                          <input type="text" value={salary} onChange={(e)=>{setSalary(e.target.value)}} className="form-control"/>
                          </div>
                          <div className="col-lg-12 mt-3">     
                          <input type="submit" value="Submit" className="btn btn-primary"/>
                          </div>
                      </div>
                  </form>
                  </div>      
        </div>
    )

}

export default Createproduct;


