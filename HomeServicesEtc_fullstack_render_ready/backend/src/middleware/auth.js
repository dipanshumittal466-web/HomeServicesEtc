const jwt = require('jsonwebtoken');
module.exports = function(req,res,next){
  const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];
  if(!token) return res.status(401).json({msg:'No token'});
  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'change_this_secret');
    req.user = decoded;
    next();
  }catch(e){
    return res.status(401).json({msg:'Invalid token'});
  }
};
