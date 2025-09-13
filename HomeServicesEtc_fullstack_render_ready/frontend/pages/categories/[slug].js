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

export async function getServerSideProps({ params }){
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/collections')
  const collections = await res.json()
  const category = collections.find(c => c.slug === params.slug) || null
  return { props: { category } }
}
