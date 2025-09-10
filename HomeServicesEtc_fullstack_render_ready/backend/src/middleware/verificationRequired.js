// Verification required middleware - placeholder
module.exports = function(req,res,next){
  if(req.user && req.user.verification_status === 'approved'){ return next(); }
  return res.status(403).send('Verification required');
};
