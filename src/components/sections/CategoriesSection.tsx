import React from 'react';
import { CategoryCard } from '../ui/CategoryCard';
import { categories } from '../../data/categories';

export function CategoriesSection() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
        Game Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </div>
    </section>
  );
}