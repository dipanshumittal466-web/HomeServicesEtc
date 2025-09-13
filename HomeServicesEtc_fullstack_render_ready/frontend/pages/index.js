import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function Home({ collections }){
  return (
    <>
      <Navbar />
      <div className="container layout">
        <Sidebar categories={collections} />
        <main style={{flex:1}}>
          <section style={{marginBottom:20}}>
            <div className="card" style={{padding:20}}>
              <h1>Find local services & tradies — Post a job for free</h1>
              <p>HomeServicesEtc.com — 2025 V9 model</p>
            </div>
          </section>

          <section>
            <h2>All Categories</h2>
            <div className="grid">
              {collections.map(c=>(
                <div className="card" key={c.id}>
                  <img src={c.image} alt={c.title} style={{height:120,width:'100%',objectFit:'cover',borderRadius:8}}/>
                  <h3>{c.title}</h3>
                  <p style={{fontSize:13,color:'#444'}}>{c.description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export async function getServerSideProps(){
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/collections')
  const collections = await res.json()
  return { props: { collections } }
}
