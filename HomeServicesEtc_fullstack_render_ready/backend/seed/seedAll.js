const mongoose = require('mongoose');
const fs = require('fs');
const Category = require('../src/models/Category');
const User = require('../src/models/User');
const Subscription = require('../src/models/Subscription');
const Job = require('../src/models/Job');
const Document = require('../src/models/Document');

const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/homeservicesetc';
async function run(){
  await mongoose.connect(MONGO, {useNewUrlParser:true, useUnifiedTopology:true});
  console.log('Connected for seeding combined project');
  // categories
  try{
    const data = JSON.parse(fs.readFileSync(__dirname + '/categories_parsed.json','utf8'));
    for(const item of data.mains){
      const exists = await Category.findOne({name:item.main});
      if(!exists){
        const subs = (item.subs||[]).map(s=>({name:s}));
        await new Category({name:item.main, subs}).save();
        console.log('Inserted category', item.main);
      }
    }
  }catch(e){ console.log('No categories_parsed.json found or parse error') }
  // users/subs/jobs
  await User.deleteMany({}); await Subscription.deleteMany({}); await Job.deleteMany({}); await Document.deleteMany({});
  const sub = await new Subscription({tier:'tier10',active:true,startsAt:new Date(),limits:{applicationsPerMonth:10}}).save();
  const admin = await new User({name:'Admin',email:'admin@hs.test',role:'admin',indemnityAccepted:true}).save();
  const tradie = await new User({name:'Tradie One',email:'tradie1@hs.test',role:'tradie',indemnityAccepted:true,subscription:sub._id,verified:true}).save();
  const poster = await new User({name:'Poster',email:'poster@hs.test',role:'job_poster'}).save();
  await new Job({title:'Fix kitchen sink',description:'Leaky sink',category:'Plumbing',postedBy:poster._id}).save();
  console.log('Seeded core CRM data');
  process.exit(0);
}
run().catch(e=>{console.error(e); process.exit(1)});
