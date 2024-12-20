import React from 'react';
import { MapPin, Star, Users } from 'lucide-react';
import type { Facility } from '../../types/facility';

interface FacilityCardProps {
  facility: Facility;
  isSelected: boolean;
  onClick: () => void;
}

const FacilityCard: React.FC<FacilityCardProps> = ({
  facility,
  isSelected,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`w-full text-left p-4 rounded-lg transition-shadow duration-200 ${
      isSelected
        ? 'bg-rose-50 ring-2 ring-rose-500'
        : 'bg-white hover:shadow-md'
    }`}
  >
    {facility.images[0] && (
      <img
        src={facility.images[0]}
        alt={facility.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
    )}
    
    <h3 className="text-lg font-medium text-gray-900">{facility.name}</h3>
    
    <div className="mt-2 flex items-center text-sm text-gray-500">
      <MapPin className="h-4 w-4 mr-1" />
      {facility.address}
    </div>
    
    <div className="mt-2 flex items-center gap-4">
      <div className="flex items-center text-sm">
        <Star className="h-4 w-4 text-yellow-400 mr-1" />
        <span>{facility.rating}</span>
      </div>
      
      <div className="flex items-center text-sm">
        <Users className="h-4 w-4 text-gray-400 mr-1" />
        <span>
          空き {facility.availableSpots}/{facility.capacity}
        </span>
      </div>
    </div>

    {facility.features.length > 0 && (
      <div className="mt-3 flex flex-wrap gap-2">
        {facility.features.map((feature) => (
          <span
            key={feature}
            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
          >
            {feature}
          </span>
        ))}
      </div>
    )}
  </button>
);

export default FacilityCard;