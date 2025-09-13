import {useRouter} from 'next/router';
export default function CatDetail(){
  const r = useRouter();
  const {slug} = r.query;
  return (<div style={{padding:20}}>
    <h2>Category: {slug}</h2>
    <p>Subcategories will be listed here (placeholders).</p>
    <ul><li>Subcategory A</li><li>Subcategory B</li></ul>
  </div>);
}
