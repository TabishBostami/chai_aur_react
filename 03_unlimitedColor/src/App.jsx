import React, { useState, useEffect } from "react";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        const hex = "123456789ABCDEF";
        let color = "#";

        for (let i = 0; i < 6; i++) {
          color = color + hex[Math.floor(Math.random() * 15)];
        }

        setBackgroundColor(color);
        
      }, 1000);
    } else if (!isActive && backgroundColor !== "white") {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, backgroundColor]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setBackgroundColor("white");
    
};
document.body.style.backgroundColor = backgroundColor;

  

  return (
    <div>
      <button onClick={handleStart}>start changing</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
