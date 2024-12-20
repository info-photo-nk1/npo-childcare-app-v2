import React from 'react';
import WeatherIcon from './WeatherIcon';
import type { WeatherInfo } from './types';

interface HourlyForecastProps {
  forecast: WeatherInfo['hourlyForecast'];
}

const HourlyForecast: React.FC<HourlyForecastProps> = ({ forecast }) => (
  <div className="mt-4 pt-4 border-t border-gray-100">
    <h4 className="text-sm font-medium text-gray-700 mb-3">時間帯別の天気</h4>
    <div className="flex justify-between">
      {forecast.map(({ hour, temp, condition }) => (
        <div key={hour} className="flex flex-col items-center">
          <span className="text-xs text-gray-500">{hour}</span>
          <WeatherIcon condition={condition} className="h-5 w-5 my-1 text-gray-600" />
          <span className="text-sm font-medium">{temp}°</span>
        </div>
      ))}
    </div>
  </div>
);

export default HourlyForecast;