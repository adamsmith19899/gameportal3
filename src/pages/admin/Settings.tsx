import React from 'react';
import { useSettings } from '../../hooks/useSettings';
import { SEOForm } from '../../components/admin/SEOForm';

export function AdminSettings() {
  const { settings, updateSettings } = useSettings();

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">SEO Settings</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <SEOForm
            settings={settings}
            onSubmit={updateSettings}
          />
        </div>
      </div>
    </div>
  );
}