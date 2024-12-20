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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((category) => {
        const Icon = icons[category.icon as keyof typeof icons];
        return (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`p-4 rounded-lg text-center transition-colors duration-200 ${
              selectedCategory === category.id
                ? 'bg-rose-50 text-rose-600'
                : 'bg-white hover:bg-gray-50 text-gray-600'
            }`}
          >
            <Icon className="h-6 w-6 mx-auto mb-2" />
            <h3 className="font-medium text-sm">{category.name}</h3>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryList;