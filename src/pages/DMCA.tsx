import React from 'react';
import { ContentContainer } from '../components/ui/ContentContainer';
import { PageHeader } from '../components/ui/PageHeader';

export function DMCA() {
  return (
    <ContentContainer>
      <PageHeader 
        title="DMCA Policy"
        subtitle="Copyright and intellectual property guidelines"
      />
      <div className="space-y-8 text-white/80">
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Copyright Information</h2>
          <p>
            We respect the intellectual property rights of others and expect our users to do the same. We will respond to notices of alleged copyright infringement that comply with applicable law and are properly provided to us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Filing a DMCA Notice</h2>
          <p className="mb-4">If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement, please provide our copyright agent with the following information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>A description of the copyrighted work</li>
            <li>A description of where the material is located on our website</li>
            <li>Your contact information</li>
            <li>A statement of good faith belief</li>
            <li>A statement of accuracy under penalty of perjury</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Contact Information</h2>
          <p>
            Please contact our copyright agent at the email address provided in the Contact section of our website.
          </p>
        </section>
      </div>
    </ContentContainer>
  );
}