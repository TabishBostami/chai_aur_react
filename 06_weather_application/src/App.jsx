import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [temp, setTemp] = useState("");
  const [city, setCity] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [cname, setCname] = useState("")

  const search = () => {
    setCity(inputValue);
  };

  useEffect(() => {
   if (city) {
    const api_key='0cf1f74adc5c6ab6baf4167d0a31bc1a';
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
      )
      .then(function (response) {
        // handle success
        const data = response.data;
        setCname(data.name);
        setTemp((data.main.temp - 273.15).toFixed(1));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });}
  }, [city]);

  return (
    <>
      <div className="weather-main">
        <h1>Weather Today</h1>
        <div className="input">
          <label htmlFor="city"></label>
          <input 
          id="city" 
          type="text"
          onChange={(e)=>setInputValue(e.target.value)}
          />
          <button onClick={search} id="c">
            {" "}
            Search{" "}
          </button>
        </div>

        <p>{city ? `${city}` : "Delhi"}</p>
        <p>{temp ? `${temp}°C`: "0°C"}</p>
      </div>
    </>
  );
}

export default App;
