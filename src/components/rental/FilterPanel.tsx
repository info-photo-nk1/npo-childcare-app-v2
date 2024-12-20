import React from 'react';
import { Filter, Tag } from 'lucide-react';
import type { RentalFilters, ListingType, ItemCondition } from '../../types/rental';

interface FilterPanelProps {
  filters: RentalFilters;
  onFiltersChange: (filters: RentalFilters) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ filters, onFiltersChange }) => {
  const categories = [
    'ベビー服', 'ベビーカー', 'チャイルドシート', 'おもちゃ',
    'お食事グッズ', '寝具', '抱っこ紐', 'その他'
  ];

  const listingTypes: { value: ListingType; label: string }[] = [
    { value: 'rent', label: 'レンタル' },
    { value: 'sell', label: '売ります' },
    { value: 'give', label: '譲ります' },
  ];

  const conditions: { value: ItemCondition; label: string }[] = [
    { value: 'new', label: '新品' },
    { value: 'like_new', label: 'ほぼ新品' },
    { value: 'good', label: '良好' },
    { value: 'fair', label: '使用感あり' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="h-5 w-5 text-gray-500" />
        <h3 className="font-medium">絞り込み検索</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            カテゴリー
          </label>
          <select
            value={filters.category || ''}
            onChange={(e) => onFiltersChange({ ...filters, category: e.target.value })}
            className="w-full rounded-md border-gray-300"
          >
            <option value="">すべて</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            取引タイプ
          </label>
          <select
            value={filters.listingType || ''}
            onChange={(e) => onFiltersChange({ ...filters, listingType: e.target.value as ListingType })}
            className="w-full rounded-md border-gray-300"
          >
            <option value="">すべて</option>
            {listingTypes.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            商品の状態
          </label>
          <div className="space-y-2">
            {conditions.map(({ value, label }) => (
              <label key={value} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.condition?.includes(value) || false}
                  onChange={(e) => {
                    const newConditions = e.target.checked
                      ? [...(filters.condition || []), value]
                      : filters.condition?.filter(c => c !== value);
                    onFiltersChange({ ...filters, condition: newConditions });
                  }}
                  className="rounded border-gray-300 text-rose-500 focus:ring-rose-500"
                />
                <span className="ml-2 text-sm text-gray-600">{label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            価格帯
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              placeholder="最小"
              value={filters.minPrice || ''}
              onChange={(e) => onFiltersChange({ ...filters, minPrice: Number(e.target.value) || undefined })}
              className="w-full rounded-md border-gray-300"
            />
            <input
              type="number"
              placeholder="最大"
              value={filters.maxPrice || ''}
              onChange={(e) => onFiltersChange({ ...filters, maxPrice: Number(e.target.value) || undefined })}
              className="w-full rounded-md border-gray-300"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            地域
          </label>
          <input
            type="text"
            value={filters.location || ''}
            onChange={(e) => onFiltersChange({ ...filters, location: e.target.value })}
            placeholder="市区町村名"
            className="w-full rounded-md border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;