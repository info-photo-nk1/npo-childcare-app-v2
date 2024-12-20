import React from 'react';
import type { Facility } from '../../types/facility';

interface FacilityMapProps {
  facilities: Facility[];
  selectedFacility?: Facility;
  onFacilitySelect: (facility: Facility) => void;
}

const FacilityMap: React.FC<FacilityMapProps> = ({
  facilities,
  selectedFacility,
  onFacilitySelect,
}) => {
  // Note: In a real implementation, this would integrate with a mapping library
  return (
    <div className="relative w-full h-[600px] bg-gray-100 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-gray-500">地図は開発中です</p>
      </div>
    </div>
  );
};

export default FacilityMap;