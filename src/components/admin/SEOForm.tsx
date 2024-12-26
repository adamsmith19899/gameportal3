import React from 'react';
import type { SiteSettings } from '../../types/settings';

interface SEOFormProps {
  settings: SiteSettings;
  onSubmit: (settings: SiteSettings) => void;
}

export function SEOForm({ settings, onSubmit }: SEOFormProps) {
  const [formData, setFormData] = React.useState<SiteSettings>(settings);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Site Title
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg"
          rows={3}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Keywords (comma separated)
        </label>
        <input
          type="text"
          value={formData.keywords.join(', ')}
          onChange={(e) => setFormData({
            ...formData,
            keywords: e.target.value.split(',').map(k => k.trim())
          })}
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Google Ads Code
        </label>
        <textarea
          value={formData.googleAdsCode}
          onChange={(e) => setFormData({ ...formData, googleAdsCode: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg font-mono text-sm"
          rows={4}
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
      >
        Save Settings
      </button>
    </form>
  );
}