import {useState} from 'react';
export default function Login(){ 
  const [email,setEmail]=useState(''); const [pw,setPw]=useState('');
  async function submit(e){ e.preventDefault(); const res = await fetch('/api/auth/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password:pw})}); const j=await res.json(); alert(JSON.stringify(j)); }
  return (<div style={{padding:20}}><h2>Login</h2><form onSubmit={submit}><input placeholder='email' value={email} onChange={e=>setEmail(e.target.value)}/><br/><input placeholder='password' type='password' value={pw} onChange={e=>setPw(e.target.value)}/><br/><button>Login</button></form></div>);
}
