import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
  const HOT_URL = "https://media.istockphoto.com/id/1200224188/photo/white-clouds-and-sun-in-blue-sky.jpg?s=2048x2048&w=is&k=20&c=OErc-KEmtmAqtE3-UfcXnI1SMSYpVsQD95H8hIRIq0A=";
  const COLD_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaTz_4Y5xVMovEycogoK3zTwuMSt3HqEX_Dg&s";
  const RAIN_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHlQaTtHfGB5z_j_uCh-m5U9isllTIoamKfw&s";
    return (
        <>
  <div className="weatherInfo">
    <h2 style={{paddingTop: "2rem", color: info.humidity > 80 ? "blue" : info.temp > 25 ? "orange" : "gray",}}>Weather Info - {info.weather}</h2>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "2rem", position:"relative" }}>            
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 25 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <h2
        style={{
        paddingRight: "12rem",
        color: info.humidity > 80 ? "blue" : info.temp > 25 ? "orange" : "gray",
      }}
>
  {info.city}

</h2>

          <h2 style={{display: "flex" , position: "absolute" , top:"18rem", left:"17rem"}}> 
          {info.humidity > 80 ? <ThunderstormIcon></ThunderstormIcon> : info.temp > 25 ? <WbSunnyIcon></WbSunnyIcon> : <AcUnitIcon></AcUnitIcon>}
          </h2>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <p><strong>Temprature = </strong> {info.temp}&deg;C</p>
        <p><strong>Humidity = </strong>{info.humidity}</p>
        <p><strong>Max. Temp = </strong>{info.tempMax}&deg;C</p>
        <p><strong>Min. Temp = </strong>{info.tempMin}&deg;C</p>
        </Typography>
        <p>The weather can be described as <i>{info.weather}</i> and feels like <i>{info.feelslike}&deg;C</i></p>
      </CardContent>
    </Card>
    </div>        
  </div>
        </>
    )
}