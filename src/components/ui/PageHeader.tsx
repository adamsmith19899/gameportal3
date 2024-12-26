import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-2 text-white/60">{subtitle}</p>
      )}
    </div>
  );
}