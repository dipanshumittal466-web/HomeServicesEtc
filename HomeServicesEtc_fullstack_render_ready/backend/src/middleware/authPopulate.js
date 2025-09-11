const jwt = require('jsonwebtoken')
const User = require('../models/User')
const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret'
module.exports = async function(req,res,next){
  const h = req.headers.authorization
  if(!h || !h.startsWith('Bearer ')) { req.user = null; return next() }
  const token = h.slice(7)
  try{
    const decoded = jwt.verify(token, JWT_SECRET)
    const user = await User.findById(decoded.id).lean()
    req.user = user
    next()
  }catch(e){
    req.user = null
    next()
  }
}
