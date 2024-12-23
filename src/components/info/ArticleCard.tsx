import React from 'react';
import { Clock, Heart, BookOpen, Share2 } from 'lucide-react';
import type { Article } from '../../types/article';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
  layout?: 'grid' | 'list';
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, featured, layout = 'grid' }) => {
  const Component = featured ? 'div' : 'article';
  const isList = layout === 'list';
  
  return (
    <Component 
      className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group ${
        featured || isList ? 'lg:flex' : ''
      }`}
    >
      <div className={`relative ${
        featured || isList ? 'lg:w-2/5' : 'aspect-video'
      }`}>
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover"
        />
          <span className="absolute top-2 left-2 px-3 py-1 bg-rose-500 text-white text-xs rounded-full font-medium backdrop-blur-sm bg-opacity-90">
          {article.category}
        </span>
      </div>
      
      <div className={`p-4 ${featured || isList ? 'lg:w-3/5' : ''}`}>
        <div className="flex items-center gap-2 mb-2">
          {article.author.avatar && (
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-6 h-6 rounded-full"
            />
          )}
          <span className="text-sm text-gray-600">{article.author.name}</span>
        </div>

        <h3 className={`font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors ${
          featured ? 'text-xl' : 'text-lg'
        }`}>
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {article.readingTime}分
            </span>
            <span className="flex items-center gap-1">
              <Heart className="h-4 w-4" />
              {article.likes}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button 
              className="p-2 hover:text-rose-500 hover:bg-rose-50 rounded-full transition-colors" 
              aria-label="記事を保存"
            >
              <BookOpen className="h-4 w-4" />
            </button>
            <button 
              className="p-2 hover:text-rose-500 hover:bg-rose-50 rounded-full transition-colors"
              aria-label="記事をシェア"
            >
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </Component>
  );
};

export default ArticleCard;
