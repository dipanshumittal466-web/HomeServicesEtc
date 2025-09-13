import fs from 'fs'
import path from 'path'
import Navbar from '../../components/Navbar'

export default function CategoryPage({ category }){
  if(!category) return <div>Not found</div>
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>{category.title}</h1>
        <p>{category.description}</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:12}}>
          {category.services.map(s=>(
            <div key={s.id} className="card">
              <h4>{s.title}</h4>
              <p>From ₹{s.starting_price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths(){
  const data = fs.readFileSync(path.join(process.cwd(),'../../data/collections.json'),'utf-8')
  const collections = JSON.parse(data)
  return {
    paths: collections.map(c=>({params:{slug:c.slug}})),
    fallback:false
  }
}

export async function getStaticProps({params}){
  const data = fs.readFileSync(path.join(process.cwd(),'../../data/collections.json'),'utf-8')
  const collections = JSON.parse(data)
  const category = collections.find(c=>c.slug===params.slug) || null
  return { props: { category } }
}
