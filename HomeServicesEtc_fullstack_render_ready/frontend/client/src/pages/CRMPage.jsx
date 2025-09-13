import React, { useEffect, useState } from 'react';
import api from '../services/api';

const CRMPage = () => {
  const [metrics, setMetrics] = useState({});
  useEffect(() => {
    api.get('/crm/metrics').then(res => setMetrics(res.data));
  }, []);
  return (
    <div style={{ padding:20 }}>
      <h2>CRM Dashboard</h2>
      <p>Total Jobs: {metrics.totalJobs}</p>
      <h3>By Category:</h3>
      <ul>
        {metrics.byCategory?.map(c => (
          <li key={c._id}>{c._id}: {c.count}</li>
        ))}
      </ul>
    </div>
  );
};

export default CRMPage;
