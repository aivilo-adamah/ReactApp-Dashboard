import React from 'react';
import { Content, Header, Sidebar } from 'admin-lte';

function Dashboard() {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
}

export default Dashboard;
