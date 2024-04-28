import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';


export default function SearchBox({updateInfo}){

    let [city,setcity] = useState("");
    let [error,setError] = useState(false);
   
    const APP_URL = "https://api.openweathermap.org/data/2.5/weather";
    const APP_KEY = "869c3f013c150818e8de43cfa1a7a3f2";
 
    let weatherInfo = async () => {
        try{
       let response =  await fetch(`${APP_URL}?q=${city}&appid=${APP_KEY}&units=metric`);
       let jsonResponse = await response.json();
       console.log(jsonResponse);

       let result = {
        city:city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
       };

       console.log(result);
       return result;
    }
    catch(error){
        setError(true);
    }
}

    let handleChange = (evt) => {
        setcity(evt.target.value);
    }

    
    let handleSubmit = async (evt) => {
        try{
        evt.preventDefault();
        console.log(city);
        setcity("");
        let Newinformation = await weatherInfo();
        updateInfo(Newinformation);
    } catch(error){
        setError(true);
    }
} 

    return(
        <>
            <div className='SearchBox'>
                <h3>Search City For Weather</h3>
                <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Enter City" variant="outlined" onChange={handleChange} required/>
                <br></br><br></br>
                <Button variant="contained" onClick={handleSubmit}>Search</Button>
                {error && <p>No Such Place Found In API..</p>}
                </form>
                
            </div>
        </>
    )
}