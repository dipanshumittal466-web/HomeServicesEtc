export default function Footer() {
  return (
    <footer style={{ background: '#f1f5f9', padding: 30, marginTop: 40 }}>
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap'
        }}
      >
        {/* Logo + Brand */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
          <img
            src="/assets/logo.jpeg"
            alt="HomeServicesEtc Logo"
            style={{ height: 40, marginRight: 10 }}
          />
          <span style={{ fontWeight: 700, fontSize: 18 }}>HomeServicesEtc</span>
        </div>

        {/* Quick Links */}
        <div style={{ marginBottom: 20 }}>
          <h4 style={{ marginBottom: 10 }}>Quick Links</h4>
          <a href="/about" style={{ display: 'block', color: '#333', marginBottom: 6 }}>About Us</a>
          <a href="/contact" style={{ display: 'block', color: '#333', marginBottom: 6 }}>Contact</a>
          <a href="/legal/privacy" style={{ display: 'block', color: '#333', marginBottom: 6 }}>Privacy Policy</a>
          <a href="/legal/terms" style={{ display: 'block', color: '#333', marginBottom: 6 }}>Terms & Conditions</a>
        </div>

        {/* Contact Info */}
        <div style={{ marginBottom: 20 }}>
          <h4 style={{ marginBottom: 10 }}>Contact</h4>
          <p style={{ margin: 0 }}>Email: support@homeservicesetc.com</p>
          <p style={{ margin: 0 }}>Phone: +61 123 456 789</p>
        </div>
      </div>

      <div
        style={{
          textAlign: 'center',
          marginTop: 20,
          borderTop: '1px solid #ddd',
          paddingTop: 15,
          fontSize: 14,
          color: '#555'
        }}
      >
        © {new Date().getFullYear()} HomeServicesEtc. All rights reserved.
      </div>
    </footer>
  );
}
