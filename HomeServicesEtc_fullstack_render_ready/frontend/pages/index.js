import Link from 'next/link';
export default function Home(){
  return (<div className='container'><header style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}><img src='/assets/logo.jpeg' alt='logo' style={{height:56}}/></header>
  <section style={{padding:40, background:'#fff', borderRadius:8, marginTop:20}}><h1>Homepage — HomeServicesEtc v9</h1><p>Post a job and get quotes from verified providers.</p><p><a href='/post-job'>Post a Job</a> | <a href='/categories'>Browse Categories</a></p></section>
  </div>);
}
