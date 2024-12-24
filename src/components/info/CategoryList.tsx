import React from 'react';
import { Baby, Brain, Heart, Apple, Sun, Users } from 'lucide-react';
import type { Category } from '../../types/article';

const icons = {
  baby: Baby,
  brain: Brain,
  heart: Heart,
  apple: Apple,
  sun: Sun,
  users: Users,
};

interface CategoryListProps {
  categories: Category[];
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
}) => {
  return (
    <nav aria-label="記事カテゴリー" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((category) => {
        const Icon = icons[category.icon as keyof typeof icons];
        const isSelected = selectedCategory === category.id;
        return (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`p-4 rounded-lg text-center transition-all duration-200 transform hover:scale-105 ${
              isSelected
                ? 'bg-rose-50 text-rose-600 ring-2 ring-rose-200'
                : 'bg-white hover:bg-gray-50 text-gray-600 hover:shadow-md'
            }`}
            aria-pressed={isSelected}
            aria-label={`${category.name}カテゴリーを表示`}
          >
            <Icon className={`h-6 w-6 mx-auto mb-2 transition-transform duration-200 ${
              isSelected ? 'transform scale-110' : ''
            }`} />
            <h3 className="font-medium text-sm">{category.name}</h3>
            {isSelected && (
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full" />
            )}
          </button>
        );
      })}
    </nav>
  );
};

export default CategoryList;
