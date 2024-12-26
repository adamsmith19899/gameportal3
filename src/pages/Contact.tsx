import React from 'react';
import { ContentContainer } from '../components/ui/ContentContainer';
import { PageHeader } from '../components/ui/PageHeader';

export function Contact() {
  return (
    <ContentContainer>
      <PageHeader 
        title="Contact Us"
        subtitle="Get in touch with our support team"
      />
      <form className="space-y-6 max-w-xl">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:from-purple-500 hover:to-pink-500 transition-all"
        >
          Send Message
        </button>
      </form>
    </ContentContainer>
  );
}