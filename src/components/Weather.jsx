// components/Weather.js
"use client";

import { useEffect, useState } from 'react';
import { Card } from './Card';

export const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch('/api/weather');
        const data = await response.json();
        console.log('Weather data:', data);
        if (data.error) {
          setError(data.error.info);
          setLoading(false);
          return;
        }
        setWeather(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError('Error fetching weather data');
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const getWeatherAdvice = () => {
    if (!weather || !weather.current) return '';

    const { weather_descriptions, wind_speed, uv_index, humidity } = weather.current;
    const description = weather_descriptions[0].toLowerCase();

    let advice = '';

    if (description.includes('rain')) {
      advice += 'Remember to bring an umbrella. ';
    } else if (description.includes('snow')) {
      advice += 'It\'s snowing! Stay warm and drive safely. ';
    } else if (description.includes('sunny')) {
      advice += 'It\'s sunny outside! Don\'t forget your sunglasses. ';
    } else if (description.includes('cloudy')) {
      advice += 'It\'s partly cloudy. Enjoy your day! ';
    }

    if (wind_speed > 20) {
      advice += 'And it\'s quite windy there, so hold onto your hat! ';
    }

    if (uv_index > 5) {
      advice += 'And the UV index is high. Make sure to wear sunscreen. ';
    }

    if (humidity > 70) {
      advice += 'It\'s quite humid. Stay hydrated. ';
    }

    return advice || 'Have a great day!';
  };

  if (loading) {
    return <p>Loading weather data...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!weather || !weather.current) {
    return <p>Unable to fetch weather data</p>;
  }

  return (
    <Card className="p-6 bg-white rounded-lg shadow-md dark:bg-zinc-800 items-center">
    <Card.Description>
      <div className="flex justify-center items-center mb-4">
        <img
          src={weather.current.weather_icons[0]}
          alt={weather.current.weather_descriptions[0]}
          className="w-16 h-16 mr-4"
        />
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold">{weather.current.temperature}°C</p>
          <p className="text-lg">{weather.current.weather_descriptions[0]}</p>
        </div>
      </div>
      <div className="text-center">
        <p className="text-lg">Location: {weather.location.name}</p>
        <p className="text-lg">Humidity: {weather.current.humidity}%</p>
        <p className="text-lg">Wind: {weather.current.wind_speed} km/h</p>
        <p className="text-lg">Feels like: {weather.current.feelslike}°C</p>
        <p className="text-lg">UV Index: {weather.current.uv_index}</p>
        <p className="text-lg">Visibility: {weather.current.visibility} km</p>
        <p className="text-lg">Pressure: {weather.current.pressure} mb</p>
      </div>
      <div className="text-center mt-4">
        <p className="text-lg">Advice: {getWeatherAdvice()}</p>
      </div>
    </Card.Description>
  </Card>
  );
};
