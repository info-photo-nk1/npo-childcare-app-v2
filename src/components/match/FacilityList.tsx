import React from 'react';
import type { Facility } from '../../types/facility';
import FacilityCard from './FacilityCard';

interface FacilityListProps {
  facilities: Facility[];
  selectedFacility?: Facility;
  onFacilitySelect: (facility: Facility) => void;
}

const FacilityList: React.FC<FacilityListProps> = ({
  facilities,
  selectedFacility,
  onFacilitySelect,
}) => {
  return (
    <div className="space-y-4">
      {facilities.map((facility) => (
        <FacilityCard
          key={facility.id}
          facility={facility}
          isSelected={selectedFacility?.id === facility.id}
          onClick={() => onFacilitySelect(facility)}
        />
      ))}
    </div>
  );
};

export default FacilityList;