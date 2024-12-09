// src/pages/AdminDashboard.jsx
import React from 'react';
import AddTurf from './AddTurf';
import ManageTurfAvailability from './ManageTurfAvailability';
import UserActivityAnalytics from './UserActivityAnalytics';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Admin Dashboard</h1>

        <div className="space-y-8">
          <AddTurf />
          <ManageTurfAvailability />
          <UserActivityAnalytics />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
