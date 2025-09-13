import {useState} from 'react';
export default function PostJob(){
  const [title,setTitle]=useState(''); const [desc,setDesc]=useState('');
  async function submit(e){ e.preventDefault(); const token = prompt('Enter poster token (from register/login)'); const res = await fetch('/api/jobs',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+token},body:JSON.stringify({title,description:desc})}); const j = await res.json(); alert(JSON.stringify(j)); }
  return (<div style={{padding:20}}><h2>Post a Job</h2><form onSubmit={submit}><input placeholder='title' value={title} onChange={e=>setTitle(e.target.value)}/><br/><textarea placeholder='description' value={desc} onChange={e=>setDesc(e.target.value)}/><br/><button>Post Job</button></form></div>);
}
