import logo from "./logo.svg";
import "./App.css";
import Card from "./card";
import {data} from "./data";
import Filter from "./filter"
import { useState } from "react";
import { useEffect } from "react";

function App() {

  const [filteredData,setFilteredData]=useState([]);
  const [pageCount,setPageCount]=useState(1);
  const [pageNumbers,setPageNumbers]=useState([])
  const [currentPage,setCurrentPage]=useState(1);
  
  let filter=(filterconfig)=>{
    let productObj=[];
    for (let index=0;index<6;index++)
    {
      let item=data[((filterconfig-1)*6)+index];
      console.log(item)
      if(item){
      productObj.push(item);
      }
    }
    //All the data(6 per page) will be displayed
    setFilteredData([...productObj]);

  }

//It will be loaded one time during start.
  useEffect(()=>{
    //Spilitting the data 6 per page
    let count = Math.ceil(data.length / 6)
    console.log(count)
    //Setting the total number of pages
    setPageCount(count)
    for (let index = 1; index <= count; index++) {
      //How many pages to be displayed at bottom
      pageNumbers.push(index)
    }
    //Defaultly load the first page. Which is Page 1
    filter(currentPage);
  },[])

  let onChangeFilter=(brand)=>{
    //Empty the set page number array. Because the filtered array will have different number of data.
    setPageNumbers([])
    let filterArray=[];
    for(let i=0;i<data.length;i++){
      //By matching the brand selected, push the items to filterArray
      if(data[i].Brand==brand){
        filterArray.push(data[i]);
      }
    }
    //we are displaying only the filtered data
    
    setFilteredData([...filterArray]);
//According to the filetered data count, setting the page number. For example if there 3 filtered data. then the total pages is 1.
    let count = Math.ceil(filterArray.length / 6)
    console.log(count)
    setPageCount(count)
    setPageNumbers([count])
    for (let index = 1; index <= count; index++) {
      pageNumbers.push(index)
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <label>Search</label>
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-lg-3">
          <Filter handleChange={onChangeFilter}></Filter>
          
        </div>

        <div className="col-lg-9">
          <div className="row">
            {
              filteredData.map((carobj)=>{
                return <Card carobj={carobj}/>
              }
            )
            }
          </div>
          <div className="row">{/* Pagination */}
            <div className="col-lg-12">
            <nav aria-label="Page navigation example">
            <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            {
              pageNumbers.map((number) => {
                return <li class="page-item"><button onClick={()=>filter(number)}class="page-link">{number}</button></li>
              })
            }
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
          </nav>
            </div>
          </div>

        </div>


      </div>
    </div>
  );
}

export default App;
