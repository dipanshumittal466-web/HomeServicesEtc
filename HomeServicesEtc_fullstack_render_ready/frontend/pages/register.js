import {useState} from 'react';
export default function Register(){ 
  const [name,setName]=useState(''); const [email,setEmail]=useState(''); const [pw,setPw]=useState('');
  async function submit(e){ e.preventDefault(); const res = await fetch('/api/auth/register',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,email,password:pw})}); const j=await res.json(); alert(JSON.stringify(j)); }
  return (<div style={{padding:20}}><h2>Register</h2><form onSubmit={submit}><input placeholder='name' value={name} onChange={e=>setName(e.target.value)}/><br/><input placeholder='email' value={email} onChange={e=>setEmail(e.target.value)}/><br/><input placeholder='password' type='password' value={pw} onChange={e=>setPw(e.target.value)}/><br/><button>Register</button></form></div>);
}
