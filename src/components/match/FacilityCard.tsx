import React from 'react';
import { Link } from 'react-router-dom';
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
  <Link to={`/match/facilities/${facility.id}`}>
    <button
      className={`w-full text-left rounded-lg transition-all duration-200 border ${
        isSelected
          ? 'bg-rose-50 border-rose-500 shadow-md'
          : 'bg-white border-gray-200 hover:border-rose-300 hover:shadow-md'
      }`}
    >
      <div className="relative">
        {facility.images[0] && (
          <img
            src={facility.images[0]}
            alt={facility.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        )}
      <div className="absolute top-2 right-2 flex gap-2">
        <div className="flex items-center px-2 py-1 rounded-full text-sm font-medium bg-white/90 text-gray-900 shadow-sm">
          <Star className="h-4 w-4 text-yellow-400 mr-1" />
          <span>{facility.rating}</span>
        </div>
        <div className="flex items-center px-2 py-1 rounded-full text-sm font-medium bg-white/90 text-gray-900 shadow-sm">
          <Users className="h-4 w-4 text-gray-600 mr-1" />
          <span>{facility.availableSpots}/{facility.capacity}</span>
        </div>
      </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-2">{facility.name}</h3>
        
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
          <span className="line-clamp-1">{facility.address}</span>
        </div>

        {facility.features.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
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
      </div>
    </button>
  </Link>
);

export default FacilityCard;
