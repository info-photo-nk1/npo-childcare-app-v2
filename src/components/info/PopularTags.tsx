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
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);

  const toggleTag = (tagId: string) => {
    setSelectedTags(prev => 
      prev.includes(tagId) 
        ? prev.filter(id => id !== tagId)
        : [...prev, tagId]
    );
  };

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="人気のタグ">
      {tags.map((tag) => {
        const isSelected = selectedTags.includes(tag.id);
        return (
          <button
            key={tag.id}
            onClick={() => toggleTag(tag.id)}
            className={`
              px-3 py-1.5 rounded-full text-sm 
              transition-all duration-200 
              hover:shadow-md hover:scale-105
              ${isSelected 
                ? 'bg-rose-100 text-rose-700 ring-2 ring-rose-200' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }
            `}
            aria-pressed={isSelected}
            aria-label={`${tag.name}タグで絞り込み`}
          >
            {tag.name}
            <span className={`ml-1 ${isSelected ? 'text-rose-500' : 'text-gray-500'}`}>
              ({tag.count})
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default PopularTags;
