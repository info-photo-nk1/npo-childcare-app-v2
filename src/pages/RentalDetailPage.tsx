import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Tag, Clock } from 'lucide-react';
import AdoptionForm from '../components/rental/AdoptionForm';
import type { RentalItem } from '../types/rental';

// モックデータ（本来はAPIから取得）
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

const listingTypeLabels = {
  rent: 'レンタル',
  sell: '売ります',
  give: '譲ります',
};

const listingTypeColors = {
  rent: 'bg-blue-100 text-blue-800',
  sell: 'bg-green-100 text-green-800',
  give: 'bg-purple-100 text-purple-800',
};

const RentalDetailPage = () => {
  const [showAdoptionForm, setShowAdoptionForm] = useState(false);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const item = mockItems.find((item) => item.id === id);

  if (!item) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div>商品が見つかりませんでした。</div>
      </div>
    );
  }

  const handleAdoptionRequest = () => {
    setShowAdoptionForm(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={() => navigate('/rental')}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="h-5 w-5" />
        一覧に戻る
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <span className={"absolute top-4 left-4 px-3 py-1.5 rounded-full text-sm font-medium " + listingTypeColors[item.listingType]}>
              {listingTypeLabels[item.listingType]}
            </span>
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{item.title}</h1>
          
          <div className="flex items-center gap-2 text-gray-500 mb-4">
            <MapPin className="h-5 w-5" />
            {item.location}
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="text-2xl font-bold text-gray-900">
              {item.listingType === 'give' ? '無料' : 
                item.listingType === 'rent' ? `¥${item.price}/日` :
                `¥${item.price}`
              }
            </div>
            <div className="flex items-center text-gray-500">
              <Clock className="h-5 w-5 mr-1" />
              {new Date(item.createdAt).toLocaleDateString()}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-gray-100 text-gray-600"
              >
                <Tag className="h-4 w-4 mr-1" />
                {tag}
              </span>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">商品の説明</h2>
            <p className="text-gray-600 whitespace-pre-wrap">{item.description}</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">出品者</h2>
            <div className="flex items-center gap-3">
              {item.userAvatar ? (
                <img
                  src={item.userAvatar}
                  alt={item.userName}
                  className="w-12 h-12 rounded-full"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">
                    {item.userName.charAt(0)}
                  </span>
                </div>
              )}
              <div>
                <div className="font-medium text-gray-900">{item.userName}</div>
              </div>
            </div>
          </div>

          {showAdoptionForm ? (
            <AdoptionForm onSubmit={(nickname, comment) => {
              console.log('ニックネーム:', nickname);
              console.log('コメント:', comment);
              alert('リクエストを送信しました (バックエンドはまだ実装されていません)');
            }} />
          ) : (
            <button
              className="w-full py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
              onClick={handleAdoptionRequest}
            >
              譲り受けを申し込む
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RentalDetailPage;
