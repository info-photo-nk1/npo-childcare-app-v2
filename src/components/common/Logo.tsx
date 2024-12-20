import React from 'react';
import { Heart } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => (
  <div className={`flex items-center ${className}`}>
    <Heart className="h-8 w-8 text-rose-500" />
    <span className="ml-2 text-xl font-semibold text-gray-900">みんなで子育て</span>
  </div>
);

export default Logo;