import Link from 'next/link'
export default function Navbar(){
  return (
    <header className="header">
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <img src="/images/0126676a-a494-4029-8dc6-2ad2fc325f18.png" alt="logo" style={height:44}/>
          <div style={{fontWeight:700}}>HomeServicesEtc</div>
        </div>
        <nav>
          <Link href="/">Home</Link> {' | '}
          <Link href="/categories">Categories</Link> {' | '}
          <Link href="/jobs">Jobs</Link> {' | '}
          <Link href="/crm">CRM</Link> {' | '}
          <Link href="/compliance">Compliance</Link> {' | '}
          <Link href="/auth">Login</Link>
        </nav>
      </div>
    </header>
  )
}
