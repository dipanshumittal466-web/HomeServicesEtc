import Navbar from '../../components/Navbar'
import Link from 'next/link'

export default function Categories({ collections }){
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Categories</h1>
        <div className="grid">
          {collections.map(c=>(
            <Link key={c.id} href={'/categories/'+c.slug}>
              <a className="card">
                <img src={c.image} style={{height:140,width:'100%',objectFit:'cover',borderRadius:8}}/>
                <h3>{c.title}</h3>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(){
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/collections')
  const collections = await res.json()
  return { props: { collections } }
}
