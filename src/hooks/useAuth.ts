import { useState, useEffect } from 'react';
import type { AdminUser } from '../types/settings';

export function useAuth() {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would check session/token validity
    const checkAuth = () => {
      const savedUser = localStorage.getItem('adminUser');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = (email: string, password: string) => {
    // In a real app, this would validate credentials with a backend
    const user: AdminUser = {
      id: '1',
      email,
      role: 'admin'
    };
    localStorage.setItem('adminUser', JSON.stringify(user));
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem('adminUser');
    setUser(null);
  };

  return { user, loading, login, logout };
}