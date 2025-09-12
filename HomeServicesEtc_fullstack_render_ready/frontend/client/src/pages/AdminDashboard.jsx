import React, { useEffect, useState } from 'react';
import api from '../services/api';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    api.get('/admin/unverified').then(res => setUsers(res.data));
  }, []);
  const verify = id => api.put(`/admin/verify/${id}`).then(() => setUsers(users.filter(u => u