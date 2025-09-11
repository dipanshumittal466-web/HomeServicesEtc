// Assumes req.user is populated by auth middleware (not implemented here)
// Blocks access to job routes if insurance/id not verified
module.exports = function(req,res,next){
  const user = req.user
  if(!user) return res.status(401).json({error:'Not authenticated'})
  const hasInsurance = user.insuranceDoc && user.insuranceDoc.verified
  const hasId = user.idDoc && user.idDoc.verified
  if(user.role === 'tradie' && (!hasInsurance || !hasId)){
    return res.status(403).json({error:'You cannot access jobs until your insurance and ID are uploaded and approved.'})
  }
  next()
}
