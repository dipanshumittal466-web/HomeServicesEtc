import React from 'react'
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis } from 'recharts'

const useOfFunds = [{name:'Platform',value:30},{name:'Marketing',value:35},{name:'Compliance',value:15},{name:'Operations',value:20}]
const projections = [{year:'Year 1',revenue:200000},{year:'Year 2',revenue:750000}]

export default function Investors(){
  return (
    <div>
      <h1 className="text-2xl font-bold mb-3">Investor Overview</h1>
      <section className="mb-4">
        <h2 className="font-semibold">Business Model</h2>
        <p>Reverse job marketplace: job posters post for free; tradies pay subscriptions to apply.</p>
      </section>

      <section className="mb-4">
        <h2 className="font-semibold">Use of Funds</h2>
        <PieChart width={300} height={200}><Pie dataKey="value" data={useOfFunds} cx="50%" cy="50%" outerRadius={60}><Tooltip/></Pie></PieChart>
      </section>

      <section>
        <h2 className="font-semibold">Financial Projections</h2>
        <BarChart width={400} height={200} data={projections}><XAxis dataKey="year"/><YAxis/><Bar dataKey="revenue" /></BarChart>
      </section>
    </div>
  )
}
