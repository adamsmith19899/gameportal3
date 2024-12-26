import React from 'react';
import { ContentContainer } from '../components/ui/ContentContainer';
import { PageHeader } from '../components/ui/PageHeader';

export function About() {
  return (
    <ContentContainer>
      <PageHeader 
        title="About Us"
        subtitle="Learn more about our gaming platform"
      />
      <div className="space-y-6 text-white/80">
        <p>
          Welcome to Unblocked-Games-ATSchool.Github.io, your premier destination for free online gaming entertainment. Our platform is dedicated to providing a safe and enjoyable gaming experience for students and gaming enthusiasts alike.
        </p>
        <p>
          Our mission is to create a space where players can access quality games without restrictions, while maintaining a commitment to responsible gaming practices and content moderation.
        </p>
        <p>
          We carefully curate our game selection to ensure:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Age-appropriate content</li>
          <li>High-quality gameplay experience</li>
          <li>Regular updates and new additions</li>
          <li>Fast loading times and smooth performance</li>
        </ul>
      </div>
    </ContentContainer>
  );
}