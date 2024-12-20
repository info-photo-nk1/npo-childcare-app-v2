import React from 'react';
import { Cloud, Sun, CloudRain, CloudSnow, CloudLightning } from 'lucide-react';
import type { WeatherInfo } from './types';

interface WeatherIconProps {
  condition: WeatherInfo['condition'];
  className?: string;
}

const weatherIcons = {
  sunny: Sun,
  cloudy: Cloud,
  rainy: CloudRain,
  snowy: CloudSnow,
  stormy: CloudLightning,
};

const WeatherIcon: React.FC<WeatherIconProps> = ({ condition, className = '' }) => {
  const Icon = weatherIcons[condition];
  return <Icon className={className} />;
};

export default WeatherIcon;