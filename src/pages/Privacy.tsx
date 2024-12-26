import React from 'react';
import { ContentContainer } from '../components/ui/ContentContainer';
import { PageHeader } from '../components/ui/PageHeader';

export function Privacy() {
  return (
    <ContentContainer>
      <PageHeader 
        title="Privacy Policy"
        subtitle="How we handle and protect your data"
      />
      <div className="space-y-8 text-white/80">
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Information We Collect</h2>
          <p className="mb-4">We collect minimal information necessary to provide you with the best gaming experience:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Browser type and version</li>
            <li>Game preferences and scores</li>
            <li>Device information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Improve your gaming experience</li>
            <li>Maintain and optimize our services</li>
            <li>Analyze usage patterns and trends</li>
            <li>Prevent abuse and maintain security</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Data Protection</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>
      </div>
    </ContentContainer>
  );
}