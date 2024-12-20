import React from 'react';
import { Filter } from 'lucide-react';
import type { SearchFilters } from '../../types/facility';

interface SearchFiltersProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ filters, onFiltersChange }) => {
  const facilityTypes = [
    { value: 'nursery', label: '保育所' },
    { value: 'kindergarten', label: '幼稚園' },
    { value: 'support_center', label: '子育て支援センター' },
    { value: 'community_center', label: '親子交流施設' },
    { value: 'temporary_care', label: '一時預かり施設' },
    { value: 'family_support', label: 'ファミリーサポート' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="h-5 w-5 text-gray-500" />
        <h3 className="font-medium">検索条件</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            施設タイプ
          </label>
          <select
            value={filters.type || ''}
            onChange={(e) => onFiltersChange({ ...filters, type: e.target.value as any })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
          >
            <option value="">すべて</option>
            {facilityTypes.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filters.hasAvailableSpots}
              onChange={(e) =>
                onFiltersChange({ ...filters, hasAvailableSpots: e.target.checked })
              }
              className="rounded border-gray-300 text-rose-500 focus:ring-rose-500"
            />
            <span className="ml-2 text-sm text-gray-700">空きあり</span>
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            最低評価
          </label>
          <select
            value={filters.minRating || ''}
            onChange={(e) =>
              onFiltersChange({ ...filters, minRating: Number(e.target.value) || undefined })
            }
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
          >
            <option value="">指定なし</option>
            {[4, 3, 2].map((rating) => (
              <option key={rating} value={rating}>
                {rating}★以上
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;