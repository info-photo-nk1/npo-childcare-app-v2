import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Star, Users, Clock, Phone, Mail, Globe } from 'lucide-react';
import { mockFacilities } from '../data/mockFacilities';

const FacilityDetailPage: React.FC = () => {
  const { id } = useParams();
  const facility = mockFacilities.find(f => f.id === id);

  if (!facility) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-gray-600">
          施設が見つかりませんでした
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* ヘッダー部分 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{facility.name}</h1>
        <div className="flex items-center gap-4 text-gray-600">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 mr-1" />
            <span>{facility.rating}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-1" />
            <span>{facility.address}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-5 w-5 mr-1" />
            <span>定員 {facility.capacity}名</span>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 左カラム: 画像ギャラリー */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {facility.images[0] && (
              <img
                src={facility.images[0]}
                alt={facility.name}
                className="w-full h-96 object-cover"
              />
            )}
            <div className="grid grid-cols-4 gap-2 p-2">
              {facility.images.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${facility.name} ${index + 2}`}
                  className="w-full h-24 object-cover rounded"
                />
              ))}
            </div>
          </div>

          {/* 施設説明 */}
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">施設について</h2>
            <p className="text-gray-600 whitespace-pre-line">
              {facility.description || '施設の説明が準備中です。'}
            </p>
          </div>

          {/* 特徴 */}
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">施設の特徴</h2>
            <div className="flex flex-wrap gap-2">
              {facility.features.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 右カラム: 施設情報 */}
        <div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">基本情報</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium">営業時間</h3>
                  <p className="text-gray-600">
                    平日: 7:00 - 18:00
                    <br />
                    土曜: 8:00 - 17:00
                    <br />
                    日祝: 休園
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium">電話番号</h3>
                  <p className="text-gray-600">03-XXXX-XXXX</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium">メールアドレス</h3>
                  <p className="text-gray-600">info@example.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Globe className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium">ウェブサイト</h3>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline"
                  >
                    公式サイトへ
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 空き状況 */}
          <div className="mt-6 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">空き状況</h2>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">現在の空き枠</span>
              <span className="text-lg font-medium text-rose-600">
                {facility.availableSpots}名
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-rose-600 h-2.5 rounded-full"
                style={{
                  width: `${(facility.availableSpots / facility.capacity) * 100}%`,
                }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              定員{facility.capacity}名中{facility.availableSpots}名空き
            </p>
          </div>

          {/* 問い合わせボタン */}
          <button className="w-full mt-6 bg-rose-600 text-white py-3 px-4 rounded-lg hover:bg-rose-700 transition-colors">
            この施設に問い合わせる
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacilityDetailPage;
