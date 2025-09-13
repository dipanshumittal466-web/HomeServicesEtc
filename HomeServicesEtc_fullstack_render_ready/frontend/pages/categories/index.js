import useSWR from 'swr';
const fetcher = (url)=> fetch(url).then(r=>r.json());
export default function Categories(){
  const {data} = useSWR('/api/categories', fetcher);
  return (<div style={{padding:20}}>
    <h2>All Categories (45)</h2>
    <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:12}}>
      {data ? data.map(c=>(
        <a key={c._id} href={'/categories/'+c.slug} style={{padding:12, border:'1px solid #ddd', borderRadius:8, textAlign:'center', background:'#fff'}}>
          <img src={c.iconPath} width={64} height={64} alt={c.name}/>
          <div>{c.name}</div>
        </a>
      )) : <div>Loading...</div>}
    </div>
  </div>);
}
