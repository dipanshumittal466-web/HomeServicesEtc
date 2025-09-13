import Link from 'next/link'
export default function Sidebar({categories}){
  return (
    <aside className="sidebar card">
      <h3>Categories</h3>
      <ul style={{listStyle:'none',padding:0}}>
        {categories.slice(0,45).map(cat=>(
          <li key={cat.id} style={{margin:'8px 0'}}>
            <Link href={'/categories/'+cat.slug}>{cat.title}</Link>
            <div style={{fontSize:12,color:'#666'}}>{cat.services && cat.services.length} subcategories</div>
          </li>
        ))}
      </ul>
    </aside>
  )
}
