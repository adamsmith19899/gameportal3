export interface SiteSettings {
  title: string;
  description: string;
  keywords: string[];
  googleAdsCode?: string;
}

export interface AdminUser {
  id: string;
  email: string;
  role: 'admin';
}