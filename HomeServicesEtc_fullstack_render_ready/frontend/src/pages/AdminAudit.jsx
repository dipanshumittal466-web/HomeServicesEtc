import React,{useEffect,useState} from 'react'; import axios from 'axios';
export default function Audit(){ const [logs,setLogs]=useState([]); useEffect(()=>{axios.get(import.meta.env.VITE_API_URL + '/api/audit').then(r=>setLogs(r.data)).catch(()=>{})},[])
return (<div><h2>Audit</h2><ul>{logs.map(l=>(<li key={l._id}>{new Date(l.createdAt).toLocaleString()} - {l.action}</li>))}</ul></div>)}