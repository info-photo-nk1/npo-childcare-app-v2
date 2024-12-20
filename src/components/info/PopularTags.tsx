import React from 'react';

const tags = [
  { id: '1', name: '離乳食', count: 42 },
  { id: '2', name: '睡眠', count: 38 },
  { id: '3', name: '発達', count: 35 },
  { id: '4', name: '遊び方', count: 31 },
  { id: '5', name: '病気', count: 28 },
  { id: '6', name: 'しつけ', count: 25 },
];

const PopularTags = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button
          key={tag.id}
          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700"
        >
          {tag.name}
          <span className="ml-1 text-gray-500">({tag.count})</span>
        </button>
      ))}
    </div>
  );
};

export default PopularTags;