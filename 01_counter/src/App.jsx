import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter,setcounter] = useState(0) 


  const addValue = () => {
    if(counter>=0 && counter <20) {
      setcounter(counter+1)
    }
  };

  const remValue = () => {
    if(counter>0 && counter <21){
      setcounter(counter-1)
    }
     
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={remValue}>Remove Value</button>
    </>
  );
}

export default App;
