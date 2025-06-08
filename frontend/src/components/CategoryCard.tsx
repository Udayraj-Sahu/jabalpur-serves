    import React from 'react';
    import { Link } from 'react-router-dom';
    import type { Category } from '../types';
    import './CategoryCard.css';

    interface CategoryCardProps {
      category: Category;
    }

    const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
      return (
        <Link to={`/category/${category.id}`} className="category-card">
          <div
            className="card-background"
            style={{ backgroundImage: `url(${category.imageUrl})` }}
          />
          <div className="card-overlay" />
          <h3 className="card-title">{category.name}</h3>
        </Link>
      );
    };

    export default CategoryCard;
    