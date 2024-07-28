import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  const red = ()=>{
    setColor("red")
  }

  const green = ()=>{
    setColor("green")
  }

 

  return (
    <>
      <div
        className="w-full h-screen duration-200 "
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center rounded-3xl gap-3 w-[80%] h-12 shadow-lg bg-slate-900 px-8 py-2 ">
            <button onClick={red} style={{background:{color} }} className="outline-none px-4 rounded-3xl bg-red-600">red</button>
            <button onClick={green} className="outline-none px-4 rounded-3xl bg-green-600">green</button>
            <button onClick={()=>setColor("blue")} className="outline-none px-4 rounded-3xl bg-blue-600">blue</button>
            <button onClick={()=>setColor("yellow")} className="outline-none px-4 rounded-3xl bg-yellow-400">Yellow</button>
            <button onClick={()=>setColor("pink")} className="outline-none px-4 rounded-3xl bg-pink-600">Pink</button>
            <button onClick={()=>setColor("orange")} className="outline-none px-4 rounded-3xl bg-orange-600">Orange</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
