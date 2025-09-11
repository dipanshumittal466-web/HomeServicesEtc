import React from 'react'
import Users from './AdminUsers'
import Jobs from './AdminJobs'
import Docs from './AdminDocs'
import Audit from './AdminAudit'
export default function AdminApp(){
  const [page, setPage] = React.useState('users')
  return (
    <div>
      <nav className="mb-4 space-x-3">
        <button onClick={()=>setPage('users')}>Users</button>
        <button onClick={()=>setPage('jobs')}>Jobs</button>
        <button onClick={()=>setPage('docs')}>Docs</button>
        <button onClick={()=>setPage('audit')}>Audit</button>
      </nav>
      <div>
        {page==='users' && <Users/>}
        {page==='jobs' && <Jobs/>}
        {page==='docs' && <Docs/>}
        {page==='audit' && <Audit/>}
      </div>
    </div>
  )
}
