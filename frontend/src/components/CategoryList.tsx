// src/components/CategoryList.tsx
import React from 'react';
import type { Category } from '../types';

// 1. Add a new prop for the click handler
interface CategoryListProps {
  categories: Category[];
  onSelectCategory: (categoryId: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, onSelectCategory }) => {
  return (
    <div className="category-list">
      <h2>Our Services</h2>
      <ul>
        {categories.map((category) => (
          // 2. Add the onClick event handler
          <li
            key={category.id}
            className="category-item"
            onClick={() => onSelectCategory(category.id)}
          >
            <span>{category.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;