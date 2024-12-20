import { useState, useEffect, useMemo } from 'react';
import type { Facility, SearchFilters } from '../types/facility';

export const useFacilitySearch = (
  facilities: Facility[],
  searchQuery: string,
  filters: SearchFilters
) => {
  const [loading, setLoading] = useState(false);

  const filteredFacilities = useMemo(() => {
    let result = facilities;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (facility) =>
          facility.name.toLowerCase().includes(query) ||
          facility.address.toLowerCase().includes(query)
      );
    }

    // Filter by facility type
    if (filters.type) {
      result = result.filter((facility) => facility.type === filters.type);
    }

    // Filter by available spots
    if (filters.hasAvailableSpots) {
      result = result.filter((facility) => facility.availableSpots > 0);
    }

    // Filter by minimum rating
    if (filters.minRating) {
      result = result.filter((facility) => facility.rating >= filters.minRating);
    }

    return result;
  }, [facilities, searchQuery, filters]);

  // Simulate loading state for better UX
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [searchQuery, filters]);

  return {
    facilities: filteredFacilities,
    loading,
  };
};

export default useFacilitySearch;