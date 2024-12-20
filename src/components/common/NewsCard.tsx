import React from 'react';

interface NewsCardProps {
  date: string;
  title: string;
  category: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ date, title, category }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-500">{date}</span>
      <span className="px-2 py-1 text-xs font-medium text-rose-700 bg-rose-100 rounded-full">
        {category}
      </span>
    </div>
    <h3 className="mt-2 text-gray-900">{title}</h3>
  </div>
);

export default NewsCard;