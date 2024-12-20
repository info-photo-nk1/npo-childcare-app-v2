import React, { useState } from 'react';
import { Search } from 'lucide-react';
import FacilityMap from '../components/match/FacilityMap';
import SearchFilters from '../components/match/SearchFilters';
import FacilityList from '../components/match/FacilityList';
import { mockFacilities } from '../data/mockFacilities';
import useFacilitySearch from '../hooks/useFacilitySearch';
import type { Facility, SearchFilters as Filters } from '../types/facility';

const MatchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<Filters>({});
  const [selectedFacility, setSelectedFacility] = useState<Facility>();

  const { facilities: filteredFacilities, loading } = useFacilitySearch(
    mockFacilities,
    searchQuery,
    filters
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          保育施設を探す
        </h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="施設名や地域名で検索"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <SearchFilters
            filters={filters}
            onFiltersChange={setFilters}
          />
          <div className={loading ? 'opacity-50' : ''}>
            <FacilityList
              facilities={filteredFacilities}
              selectedFacility={selectedFacility}
              onFacilitySelect={setSelectedFacility}
            />
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <FacilityMap
            facilities={filteredFacilities}
            selectedFacility={selectedFacility}
            onFacilitySelect={setSelectedFacility}
          />
        </div>
      </div>
    </div>
  );
};

export default MatchPage;