import React, {useEffect, useState} from 'react'
export default function CompliancePopup({onClose}) {
  const [show, setShow] = useState(true)
  const [ack, setAck] = useState(false)
  useEffect(()=>{ setShow(true) },[])
  if(!show) return null
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded max-w-lg w-full">
        <h2 className="text-xl font-semibold">Important Notice for Trades & Service Providers</h2>
        <p className="mt-2">Upload a valid Currency Certificate and Photo ID before accessing jobs.</p>
        <div className="mt-4">
          <label><input type="checkbox" checked={ack} onChange={e=>setAck(e.target.checked)}/> I acknowledge and agree</label>
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <button onClick={()=>{ if(ack) { setShow(false); if(onClose) onClose(); } }} className="px-3 py-2 border rounded">Continue</button>
        </div>
      </div>
    </div>
  )
}
