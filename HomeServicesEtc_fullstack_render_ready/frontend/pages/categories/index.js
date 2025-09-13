import fs from 'fs'
import path from 'path'
import Navbar from '../../components/Navbar'
import Link from 'next/link'

export default function Categories({collections}){
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

export async function getStaticProps(){
  const data = fs.readFileSync(path.join(process.cwd(),'../../data/collections.json'),'utf-8')
  const collections = JSON.parse(data)
  return { props: { collections } }
}
