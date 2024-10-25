import SearchBox from "./Search";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    
    const [WeatherInfo ,setWeatheInfo] = useState({
            city: "Delhi",
            feelslike: 24.85,
            temp: 25.05,
            tempMin: 25.05,
            tempMax: 45.3,
            humidity: 47,
            weather: "haze",
    });
    
    let updateInfo = (newInfo) => {
         setWeatheInfo(newInfo);
    };

    return(
        <>
            <div style={{display:"flex", flexDirection:"row", paddingLeft:"19rem"}}>
                <SearchBox updateInfo={updateInfo}></SearchBox>
                <InfoBox info={WeatherInfo}></InfoBox>
            </div>
        </>
    );
}