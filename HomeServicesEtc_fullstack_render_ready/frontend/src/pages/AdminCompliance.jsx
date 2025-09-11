import React, {useEffect, useState} from 'react'
import axios from 'axios'
export default function AdminCompliance(){
  const [pending, setPending] = useState([])
  useEffect(()=>{ fetch() }, [])
  async function fetch(){ const res = await axios.get(import.meta.env.VITE_API_URL + '/api/compliance/pending'); setPending(res.data) }
  async function verify(userId, which, approve){
    await axios.post(import.meta.env.VITE_API_URL + '/api/compliance/verify/' + userId, {which, approve:true, adminId: 'admin_demo'})
    fetch()
  }
  return (
    <div>
      <h2>Compliance Panel</h2>
      {pending.map(u=>(
        <div key={u._id} className="p-2 border mb-2">
          <strong>{u.name} ({u.email})</strong>
          <div>Insurance: {u.insuranceDoc && String(u.insuranceDoc.verified)}</div>
          <div>ID: {u.idDoc && String(u.idDoc.verified)}</div>
          <div className="mt-2">
            <button onClick={()=>verify(u._id,'insurance',true)}>Approve Insurance</button>
            <button onClick={()=>verify(u._id,'id',true)}>Approve ID</button>
          </div>
        </div>
      ))}
    </div>
  )
}
