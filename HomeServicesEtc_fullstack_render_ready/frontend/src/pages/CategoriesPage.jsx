import React, {useEffect, useState} from 'react'
import axios from 'axios'
export default function CategoriesPage(){
  const [cats, setCats] = useState([])
  const [q, setQ] = useState('')
  useEffect(()=>{ fetch() }, [])
  async function fetch(){ try{ const res = await axios.get(import.meta.env.VITE_API_URL + '/api/categories'); setCats(res.data)}catch(err){console.error(err)} }
  const filtered = cats.filter(c => c.name.toLowerCase().includes(q.toLowerCase()) || (c.subs||[]).some(s=>s.name.toLowerCase().includes(q.toLowerCase())))
  return (
    <div>
      <h1 className="text-2xl font-bold mb-3">Service Taxonomy</h1>
      <input placeholder="Search..." value={q} onChange={e=>setQ(e.target.value)} className="p-2 border mb-4 w-full"/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filtered.map(cat=>(
          <div className='flex items-center gap-2 p-3 border rounded'>
            <img src={`/assets/icons/${cat.name.toLowerCase().replace(/ /g,'_')}.png`} alt={cat.name} className='w-8 h-8'/>
            <div> key={cat._id} className="p-3 border rounded">
            <h2 className="font-semibold">{cat.name}</h2>
            <ul className="list-disc ml-5">
              {(cat.subs||[]).slice(0,10).map(s=> <li key={s._id || s.name}>{s.name}</li>)}
            </ul>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}
