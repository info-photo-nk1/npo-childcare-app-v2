import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ItemCard from '../components/rental/ItemCard';
import FilterPanel from '../components/rental/FilterPanel';
import type { RentalItem, RentalFilters } from '../types/rental';

// モックデータ
const mockItems: RentalItem[] = [
  {
    id: '1',
    title: 'ベビーカー A型（0-36ヶ月）',
    description: '使用期間3ヶ月の美品です。',
    category: 'ベビーカー',
    condition: 'like_new',
    listingType: 'rent',
    price: 1000,
    period: '1日〜',
    images: ['https://images.unsplash.com/photo-1591106567565-e1f9a0bc2b7e?auto=format&fit=crop&w=800&q=80'],
    location: '東京都渋谷区',
    userId: '1',
    userName: '田中さくら',
    createdAt: '2024-03-15T00:00:00Z',
    tags: ['A型', '軽量', '折りたたみ可能'],
  },
  {
    id: '2',
    title: 'ベビー服セット（60-70cm）',
    description: '新生児用の服セットです。',
    category: 'ベビー服',
    condition: 'good',
    listingType: 'give',
    price: 0,
    images: ['https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=800&q=80'],
    location: '東京都世田谷区',
    userId: '2',
    userName: '佐藤美咲',
    userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80',
    createdAt: '2024-03-14T00:00:00Z',
    tags: ['新生児', '未使用含む'],
  },
];

const RentalPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<RentalFilters>({});
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            みんなでシェア
          </h1>
          <p className="text-gray-600">
            必要なものを必要な時に。大切なベビー用品を次の家族へ。
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600">
          <Plus className="h-5 w-5" />
          出品する
        </button>
      </div>

      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="キーワードで検索"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <FilterPanel
            filters={filters}
            onFiltersChange={setFilters}
          />
        </div>
        
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockItems.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                onClick={() => navigate(`/rental/${item.id}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalPage;
