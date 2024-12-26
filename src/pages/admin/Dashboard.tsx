import React from 'react';
import { Navigate, Link } from 'react-router-dom';
import { Settings, GameController, BarChart } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export function AdminDashboard() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/admin/login" />;
  }

  const menuItems = [
    { icon: GameController, label: 'Games', path: '/admin/games' },
    { icon: Settings, label: 'SEO Settings', path: '/admin/settings' },
    { icon: BarChart, label: 'Analytics', path: '/admin/analytics' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        </div>
      </div>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <item.icon className="w-8 h-8 text-purple-600" />
                <span className="text-lg font-medium text-gray-900">
                  {item.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}