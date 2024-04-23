import React, { useState } from 'react'

function WeatherAppHome() {

    const [temprature,settemprature] = useState(0)
    const [inputText,setInputText] = useState("")
     
    const handleInputChange=(e)=>{
        setInputText(e.target.value)
    }

    let api_key = "2fdf5f6c11aef545320a7c6bf4eb95f5";
    
    const search = async () => {
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${inputText}&units=Metric&appid=${api_key}`
        let response = await fetch(url);
        let data = await response.json();
       settemprature(data.main.temp);
    }

  return (
    <>
     <input 
       value={inputText}
       onChange={handleInputChange}    
     />
     <button onClick={search}>go</button>
     <div>{temprature}</div>
    </>
  )
}

export default WeatherAppHome