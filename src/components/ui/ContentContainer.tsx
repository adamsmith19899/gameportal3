import React from 'react';

interface ContentContainerProps {
  children: React.ReactNode;
}

export function ContentContainer({ children }: ContentContainerProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-24 pb-12">
      {children}
    </div>
  );
}