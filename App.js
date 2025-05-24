import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = 'aa62c266cf6690d57dea5d1cc7f91574';

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
      setError('');
    } catch (err) {
      setError('City not found');
      setWeather(null);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      getWeather();
    }
  };

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={getWeather}>Search</button>
      </div>
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
};

export default App;

