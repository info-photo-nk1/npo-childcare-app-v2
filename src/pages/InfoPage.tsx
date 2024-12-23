import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import CategoryList from '../components/info/CategoryList';
import ArticleCard from '../components/info/ArticleCard';
import PopularTags from '../components/info/PopularTags';
import { categories, articles } from '../data/articles';

const InfoPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const filteredArticles = articles.filter((article) => {
    if (selectedCategory !== 'all' && article.category !== selectedCategory) return false;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query)
      );
    }
    return true;
  });

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="lg:flex lg:items-center lg:justify-between mb-8 bg-gradient-to-r from-rose-50 to-white p-6 rounded-xl">
        <div className="flex-1 min-w-0">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">育児情報</h1>
          <p className="text-lg text-gray-600">専門家監修の信頼できる育児情報をお届けします</p>
        </div>
        <div className="mt-4 lg:mt-0 lg:ml-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setView('grid')}
              className={`p-2 rounded-lg ${
                view === 'grid' ? 'bg-rose-50 text-rose-600' : 'text-gray-600'
              }`}
            >
              グリッド表示
            </button>
            <button
              onClick={() => setView('list')}
              className={`p-2 rounded-lg ${
                view === 'list' ? 'bg-rose-50 text-rose-600' : 'text-gray-600'
              }`}
            >
              リスト表示
            </button>
          </div>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-4 lg:gap-8">
        <div className="lg:col-span-3">
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="記事を検索"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
            </div>
          </div>

          <section className="mb-12">
            <CategoryList
              categories={categories}
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
          </section>

          <section className="mb-12" aria-labelledby="featured-articles">
            <h2 id="featured-articles" className="text-2xl font-bold text-gray-900 mb-6">
              注目の記事
              <span className="ml-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-rose-100 text-rose-800">
                FEATURED
              </span>
            </h2>
            {filteredArticles.length > 0 && (
              <div className="transform transition-all hover:scale-[1.02] duration-300">
                <ArticleCard article={filteredArticles[0]} featured />
              </div>
            )}
          </section>

          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">最新の記事</h2>
              <span className="text-gray-500">{filteredArticles.length}件の記事</span>
            </div>
            <div className={
              view === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 gap-6'
                : 'space-y-6'
            }>
              {filteredArticles.slice(1).map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  layout={view}
                />
              ))}
            </div>
          </section>
        </div>

        <div className="lg:col-span-1 mt-8 lg:mt-0">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24 border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">人気のタグ</h3>
            <PopularTags />
            
            <div className="mt-8">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                記事を絞り込む
              </h3>
              <div className="space-y-4">
                <label className="flex items-center hover:bg-rose-50 p-2 rounded-lg transition-colors cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-rose-500 focus:ring-rose-500" />
                  <span className="ml-2 text-sm text-gray-600">専門家監修記事のみ</span>
                </label>
                <label className="flex items-center hover:bg-rose-50 p-2 rounded-lg transition-colors cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-rose-500 focus:ring-rose-500" />
                  <span className="ml-2 text-sm text-gray-600">新着記事のみ</span>
                </label>
                <div className="pt-4 border-t border-gray-100">
                  <button className="w-full py-2 px-4 bg-rose-50 text-rose-600 rounded-lg hover:bg-rose-100 transition-colors">
                    フィルターをリセット
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default InfoPage;
