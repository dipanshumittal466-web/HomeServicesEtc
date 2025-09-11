import React, {useState} from 'react'
import axios from 'axios'
export default function Login(){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [msg,setMsg]=useState('')
  async function submit(e){ e.preventDefault(); try{ const res = await axios.post(import.meta.env.VITE_API_URL + '/api/auth/login',{email,password}); localStorage.setItem('token', res.data.token); localStorage.setItem('demo_user_id', res.data.user._id); setMsg('Logged in'); }catch(err){ setMsg('Error') } }
  return (<form onSubmit={submit}><h2>Login</h2><input value={email} onChange={e=>setEmail(e.target.value)} placeholder='email'/><input type='password' value={password} onChange={e=>setPassword(e.target.value)} placeholder='password'/><button type='submit'>Login</button><div>{msg}</div></form>)
}
