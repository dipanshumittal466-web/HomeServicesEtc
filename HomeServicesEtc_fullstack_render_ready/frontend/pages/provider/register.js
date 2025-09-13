import {useState} from 'react';
export default function ProviderRegister(){
  const [name,setName] = useState(''); const [email,setEmail]=useState(''); const [pw,setPw]=useState('');
  const [business,setBusiness]=useState(''); const [indemnity,setIndemnity]=useState(false);
  async function register(e){
    e.preventDefault();
    // create user first
    let res = await fetch('/api/auth/register',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,email,password:pw,role:'provider'})});
    const j = await res.json();
    if(!j.token){ alert('Register failed'); return; }
    const token = j.token;
    // create profile
    await fetch('/api/providers/'+j.user.id+'/profile',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+token},body:JSON.stringify({businessName:business, indemnityAccepted:indemnity})});
    alert('Provider registered. Now upload documents via dashboard.');
  }
  return (<div style={{padding:20}}><h2>Provider Register</h2><form onSubmit={register}><input placeholder='name' value={name} onChange={e=>setName(e.target.value)}/><br/><input placeholder='email' value={email} onChange={e=>setEmail(e.target.value)}/><br/><input placeholder='password' type='password' value={pw} onChange={e=>setPw(e.target.value)}/><br/><input placeholder='business name' value={business} onChange={e=>setBusiness(e.target.value)}/><br/><label><input type='checkbox' checked={indemnity} onChange={e=>setIndemnity(e.target.checked)}/> I accept indemnity terms</label><br/><button>Register as Provider</button></form></div>);
}
