    import { useState, useEffect } from 'react';
    import CategoryCard from '../components/CategoryCard';
    import type { Category } from '../types';
    import { mockCategories } from '../data/mockData';
    import './HomePage.css';

    const HomePage = () => {
      const [categories, setCategories] = useState<Category[]>([]);
      const [isLoading, setIsLoading] = useState<boolean>(true);

      useEffect(() => {
        setCategories(mockCategories);
        setIsLoading(false);
      }, []);

      if (isLoading) {
        return <h1>Loading...</h1>;
      }

      return (
        <div className="homepage-grid">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      );
    };

    export default HomePage;
    