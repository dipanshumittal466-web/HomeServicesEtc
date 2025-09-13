import useSWR from 'swr';
export default function PosterDashboard(){
  const fetcher = (u)=> fetch(u).then(r=>r.json());
  const {data} = useSWR('/api/jobs', fetcher);
  return (<div style={{padding:20}}><h2>Poster Dashboard — My Jobs</h2>{data?data.map(j=>(<div key={j._id} style={{border:'1px solid #ddd', padding:12, margin:8}}><h3>{j.title}</h3><p>{j.description}</p></div>)):'Loading...'}</div>);
}
