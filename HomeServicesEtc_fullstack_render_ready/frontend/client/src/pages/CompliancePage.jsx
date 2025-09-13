import React, { useState } from 'react';
import api from '../services/api';

const CompliancePage = () => {
  const [accepted, setAccepted] = useState(false);
  const handleAccept = () => {
    api.post('/users/indemnity').then(() => setAccepted(true));
  };

  return (
    <div style={{ padding:20 }}>
      <h2>Compliance & Indemnity</h2>
      {accepted
        ? <p>Thank you for accepting indemnity.</p>
        : <button onClick={handleAccept}>Accept Indemnity</button>
      }
    </div>
  );
};

export default CompliancePage;
