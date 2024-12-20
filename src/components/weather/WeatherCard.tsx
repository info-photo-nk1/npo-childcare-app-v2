import React from 'react';
import { Droplets } from 'lucide-react';
import WeatherIcon from './WeatherIcon';
import TemperatureDisplay from './TemperatureDisplay';
import UVDisplay from './UVDisplay';
import HourlyForecast from './HourlyForecast';
import type { WeatherCardProps } from './types';

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* ヘッダー部分 */}
      <div className="bg-gradient-to-r from-sky-400 to-blue-500 p-4 text-white">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-medium">{weather.date}</h3>
          <WeatherIcon condition={weather.condition} className="h-8 w-8 text-white" />
        </div>
      </div>

      {/* メイン情報 */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          <TemperatureDisplay
            max={weather.temperature.max}
            min={weather.temperature.min}
          />
          
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2 text-gray-600">
              <Droplets className="h-4 w-4" />
              <span className="text-sm">湿度</span>
            </div>
            <span className="text-2xl font-bold text-gray-900 mt-1">
              {weather.humidity}%
            </span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <UVDisplay uvIndex={weather.uvIndex} />
        </div>

        <HourlyForecast forecast={weather.hourlyForecast} />
      </div>
    </div>
  );
};

export default WeatherCard;