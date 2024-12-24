import React, { useState } from 'react';
import { Search, ListFilter, Map } from 'lucide-react';
import FacilityMap from '../components/match/FacilityMap';
import SearchFilters from '../components/match/SearchFilters';
import FacilityList from '../components/match/FacilityList';
import { mockFacilities } from '../data/mockFacilities';
import useFacilitySearch from '../hooks/useFacilitySearch';
import type { Facility, SearchFilters as Filters } from '../types/facility';

const MatchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<Filters>({});
  const [selectedFacility, setSelectedFacility] = useState<Facility | undefined>(undefined);
  const [showMap, setShowMap] = useState(false);

  const { facilities: filteredFacilities, loading } = useFacilitySearch(
    mockFacilities,
    searchQuery,
    filters
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1920px] mx-auto">
        <div className="p-4 sm:p-6 lg:p-8 bg-white border-b">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            保育施設を探す
          </h1>
          <div className="relative max-w-2xl">
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

        <div className="flex flex-col lg:flex-row h-[calc(100vh-180px)]">
          <div className="w-full lg:w-80 flex-shrink-0 p-4 sm:p-6 lg:p-8 overflow-y-auto">
            <SearchFilters
              filters={filters}
              onFiltersChange={setFilters}
            />
          </div>

          <div className="flex-1 flex flex-col overflow-hidden">
            {/* モバイル用のタブ切り替え */}
            <div className="xl:hidden flex border-b border-gray-200">
              <button
                className={`flex-1 py-2 px-4 text-sm font-medium flex items-center justify-center gap-2 ${
                  !showMap ? 'text-rose-600 border-b-2 border-rose-600' : 'text-gray-500'
                }`}
                onClick={() => setShowMap(false)}
              >
                <ListFilter className="h-4 w-4" />
                施設一覧
              </button>
              <button
                className={`flex-1 py-2 px-4 text-sm font-medium flex items-center justify-center gap-2 ${
                  showMap ? 'text-rose-600 border-b-2 border-rose-600' : 'text-gray-500'
                }`}
                onClick={() => setShowMap(true)}
              >
                <Map className="h-4 w-4" />
                マップ
              </button>
            </div>

            {/* デスクトップ表示時は横並び、モバイル表示時はタブで切り替え */}
            <div className="flex-1 flex xl:flex-row overflow-auto">
              <div className={`w-full xl:w-1/2 p-4 sm:p-6 lg:p-8 ${
                showMap ? 'hidden xl:block' : ''
              }`}>
                <div className={loading ? 'opacity-50' : ''}>
                  <FacilityList
                    facilities={filteredFacilities}
                    selectedFacility={selectedFacility}
                    onFacilitySelect={setSelectedFacility}
                  />
                </div>
              </div>
              
              <div className={`w-full xl:w-1/2 p-4 sm:p-6 lg:p-8 ${
                !showMap ? 'hidden xl:block' : ''
              }`}>
                <div className="h-full rounded-lg overflow-hidden">
                  <FacilityMap
                    facilities={filteredFacilities}
                    selectedFacility={selectedFacility}
                    onFacilitySelect={setSelectedFacility}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchPage;
