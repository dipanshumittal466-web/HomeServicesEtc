import React, {useEffect, useState} from 'react';
import axios from '../utils/api';

export default function AdminCategories(){
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({name:'', icon:'', subcategories:''});
  const [editing, setEditing] = useState(null);

  const fetchCats = async ()=>{
    try{
      const res = await axios.get('/admin/categories');
      setCats(res.data);
    }catch(e){ console.error(e); }
    setLoading(false);
  };

  useEffect(()=>{ fetchCats(); },[]);

  const submit = async (e)=>{
    e.preventDefault();
    const payload = {...form, subcategories: form.subcategories.split('\n').map(s=>s.trim()).filter(Boolean)};
    try{
      if(editing){
        await axios.put(`/admin/categories/${editing}`, payload);
      }else{
        await axios.post('/admin/categories', payload);
      }
      setForm({name:'', icon:'', subcategories:''}); setEditing(null); fetchCats();
    }catch(e){ console.error(e); }
  };

  const remove = async (id)=>{
    if(!confirm('Delete category?')) return;
    try{ await axios.delete(`/admin/categories/${id}`); fetchCats(); }catch(e){ console.error(e); }
  };

  const startEdit = (c)=>{ setEditing(c._id); setForm({name:c.name, icon:c.icon, subcategories:c.subcategories.join('\n')}); };

  return (
    <div>
      <h1 className='text-2xl font-semibold mb-4'>Admin - Categories</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='bg-white p-4 rounded shadow'>
          <h3 className='font-semibold mb-2'>{editing ? 'Edit' : 'Add'} Category</h3>
          <form onSubmit={submit} className='space-y-3'>
            <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder='Name' className='w-full border p-2 rounded' />
            <input value={form.icon} onChange={e=>setForm({...form,icon:e.target.value})} placeholder='Icon filename (e.g. plumbing.png)' className='w-full border p-2 rounded' />
            <textarea value={form.subcategories} onChange={e=>setForm({...form,subcategories:e.target.value})} placeholder='Subcategories, one per line' className='w-full border p-2 rounded' rows={6}></textarea>
            <div className='flex gap-2'><button className='px-3 py-1 bg-indigo-600 text-white rounded'>{editing? 'Update':'Create'}</button> {editing && <button type='button' onClick={()=>{setEditing(null); setForm({name:'',icon:'',subcategories:''})}} className='px-3 py-1 border rounded'>Cancel</button>}</div>
          </form>
        </div>
        <div className='md:col-span-2'>
          <h3 className='font-semibold mb-2'>Existing Categories</h3>
          {loading ? <p>Loading...</p> : (
            <div className='space-y-2'>
              {cats.map(c=>(
                <div key={c._id} className='bg-white p-3 rounded shadow flex justify-between items-center'>
                  <div>
                    <div className='font-semibold'>{c.name}</div>
                    <div className='text-sm text-gray-600'>{c.subcategories?.slice(0,5).join(', ')}</div>
                  </div>
                  <div className='flex gap-2'>
                    <button onClick={()=>startEdit(c)} className='px-2 py-1 border rounded'>Edit</button>
                    <button onClick={()=>remove(c._id)} className='px-2 py-1 bg-red-600 text-white rounded'>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
