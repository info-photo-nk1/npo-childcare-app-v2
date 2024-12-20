import React from 'react';
import FeatureCard from '../components/common/FeatureCard';
import NewsCard from '../components/common/NewsCard';
import WeatherCard from '../components/weather/WeatherCard';
import { features } from '../data/features';
import { news } from '../data/news';
import { mockWeather } from '../data/mockWeather';

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          みんなで支える、<br className="sm:hidden" />子育ての輪
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          地域の子育て支援情報から施設検索、連絡帳まで。<br />
          子育てに必要な機能が全て揃った総合プラットフォーム
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
        <div className="lg:col-span-1">
          <WeatherCard weather={mockWeather} />
          <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-yellow-800">お出かけアドバイス</h3>
            <p className="mt-2 text-sm text-yellow-700">
              今日は日差しが強めです。お子様の外出時は帽子や日焼け止めをお忘れなく！
              公園で遊ぶ際は、日陰を活用しましょう。
            </p>
          </div>
        </div>
      </div>

      <div className="bg-rose-50 rounded-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">新着情報</h2>
        </div>
        <div className="space-y-4">
          {news.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;