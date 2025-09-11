import React, {useState} from 'react'
import axios from 'axios'
export default function ProfileCompliance(){
  const [insuranceFile, setInsuranceFile] = useState(null)
  const [idFile, setIdFile] = useState(null)
  const [status, setStatus] = useState('')
  const userId = window.localStorage.getItem('demo_user_id') || '' // demo
  async function uploadInsurance(e){
    // try presign upload to S3
    const token = localStorage.getItem('token')
    if(!insuranceFile) return alert('Select insurance file')
    const ext = insuranceFile.name.split('.').pop()
    try{
      const pres = await fetch(import.meta.env.VITE_API_URL + '/api/s3/presign', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({filename:insuranceFile.name, contentType:insuranceFile.type})}).then(r=>r.json())
      if(pres.url){ await fetch(pres.url, {method:'PUT', body:insuranceFile, headers:{'Content-Type':insuranceFile.type}})
        // tell backend to register the key
        const register = await fetch(import.meta.env.VITE_API_URL + '/api/compliance/register-s3', {method:'POST', headers:{'Content-Type':'application/json','Authorization':'Bearer '+token}, body:JSON.stringify({key:pres.key, filename:insuranceFile.name, expiresAt: document.getElementById('exp').value})})
        setStatus('uploaded to s3')
        return
      }
    }catch(e){ console.error('s3 presign failed', e) }

    e.preventDefault()
    if(!insuranceFile) return alert('Select insurance file')
    const fd = new FormData()
    fd.append('file', insuranceFile)
    fd.append('expiresAt', document.getElementById('exp').value)
    fd.append('acknowledged', true)
    const res = await axios.post(import.meta.env.VITE_API_URL + '/api/compliance/upload-insurance/' + userId, fd)
    setStatus('insurance uploaded')
  }
  async function uploadId(e){
    e.preventDefault()
    if(!idFile) return alert('Select id file')
    const fd = new FormData()
    fd.append('file', idFile)
    fd.append('acknowledged', true)
    const res = await axios.post(import.meta.env.VITE_API_URL + '/api/compliance/upload-id/' + userId, fd)
    setStatus('id uploaded')
  }
  return (
    <div>
      <h2>Compliance - Upload Insurance & ID</h2>
      <form onSubmit={uploadInsurance}>
        <div><label>Currency Certificate (JPG/PNG/PDF)</label><input type="file" accept=".jpg,.jpeg,.png,.pdf" onChange={e=>setInsuranceFile(e.target.files[0])}/></div>
        <div><label>Expires At</label><input id="exp" type="date"/></div>
        <button type="submit">Upload Insurance</button>
      </form>
      <form onSubmit={uploadId}>
        <div><label>Photo ID (JPG/PNG/PDF)</label><input type="file" accept=".jpg,.jpeg,.png,.pdf" onChange={e=>setIdFile(e.target.files[0])}/></div>
        <button type="submit">Upload ID</button>
      </form>
      <div>{status}</div>
    </div>
  )
}
