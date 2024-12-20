import React from 'react';
import { Thermometer } from 'lucide-react';

interface TemperatureDisplayProps {
  max: number;
  min: number;
}

const TemperatureDisplay: React.FC<TemperatureDisplayProps> = ({ max, min }) => (
  <div className="flex flex-col">
    <p className="text-sm text-gray-600 mb-1 flex items-center gap-2">
      <Thermometer className="h-4 w-4" />
      気温
    </p>
    <div className="flex items-baseline gap-2">
      <span className="text-3xl font-bold text-gray-900">{max}°</span>
      <span className="text-xl text-gray-600">/{min}°</span>
    </div>
  </div>
);

export default TemperatureDisplay;