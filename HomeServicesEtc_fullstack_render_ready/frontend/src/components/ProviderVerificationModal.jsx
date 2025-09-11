import React, { useState, useRef, useEffect } from "react";
export default function ProviderVerificationModal({ visible = true, onClose = () => {}, apiBase = "" }) {
  const [certFile, setCertFile] = useState(null);
  const [idFile, setIdFile] = useState(null);
  const [ack, setAck] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const firstFocusableRef = useRef(null);
  useEffect(() => { if (visible && firstFocusableRef.current) firstFocusableRef.current.focus(); }, [visible]);
  function handleCertChange(e){ setCertFile(e.target.files[0] || null); setError(""); }
  function handleIdChange(e){ setIdFile(e.target.files[0] || null); setError(""); }
  function canSubmit(){ return ack && certFile && idFile && !submitting; }
  async function handleSubmit(){ if(!canSubmit()) return; setSubmitting(true); setError(''); const fd=new FormData(); fd.append('currency_certificate', certFile); fd.append('photo_id', idFile); try{ const res=await fetch(apiBase + '/api/provider/documents',{method:'POST',credentials:'include',body:fd}); if(res.status===401){ window.location.href = '/login?next=' + encodeURIComponent(window.location.pathname); return;} if(!res.ok){ const txt=await res.text().catch(()=> 'Upload failed'); setError(txt||'Upload failed'); setSubmitting(false); return;} try{ await fetch(apiBase + '/api/provider/acknowledge',{method:'POST',credentials:'include',headers:{'Content-Type':'application/json'},body:JSON.stringify({acknowledged:true})}); }catch(e){} sessionStorage.setItem('hs_ack','submitted'); setSubmitting(false); onClose(); }catch(err){ console.error(err); setError('Network error during upload'); setSubmitting(false);} }
  function handleRemindLater(){ sessionStorage.setItem('hs_ack','later'); onClose(); }
  useEffect(()=>{ if(sessionStorage.getItem('hs_ack') && visible) onClose(); },[visible,onClose]);
  if(!visible) return null;
  return (
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.5)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:1000}} role="dialog" aria-modal="true" aria-labelledby="verification-title">
      <div style={{background:'#fff',borderRadius:10,maxWidth:520,width:'92%',padding:20}} role="document">
        <h2 id="verification-title">Important: Verification Required</h2>
        <p>To view or apply for jobs you must upload a valid <strong>Currency Certificate (insurance)</strong> and a <strong>Photo ID</strong>. These documents will be reviewed by our team before access is granted.</p>
        <div style={{marginTop:10}}>
          <div><label>Currency Certificate (PDF/JPG/PNG)</label><input ref={firstFocusableRef} type="file" accept=".pdf,image/*" onChange={handleCertChange} /><div style={{fontSize:12,color:'#666'}}>{certFile?certFile.name:'No file chosen'}</div></div>
          <div style={{marginTop:8}}><label>Photo ID (Passport/Driver's licence)</label><input type="file" accept="image/*,.pdf" onChange={handleIdChange} /><div style={{fontSize:12,color:'#666'}}>{idFile?idFile.name:'No file chosen'}</div></div>
        </div>
        <p style={{fontSize:12,color:'#555'}}>View full requirements: <a href="/legal/insurance-and-id-policy" target="_blank" rel="noopener">policy</a></p>
        <label style={{display:'flex',gap:8,alignItems:'center'}}><input type="checkbox" checked={ack} onChange={(e)=>setAck(e.target.checked)} /> <span style={{fontSize:13}}>I have read and agree to the policy.</span></label>
        {error && <div style={{color:'red'}}>{error}</div>}
        <div style={{marginTop:12,display:'flex',gap:8}}>
          <button onClick={handleSubmit} disabled={!canSubmit()} style={{padding:'8px 12px',borderRadius:8,background: canSubmit() ? '#1060d6':'#ccc',color:'#fff',border:'none'}}>{submitting ? 'Uploading...' : 'Submit & Request Verification'}</button>
          <button onClick={handleRemindLater} style={{padding:'8px 12px',borderRadius:8}}>Remind me later</button>
        </div>
        <p style={{fontSize:12,color:'#666',marginTop:10}}>Need help? <a href="/contact">Contact support</a></p>
      </div>
    </div>
  );
}
