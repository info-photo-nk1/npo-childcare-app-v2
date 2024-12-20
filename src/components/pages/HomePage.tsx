import React from 'react';
import FeatureCard from '../common/FeatureCard';
import NewsCard from '../common/NewsCard';
import { features } from '../../data/features';
import { news } from '../../data/news';

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>

      <div className="mt-16 bg-rose-50 rounded-2xl p-8">
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