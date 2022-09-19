import "./CurrentWeather.css";

const CurrentWeather = (props) => {
  const { data } = props;

  return (
    <div className="weather">
      {/* top */}
      <div className="top-details">
        <div>
          <p className="city">{data.city}</p>
          <p className="w-description">{data.weather[0].description}</p>
        </div>
        <img
          src={`icons/${data.weather[0].icon}.png`}
          alt="weather"
          className="w-icon"
        />
      </div>

      {/* bottom */}
      <div className="bottom-details">
        <p className="temperature">{Math.trunc(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label top">Details</span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value">
              {Math.trunc(data.main.feels_like)}°C
            </span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
