import React from 'react';
import { Sun } from 'lucide-react';

interface UVDisplayProps {
  uvIndex: number;
}

const UVDisplay: React.FC<UVDisplayProps> = ({ uvIndex }) => {
  const getUvLevel = (index: number) => {
    if (index >= 8) return { color: 'text-red-500', text: '危険' };
    if (index >= 5) return { color: 'text-orange-500', text: '注意' };
    return { color: 'text-green-500', text: '安全' };
  };

  const { color, text } = getUvLevel(uvIndex);

  return (
    <div className="flex items-center gap-3">
      <Sun className={`h-5 w-5 ${color}`} />
      <div>
        <div className="text-sm font-medium">UV指数: {uvIndex}</div>
        <div className={`text-xs ${color}`}>{text}</div>
      </div>
    </div>
  );
};

export default UVDisplay;