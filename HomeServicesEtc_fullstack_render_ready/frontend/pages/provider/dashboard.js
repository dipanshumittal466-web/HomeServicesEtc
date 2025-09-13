import {useState} from 'react';
export default function ProviderDashboard(){
  const [userId,setUserId]=useState(''); const [file,setFile]=useState(null); const [type,setType]=useState('id');
  async function upload(e){ e.preventDefault(); if(!userId){ alert('Enter your user id (from register response)'); return; } if(!file){ alert('Choose a file'); return; }
    // request signed URL
    const token = prompt('Enter your token (provider)');
    const res = await fetch('/api/uploads/signed-url',{method:'POST', headers:{'Content-Type':'application/json','Authorization':'Bearer '+token}, body: JSON.stringify({filename: file.name, contentType: file.type})});
    const j = await res.json();
    if(!j.url){ alert('Failed to get upload URL: '+JSON.stringify(j)); return; }
    // upload to S3 with PUT
    await fetch(j.url, {method:'PUT', headers: {'Content-Type': file.type}, body: file});
    // notify backend of uploaded file url (publicUrl returned)
    const notify = await fetch('/api/providers/'+userId+'/documents', {method:'POST', headers: {'Content-Type':'application/json','Authorization':'Bearer '+token}, body: JSON.stringify({url: j.publicUrl, type})});
    const nj = await notify.json();
    alert(JSON.stringify(nj));
  }
  return (<div style={{padding:20}}><h2>Provider Dashboard (S3 upload)</h2><p>Enter your user id (from register response) to upload.</p><form onSubmit={upload}><input placeholder='your user id' value={userId} onChange={e=>setUserId(e.target.value)}/><br/><select value={type} onChange={e=>setType(e.target.value)}><option value='id'>Photo ID</option><option value='insurance'>Insurance</option></select><br/><input type='file' onChange={e=>setFile(e.target.files[0])}/><br/><button>Upload Document to S3</button></form></div>);
}
