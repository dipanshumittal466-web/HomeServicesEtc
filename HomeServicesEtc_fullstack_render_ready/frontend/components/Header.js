export default function Header() {
  return (
    <header style={{ background: '#0b6cff', color: '#fff', padding: 12 }}>
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {/* Logo + Brand */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img
              src="/assets/logo.jpeg"
              alt="HomeServicesEtc Logo"
              style={{ height: 40, marginRight: 10 }}
            />
            <span style={{ color: '#fff', fontWeight: 700, fontSize: 20 }}>HomeServicesEtc</span>
          </a>
        </div>

        {/* Navigation */}
        <nav>
          <a href="/categories" style={{ color: '#fff', marginRight: 12 }}>Categories</a>
          <a href="/jobs" style={{ color: '#fff', marginRight: 12 }}>Jobs</a>
          <a href="/post-job" style={{ color: '#fff', marginRight: 12 }}>Post Job</a>
          <a href="/subscriptions" style={{ color: '#fff', marginRight: 12 }}>Subscribe</a>
        </nav>
      </div>
    </header>
  );
}
