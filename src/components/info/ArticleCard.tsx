import React from 'react';
import { Article } from '../../types/article';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Link to={`/info/${article.id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group lg:flex">
        <div className="relative h-48 sm:h-56 md:h-48 lg:h-auto lg:w-1/4">
          <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
          <span className="absolute top-2 left-2 px-3 py-1 bg-rose-500 text-white text-xs rounded-full font-medium backdrop-blur-sm bg-opacity-90">
            {article.category}
          </span>
        </div>
        <div className="p-4 lg:w-3/5">
          <div className="flex items-center gap-2 mb-2">
            <img src={article.author.avatar} alt={article.author.name} className="w-6 h-6 rounded-full" />
            <span className="text-sm text-gray-600">{article.author.name}</span>
          </div>
          <h3 className="font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors text-xl">
            {article.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-4 w-4">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {article.readingTime}分
              </span>
              <span className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart h-4 w-4">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
                {article.likes}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:text-rose-500 hover:bg-rose-50 rounded-full transition-colors" aria-label="記事を保存">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open h-4 w-4">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </button>
              <button className="p-2 hover:text-rose-500 hover:bg-rose-50 rounded-full transition-colors" aria-label="記事をシェア">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share2 h-4 w-4">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
