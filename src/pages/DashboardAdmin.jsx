// eslint-disable-next-line no-unused-vars
import React from 'react';
import Layout from '../pages/Layout';

const DashboardAdmin = () => {
  return (
    <Layout>
      <div className="p-6 mt-16 md:ml-[250px]">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>Welcome to the admin dashboard. Here you can manage lands, transactions, land rentals, and users.</p>
      </div>
    </Layout>
  );
};

export default DashboardAdmin;
