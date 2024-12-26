import React from 'react';
import { Link } from 'react-router-dom';
import type { Category } from '../../data/categories';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const { icon: Icon, name, path, color } = category;
  
  return (
    <Link
      to={path}
      className="group relative flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
    >
      <div className={`p-3 rounded-lg bg-gradient-to-br ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <span className="font-medium text-white group-hover:text-white/90">
        {name}
      </span>
    </Link>
  );
}