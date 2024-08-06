import './WeatherForecast.css'
const WeatherForecasts = ({cast :{Day, imgAlt , img, time,conditions }}) => {

    return (
    <>
        <div className="weather">
          <h2>{Day}</h2>
          <img src={ img } alt={ imgAlt } />

          <p><span> Condition: </span> {conditions}</p>
          <p><span>Time: </span>{ time }</p>
        </div>
      
    </>
    );
  }
  export default WeatherForecasts