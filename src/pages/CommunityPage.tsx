import React, { useState } from 'react';
import { Search, Plus, Filter } from 'lucide-react';
import PostCard from '../components/community/PostCard';
import type { Post, PostFilters } from '../types/community';

// モックデータ
const mockPosts: Post[] = [
  {
    id: '1',
    title: '離乳食の進め方について相談です',
    content: '生後7ヶ月の赤ちゃんの離乳食について悩んでいます。野菜を全く食べてくれないのですが、みなさんどうされていますか？',
    category: 'question',
    author: {
      id: '1',
      name: '佐藤美咲',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80',
    },
    createdAt: '2024-03-15T00:00:00Z',
    likes: 12,
    comments: [
      {
        id: '1',
        content: '野菜を細かく刻んでお粥に混ぜてみるのはどうでしょうか？',
        author: {
          id: '2',
          name: '山田花子',
        },
        createdAt: '2024-03-15T01:00:00Z',
        likes: 3,
      }
    ],
    tags: ['離乳食', '7ヶ月', '野菜'],
  },
  {
    id: '2',
    title: '休日の過ごし方シェア',
    content: '週末に子供と一緒に楽しめる室内遊びを見つけました！簡単な材料で作れる手作りおもちゃの作り方を共有します。',
    category: 'share',
    author: {
      id: '2',
      name: '山田花子',
    },
    createdAt: '2024-03-14T00:00:00Z',
    likes: 24,
    comments: [],
    tags: ['室内遊び', 'DIY', '週末'],
  },
];

const CommunityPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<PostFilters>({});
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            子育て仲間の輪
          </h1>
          <p className="text-gray-600">
            悩みを共有したり、経験を活かしたアドバイスをしあったり。<br />
            みんなで支え合う子育てコミュニティです。
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600">
          <Plus className="h-5 w-5" />
          投稿する
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="mb-6">
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

          <div className="space-y-6">
            {mockPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onClick={() => setSelectedPost(post)}
              />
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white p-4 rounded-lg shadow-sm sticky top-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-5 w-5 text-gray-500" />
              <h3 className="font-medium">フィルター</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  カテゴリー
                </label>
                <select
                  value={filters.category || ''}
                  onChange={(e) => setFilters({ ...filters, category: e.target.value as any })}
                  className="w-full rounded-md border-gray-300"
                >
                  <option value="">すべて</option>
                  <option value="question">相談</option>
                  <option value="share">共有</option>
                  <option value="event">イベント</option>
                  <option value="recipe">レシピ</option>
                  <option value="tips">コツ・ヒント</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  並び順
                </label>
                <select
                  value={filters.sortBy || 'latest'}
                  onChange={(e) => setFilters({ ...filters, sortBy: e.target.value as any })}
                  className="w-full rounded-md border-gray-300"
                >
                  <option value="latest">新着順</option>
                  <option value="popular">人気順</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  人気のタグ
                </label>
                <div className="flex flex-wrap gap-2">
                  {['離乳食', '遊び方', '生活リズム', '健康', 'お出かけ'].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setFilters({ ...filters, tag })}
                      className={`px-3 py-1 rounded-full text-sm ${
                        filters.tag === tag
                          ? 'bg-rose-100 text-rose-700'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;