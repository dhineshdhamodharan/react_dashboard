import logo from './logo.svg';
import './App.css';
import {useState} from "react";
function App() {
  const[countA,setCountA]=useState(0);
  const[countB,setCountB]=useState(0);
  const[countC,setCountC]=useState(0);
  let increaseA=()=>{
    setCountA(countA+1);
  }
  let increaseB=()=>{
    setCountB(countB+1);
  }
  let increaseC=()=>{
    setCountC(countC+1);
  }

  let reset=()=>{
    setCountA(0);
    setCountB(0);
    setCountC(0);
  }
  return (
    <div>
      <div class="resetbutton">
        <button class="buttontext"onClick={()=>{reset()}}>RESET</button></div>
      <div class="button">
      <button class="button1" onClick={()=>{increaseA()}}/>
      <button class="button2" onClick={()=>{increaseB()}}/>
      <button class="button3" onClick={()=>{increaseC()}}/>
      </div>
      <div class="count">
      <h3>{countA}</h3>
      <h3>{countB}</h3>
      <h3>{countC}</h3>
      </div>
    </div>
  );
}
export default App;
