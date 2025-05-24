import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ data }) => {
  return (
    <div className="weather-card">
      <h2>{data.name}, {data.sys.country}</h2>
      <h3>{data.weather[0].main}</h3>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
