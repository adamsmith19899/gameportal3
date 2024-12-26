import { useState } from 'react';
import type { SiteSettings } from '../types/settings';

const initialSettings: SiteSettings = {
  title: 'Unblocked Games - Play Free Online Games',
  description: 'Play the best unblocked games online for free. New games added daily!',
  keywords: ['unblocked games', 'online games', 'free games', 'school games'],
  googleAdsCode: ''
};

export function useSettings() {
  const [settings, setSettings] = useState<SiteSettings>(initialSettings);

  const updateSettings = (newSettings: SiteSettings) => {
    setSettings(newSettings);
    // In a real app, this would save to a backend
    localStorage.setItem('siteSettings', JSON.stringify(newSettings));
  };

  return { settings, updateSettings };
}