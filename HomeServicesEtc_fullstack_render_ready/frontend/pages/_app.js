import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
  // Load categories mapping on client side
  if (typeof window !== 'undefined') {
    fetch('/assets/categories_mapping.json')
      .then(r => r.json())
      .then(m => {
        window.__CATEGORIES_MAPPING__ = m
      })
      .catch(() => {})
  }

  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
