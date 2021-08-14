import logo from "./logo.svg";
import PriceCard from "./PriceCard";
import "./App.css";
import Newprice from "./newPrice";

function App() {
  let data=[{
    title:"Product 1",
    description:"Lorem ipsm dolor sit amet",
    price:34,
    instock:true
  },
    {
      title:"Product 2",
      description:"Lorem ipsm dolor sit amet",
      price:50,
      instock:false
    },
      {
        title:"Product 3",
        description:"Lorem ipsm dolor sit amet",
        price:100,
        instock:true
      },
      {
        title:"Product 4",
        description:"Lorem ipsm dolor sit amet",
        price:100,
        instock:false
      },
      {
        title:"Product 5",
        description:"Lorem ipsm dolor sit amet",
        price:100,
        instock:true
      }
  ]
  return (
    <div className="container">
      <div className="row">
        {
        data.map((obj)=> {
        return <Newprice productData={obj}></Newprice>
        })
      }
      </div>
    </div>
  );
}

export default App;
