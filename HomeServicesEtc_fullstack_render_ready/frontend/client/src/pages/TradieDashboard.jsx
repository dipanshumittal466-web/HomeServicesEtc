import React, { useState } from 'react';
import api from '../services/api';

const TradieDashboard = () => {
  const [files, setFiles] = useState({});
  const handleFile = e => setFiles({ ...files, [e.target.name]: e.target.files });
  const handleUpload = () => {
    const data = new FormData();
    if (files.photoID) data.append('photoID', files.photoID[0]);
    if (files.insurance) data.append('insurance', files.insurance[0]);
    api.post('/users/upload', data).then(() => alert('Uploaded'));
  };

  return (
    <div style={{ padding:20 }}>
      <h2>Tradie Dashboard</h2>
      <input type="file" name="photoID" onChange={handleFile}/>
      <input type="file" name="insurance" onChange={handleFile}/>
      <button onClick={handleUpload}>Upload Documents</button>
    </div>
  );
};

export default TradieDashboard;
