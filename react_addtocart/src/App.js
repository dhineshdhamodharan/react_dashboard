import logo from "./logo.svg";
import "./App.css";
import Header from "./header";
import Card from "./card";
import Cartitems from "./cartitems";
import { useState } from "react";

function App() {
  const [products,setProduct]=useState(
    [
      {
        id:1,
        img:"https://m.media-amazon.com/images/I/71by1KxLskL._AC_UL320_.jpg",
        brandName:"Fastrack",
        model:"Analog Men's Watch",
        description:"This watch goes well with both formal wear and casual wear. It is perfect pick for gift.",
        price:1595
      },
      {
        id:2,
        img:"https://m.media-amazon.com/images/I/71vyF99AZ3L._AC_UL320_.jpg",
        brandName:"Fastrack",
        model:"Denim Analog Gray Dial Men's Watch NM3189KL01/NN3189KL01",
        description:"This watch goes well with both formal wear and casual wear. It is perfect pick for gift.",
        price:2555
      },
      {
        id:3,
        img:"https://m.media-amazon.com/images/I/714SXyEy-DL._AC_UL320_.jpg",
        brandName:"Fastrack",
        model:"Economy Analog Black Dial Men's Watch NM3039SM02/NN3039SM02",
        description:"This watch goes well with both formal wear and casual wear. It is perfect pick for gift.",
        price:1755
      },
      {
        id:4,
        img:"https://m.media-amazon.com/images/I/71CEEzbDS-L._AC_UL320_.jpg",
        brandName:"Fastrack",
        model:"Black Magic Analog Black Dial Men's Watch NM3089SL05/NN3089SL05",
        description:"This watch goes well with both formal wear and casual wear. It is perfect pick for gift.",
        price:2076
      },
      {
        id:5,
        img:"https://m.media-amazon.com/images/I/71vTAzt-dgL._AC_UL320_.jpg",
        brandName:"Fastrack",
        model:"Analog Black Dial Men's Watch NM3147KM01/NN3147KM01",
        description:"This watch goes well with both formal wear and casual wear. It is perfect pick for gift.",
        price:3195
      },
      {
        id:6,
        img:"https://m.media-amazon.com/images/I/81rMyb8NcwL._AC_UL320_.jpg",
        brandName:"Fastrack",
        model:"Casual Analog Blue Dial Men's Watch NM3124SL02/NN3124SL02",
        description:"This watch goes well with both formal wear and casual wear. It is perfect pick for gift.",
        price:1356
      },
      {
        id:7,
        img:"https://m.media-amazon.com/images/I/81rMyb8NcwL._AC_UL320_.jpg",
        brandName:"Fastrack",
        model:"Casual Analog Blue Dial Men's Watch NM3124SL02/NN3124SL02",
        description:"This watch goes well with both formal wear and casual wear. It is perfect pick for gift.",
        price:1356
      },
      {
        id:8,
        img:"https://m.media-amazon.com/images/I/71e9DMbiyuS._AC_UL320_.jpg",
        brandName:"Fastrack",
        model:"Analog Silver Dial Men's Watch NM9332PP06A/NN9332PP06",
        description:"This watch goes well with both formal wear and casual wear. It is perfect pick for gift.",
        price:1480
      },
      {
        id:9,
        img:"https://m.media-amazon.com/images/I/71rmzTl4-cL._AC_UL320_.jpg",
        brandName:"Fastrack",
        model:"Casual Analog Silver Dial Men's Watch NM3120SM01/NN3120SM01",
        description:"This watch goes well with both formal wear and casual wear. It is perfect pick for gift.",
        price:1400
      },
      {
        id:10,
        img:"https://m.media-amazon.com/images/I/71EXddMCeSL._AC_UL320_.jpg",
        brandName:"Fastrack",
        model:"Essentials Analog Grey Dial Men's Watch NM3015AL02/NN3015AL02",
        description:"This watch goes well with both formal wear and casual wear. It is perfect pick for gift.",
        price:1400
      },
    ]
  )
    const [cartItems,setCartItem] = useState([]);
    const [total,setTotal]=useState(0);
    let addtoCart=(id)=>{
      let product=products.find(obj=>obj.id==id);
      if(cartItems.includes(product))
      {
        alert("Item alreay added to cart")
      }
      else
      {
        setCartItem([...cartItems,product]);
        setTotal(total+product.price)
      }
    }

    let removeItem=(id)=>{
      let result=window.confirm("Are you sure to remove from the Cart?");
      if(result)
      {
        let cartIndex=cartItems.findIndex(obj=>obj.id==id)
        setTotal(total-cartItems[cartIndex].price)
        cartItems.splice(cartIndex,1)
        setCartItem([...cartItems])
      }
    }

  return (
    <>
      <Header></Header>
      <div className="container" style={{ marginTop: "70px" }}>
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              {
              products.map((product) =>{
                return <Card data={product} handleCart={addtoCart}/>
              })
            }
            </div>
          </div>
          <div className="col-lg-4" style={{ marginTop: "23px" }}>
          <h4 style={{color:"#39A9D0"}}><u>Cart Items</u></h4>
          <ol class="list-group list-group-numbered">
            {
              cartItems.length == 0 ? <h3>No items in cart</h3> : null
            }
             {
               cartItems.map((item)=>{
                 return <Cartitems handleRemove={removeItem} data={item}></Cartitems>
               }
               )
             }
             <h1>Total-₹ {total}</h1>
             </ol>
             </div>
        </div>
      </div>
    </>
  );
}

export default App;
